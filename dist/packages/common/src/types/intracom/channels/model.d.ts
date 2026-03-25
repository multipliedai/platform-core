export type SignalType = "walkie-talkie" | "sms" | "email" | "social-media" | "news-api" | "mobile-app" | "cctv" | "sensor" | "phone-call";
export interface IntracomChannel {
    id: string;
    type: SignalType;
    name: string;
    phoneNumber?: string;
    email?: string;
    geofenceBuildingIds?: string[];
    geofenceFloorIds?: string[];
    geofenceLocationIds?: string[];
    description: string;
    createdAt: number;
    lastUpdated: number;
    userId: string;
    organizationId: string;
}
//# sourceMappingURL=model.d.ts.map