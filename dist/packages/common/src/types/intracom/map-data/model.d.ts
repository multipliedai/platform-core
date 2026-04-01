/**
 * Map Data Model for Intracom
 *
 * Hierarchical structure:
 * Organization -> Location -> Building -> Room/Area
 *
 * This single schema can represent any level in the hierarchy
 * using the 'level' field to distinguish between them.
 */
export type MapDataLevel = "location" | "building" | "room-area";
export type RoomAreaType = "hall" | "lobby" | "parking" | "room" | "zone" | "outdoor" | "emergency" | "restricted" | "other";
/**
 * Anchor point for positioning incidents on the map
 * Coordinates are normalized (0-1) relative to the map image dimensions
 */
export interface MapAnchor {
    x: number;
    y: number;
}
/**
 * Map configuration for a room/area
 */
export interface RoomAreaMapConfig {
    /**
     * Path to the map image (SVG, PNG, etc.)
     * e.g., "/assets/hall-a.svg"
     */
    imagePath: string;
    /**
     * Original image dimensions (for scaling calculations)
     */
    imageDimensions: {
        width: number;
        height: number;
    };
    /**
     * Anchor points for positioning incidents
     * Coordinates are normalized (0-1) relative to image dimensions
     */
    anchors: MapAnchor[];
    /**
     * Optional: Display order for carousel/listing
     */
    displayOrder?: number;
}
export interface IntracomMapData {
    id: string;
    organizationId: string;
    /**
     * Level in the hierarchy: location, building, or room-area
     */
    level: MapDataLevel;
    /**
     * Parent references for hierarchy
     * - location: no parent (locationId and buildingId are null)
     * - building: parent is location (locationId set, buildingId is null)
     * - room-area: parent is building (locationId and buildingId set)
     */
    locationId?: string;
    buildingId?: string;
    /**
     * Basic information
     */
    name: string;
    description?: string;
    address?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
    /**
     * Level-specific fields
     */
    floorCount?: number;
    roomAreaType?: RoomAreaType;
    mapConfig?: RoomAreaMapConfig;
    capacity?: number;
    dimensions?: {
        length?: number;
        width?: number;
        area?: number;
    };
    tags?: string[];
    isCombinedView?: boolean;
    combinedRoomAreaIds?: string[];
    /**
     * Common fields
     */
    isActive: boolean;
    createdAt: number;
    lastUpdated: number;
    userId: string;
}
//# sourceMappingURL=model.d.ts.map