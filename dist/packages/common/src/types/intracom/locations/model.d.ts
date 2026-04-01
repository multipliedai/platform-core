import { GeofencePolygon } from '../../indoor-positioning/layout/model';
export type LocationType = "campus" | "building" | "floor" | "room" | "hall" | "zone" | "outdoor" | "parking" | "emergency" | "restricted" | "hallway" | "corridor" | "door" | "exit" | "entrance" | "gate" | "elevator" | "stairwell" | "escalator" | "ramp" | "lobby" | "atrium" | "reception" | "waiting-area" | "cafeteria" | "restroom" | "conference-room" | "auditorium" | "exhibition-hall" | "ballroom" | "clinic" | "ward" | "operating-room" | "pharmacy" | "laboratory" | "nurse-station" | "triage" | "icu" | "emergency-room" | "loading-dock" | "service-area" | "utility" | "information-desk" | "gift-shop" | "kiosk" | "checkpoint" | "first-aid" | "aed" | "other";
export interface IntracomLocation {
    id: string;
    name: string;
    type: LocationType;
    floorNumber?: number;
    description?: string;
    address?: string;
    coordinates?: {
        type: "Point";
        coordinates: [number, number];
    };
    buildingId?: string;
    floorId?: string;
    geofence?: GeofencePolygon;
    radius?: number;
    capacity?: number;
    isActive: boolean;
    tags?: string[];
    parentId?: string;
    ancestorIds?: string[];
    isRoot?: boolean;
    createdAt: number;
    lastUpdated: number;
    userId: string;
    organizationId: string;
    forOpeningInstructions?: boolean;
}
//# sourceMappingURL=model.d.ts.map