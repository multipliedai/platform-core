
export interface IntracomPostShiftSummary {
  id: string;
  solutionId: string;
  createdAt: number;
  date: number;
  lastUpdated: number;
  userId?: string;
  organizationId: string; // Multi-tenant organization identifier
  publishingStatus?: "published" | "unpublished" | "reviewed";
  highlights: string[];
  top_locations: {
    name: string;
    incidents: number;
    severity_index: number;
  }[];
  top_categories: {
    category: string;
    count: number;
  }[];
  audio?: {
    formal?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
    rap?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
    spanish?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
    spanish_rap?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
  };
  resource_highlights?: string[];
  knowledge_highlights?: string[];
  communications_highlights?: string[];
  shared?: boolean;
  relatedIncidentIds?: string[];
  relatedGuardPostShiftIds?: string[];
}

