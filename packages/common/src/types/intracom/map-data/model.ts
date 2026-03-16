
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

export type RoomAreaType = 
  | "hall" 
  | "lobby" 
  | "parking" 
  | "room" 
  | "zone" 
  | "outdoor" 
  | "emergency" 
  | "restricted"
  | "other";

/**
 * Anchor point for positioning incidents on the map
 * Coordinates are normalized (0-1) relative to the map image dimensions
 */
export interface MapAnchor {
  x: number; // Normalized X coordinate (0-1)
  y: number; // Normalized Y coordinate (0-1)
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
    width: number; // e.g., 2200
    height: number; // e.g., 900
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
  organizationId: string; // Multi-tenant organization identifier
  
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
  locationId?: string; // Parent location ID (for buildings and room-areas)
  buildingId?: string; // Parent building ID (for room-areas only)
  
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
  // For buildings
  floorCount?: number;
  
  // For room-areas
  roomAreaType?: RoomAreaType;
  mapConfig?: RoomAreaMapConfig;
  capacity?: number;
  dimensions?: {
    length?: number; // in meters
    width?: number; // in meters
    area?: number; // in square meters
  };
  tags?: string[];
  isCombinedView?: boolean; // Whether this room/area is a combined view
  combinedRoomAreaIds?: string[]; // IDs of room/areas this combines (if isCombinedView is true)
  
  /**
   * Common fields
   */
  isActive: boolean;
  createdAt: number;
  lastUpdated: number;
  userId: string; // Creator/updater
}


