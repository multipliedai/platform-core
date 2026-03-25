import { UserLocation } from "../../user/user-location/model";
export interface FingerprintEntry extends Partial<UserLocation> {
    id?: string;
    locationId?: string;
    locationName?: string;
    floor?: number;
    createdAt: number;
    lastUpdated: number;
    collectedByUserId?: string;
}
/** One document per layout; id = {buildingId}-{floorId}-{geofencesLayoutId}. */
export interface IndoorPositioningFingerprint {
    id: string;
    organizationId: string;
    buildingId: string;
    floorId: string;
    geofencesLayoutId: string;
    fingerprints: FingerprintEntry[];
    createdAt: number;
    lastUpdated: number;
}
//# sourceMappingURL=model.d.ts.map