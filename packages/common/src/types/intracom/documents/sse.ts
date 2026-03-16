import { BaseSSEHandler, SSEConnection } from '../../sse-connections/base-sse-handler';
import { getIntracomDocuments } from './logic';
import { MongoIntracomDocumentModel, IntracomDocument } from './model';
import { MongoDbFilter } from '../../../models/mongo-db-queries';
import { getMongoDbFilterWithOrgId } from '../../../common/util';
import { documentMatchesFilter } from '../../local-filter-match';

export class DocumentsSSEHandler extends BaseSSEHandler {
  getEndpointPath(): string {
    return '/sse/intracom-documents';
  }

  getCollectionName(): string {
    return 'intracom-document';
  }

  getModel() {
    return MongoIntracomDocumentModel;
  }

  async getInitialData(filters: MongoDbFilter, userId?: string, organizationId?: string): Promise<IntracomDocument[]> {
    // Merge organizationId into filters using getMongoDbFilterWithOrgId
    const finalFilters = getMongoDbFilterWithOrgId({
      fieldFilters: filters?.fieldFilters ?? [],
      orgId: organizationId,
    });
    return await getIntracomDocuments(finalFilters);
  }

  validateFilters(filters: any): boolean {
    // Basic validation for MongoDB filters
    if (!filters || typeof filters !== 'object') {
      return true; // Allow empty filters (will use default)
    }
    
    // Validate fieldFilters structure if present
    if (filters.fieldFilters && !Array.isArray(filters.fieldFilters)) {
      return false;
    }
    
    return true;
  }

  async handleChangeEvent(change: any, connection: SSEConnection): Promise<void> {
    try {
      switch (change.operationType) {
        case 'insert': {
          const newDocument = change.fullDocument;
          const matches =
            newDocument != null &&
            documentMatchesFilter(
              newDocument as unknown as Record<string, unknown>,
              connection.filters ?? undefined,
              { organizationId: connection.organizationId }
            );
          if (newDocument != null && matches) {
            this.sendEventToConnection(connection.id, {
              event: 'new-intracom-document',
              data: this.removeMongoFields(newDocument)
            });
          }
          break;
        }
        case 'update': {
          let updatedDocument = change.fullDocument;
          if (updatedDocument == null && change.documentKey?._id != null) {
            try {
              const doc = await this.getModel().findById(change.documentKey._id).lean();
              updatedDocument = doc ?? undefined;
            } catch (err) {
              console.error('Documents SSE: failed to fetch document for update', err);
            }
          }
          const matches =
            updatedDocument != null &&
            documentMatchesFilter(
              updatedDocument as unknown as Record<string, unknown>,
              connection.filters ?? undefined,
              { organizationId: connection.organizationId }
            );
          if (updatedDocument != null && matches) {
            this.sendEventToConnection(connection.id, {
              event: 'updated-intracom-document',
              data: this.removeMongoFields(updatedDocument)
            });
          }
          break;
        }
          
        case 'delete':
          // Document deleted
          const deletedId = change.documentKey?._id;
          if (deletedId) {
            this.sendEventToConnection(connection.id, {
              event: 'deleted-intracom-document',
              data: { id: deletedId }
            });
          }
          break;
          
        default:
          break;
      }
    } catch (error) {
      console.error('Error processing documents change event:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const documentsSSEHandler = new DocumentsSSEHandler();

// Legacy exports for backward compatibility
export const startDocumentsChangeStream = () => documentsSSEHandler.startChangeStream();
export const stopDocumentsChangeStream = () => documentsSSEHandler.stopChangeStream();
export const cleanupSSEConnections = () => documentsSSEHandler.cleanup();
export const broadcastDocumentsEvent = (eventType: string, data: any) => {
  documentsSSEHandler.broadcastEvent(eventType, data);
};

