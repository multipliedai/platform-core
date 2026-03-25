"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_SHARED_INTRACOM_DOCUMENT_STATUS = exports.GET_SHARED_INTRACOM_DOCUMENT_BY_ID = exports.GET_INTRACOM_DOCUMENT_HISTORY = exports.DELETE_INTRACOM_DOCUMENT = exports.UPSERT_INTRACOM_DOCUMENT = exports.GET_INTRACOM_DOCUMENT_BY_ID = exports.GET_INTRACOM_DOCUMENTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INTRACOM_DOCUMENTS = (0, client_1.gql) `
  query GetIntracomDocuments($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomDocuments(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INTRACOM_DOCUMENT_BY_ID = (0, client_1.gql) `
  query GetIntracomDocumentById($id: String!, $accessToken: String, $organizationId: String!) {
    getIntracomDocumentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INTRACOM_DOCUMENT = (0, client_1.gql) `
  mutation UpsertIntracomDocument($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIntracomDocument(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INTRACOM_DOCUMENT = (0, client_1.gql) `
  mutation DeleteIntracomDocument($id: String!, $accessToken: String, $organizationId: String!) {
    deleteIntracomDocument(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INTRACOM_DOCUMENT_HISTORY = (0, client_1.gql) `
  query GetIntracomDocumentHistory($documentId: String!, $accessToken: String, $organizationId: String!) {
    getIntracomDocumentHistory(documentId: $documentId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SHARED_INTRACOM_DOCUMENT_BY_ID = (0, client_1.gql) `
  query GetSharedIntracomDocumentById(
    $id: String!
    $organizationId: String!
    $recaptchaToken: String
  ) {
    getSharedIntracomDocumentById(
      id: $id
      organizationId: $organizationId
      recaptchaToken: $recaptchaToken
    )
  }
`;
exports.UPDATE_SHARED_INTRACOM_DOCUMENT_STATUS = (0, client_1.gql) `
  mutation UpdateSharedIntracomDocumentStatus(
    $id: String!
    $status: String!
    $organizationId: String!
    $userId: String!
    $recaptchaToken: String
    $comments: JSON
  ) {
    updateSharedIntracomDocumentStatus(
      id: $id
      status: $status
      organizationId: $organizationId
      userId: $userId
      recaptchaToken: $recaptchaToken
      comments: $comments
    )
  }
`;
//# sourceMappingURL=index.js.map