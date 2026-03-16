import { GeofencePolygon } from '../../indoor-positioning/layout/model';

export type LocationType =
  // Base / structure
  | "campus"
  | "building"
  | "floor"
  | "room"
  | "hall"
  | "zone"
  | "outdoor"
  | "parking"
  | "emergency"
  | "restricted"
  // Circulation / movement
  | "hallway"
  | "corridor"
  | "door"
  | "exit"
  | "entrance"
  | "gate"
  | "elevator"
  | "stairwell"
  | "escalator"
  | "ramp"
  // Common spaces
  | "lobby"
  | "atrium"
  | "reception"
  | "waiting-area"
  | "cafeteria"
  | "restroom"
  // Convention / event
  | "conference-room"
  | "auditorium"
  | "exhibition-hall"
  | "ballroom"
  // Medical / hospital
  | "clinic"
  | "ward"
  | "operating-room"
  | "pharmacy"
  | "laboratory"
  | "nurse-station"
  | "triage"
  | "icu"
  | "emergency-room"
  // Service / support
  | "loading-dock"
  | "service-area"
  | "utility"
  | "information-desk"
  | "gift-shop"
  | "kiosk"
  | "checkpoint"
  | "first-aid"
  | "aed"
  | "other";

export interface IntracomLocation {
  id: string;
  name: string;
  type: LocationType;
  floorNumber?: number;
  description?: string;
  address?: string;
  coordinates?: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude] in GeoJSON format
  };
  buildingId?: string;
  floorId?: string;
  geofence?: GeofencePolygon;
  radius?: number; // in meters
  capacity?: number;
  isActive: boolean;
  tags?: string[];
  parentId?: string; // Direct parent location ID
  ancestorIds?: string[]; // All ancestor IDs (parents, grandparents, etc.) for efficient descendant queries
  isRoot?: boolean; // True if this is a top-level location (no parent)
  createdAt: number;
  lastUpdated: number;
  userId: string;
  organizationId: string; // Multi-tenant organization identifier
  forOpeningInstructions?: boolean;
}
