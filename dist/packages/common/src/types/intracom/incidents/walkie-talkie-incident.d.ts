export interface IncidentUpdate {
    id: string;
    message: string;
    author?: string;
    source?: "walkie-talkie" | "sms" | "email" | "whatsapp" | "mobile-app" | "ai";
    isAiGenerated?: boolean;
    createdAt?: number;
    segment_id?: string;
}
export type RiskLevel = "safety" | "security" | "operational" | "medical" | "compliance" | "maintenance";
export interface Incidents {
    incidents?: IntracomIncident[] | null;
}
interface MediaFile {
    id: string;
    url: string;
    filename: string;
    type: "audio" | "video" | "image" | "document";
    isSilent?: boolean;
    metadata?: {
        duration?: number;
        size?: number;
        format?: string;
    };
}
export interface IntracomIncident {
    id: string;
    title: string;
    description: string;
    location: string | null;
    locationId?: string;
    nearestLocationId?: string;
    aiSummary: string | null;
    reasoning?: string | null;
    tags: string[];
    severity: string;
    updates: IncidentUpdate[];
    blobName: string;
    solutionIds: string[];
    channelIds?: string[];
    signalIds?: string[];
    insightIds?: string[];
    userId: string;
    createdAt: number;
    mediaFiles: MediaFile[];
    status?: "active" | "resolved" | "archived";
    publishingStatus?: "published" | "unpublished" | "reviewed";
    lastEditedBy?: string;
    original_transcript?: string;
    normalised_transcript?: string;
    lastUpdated: number;
    organizationId: string;
}
export {};
//# sourceMappingURL=walkie-talkie-incident.d.ts.map