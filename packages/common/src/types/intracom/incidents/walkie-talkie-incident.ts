// IncidentUpdate
export interface IncidentUpdate {
  id: string; // A kebab case id for incident update
  message: string; // The message of the incident or task from the transcript
  author?: string; // The person/guard name/id or control room mentioned in transcript
  source?: "walkie-talkie" | "sms" | "email" | "whatsapp" | "mobile-app" | "ai";
  isAiGenerated?: boolean; // Always true if AI generated
  createdAt?: number;
  segment_id?: string;
}

// Activity (renamed from Incident)
export type RiskLevel =
  | "safety"
  | "security"
  | "operational"
  | "medical"
  | "compliance"
  | "maintenance";

// Incidents wrapper
export interface Incidents {
  incidents?: IntracomIncident[] | null; // List of incidents or tasks
}

interface MediaFile {
  id: string;
  url: string;
  filename: string;
  type: "audio" | "video" | "image" | "document";
  isSilent?: boolean;
  metadata?: {
    duration?: number; // in seconds
    size?: number; // in bytes
    format?: string; // e.g., "mp3", "mp4", "jpg"
  }
}

export interface IntracomIncident {
  id: string; // A kebab case id for activity
  title: string; // Title for the activity
  description: string; // Short description of activity
  location: string | null; // Optional: specific location/post, e.g., Gate 2
  locationId?: string; // Optional: the location id
  nearestLocationId?: string; // Optional: the nearest location id
  aiSummary: string | null; // AI generated detailed summary
  reasoning?: string | null; // AI generated reasoning for desks
  tags: string[]; // Tags related to activity
  severity: string; // Severity level of the incident
  updates: IncidentUpdate[]; // List of updates (keeping same structure)
  blobName: string; /// Audio file name
  solutionIds: string[];
  channelIds?: string[]; // the source
  signalIds?: string[]; // the messaging feed item id
  insightIds?: string[]; // the insight id
  userId: string;
  createdAt: number;
  mediaFiles: MediaFile[];
  status?: "active" | "resolved" | "archived";
  publishingStatus?: "published" | "unpublished" | "reviewed";
  lastEditedBy?: string;
  original_transcript?: string;
  normalised_transcript?: string;
  lastUpdated: number;
  organizationId: string; // Multi-tenant organization identifier
}
