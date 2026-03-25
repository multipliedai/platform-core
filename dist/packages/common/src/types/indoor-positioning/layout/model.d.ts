import { IntracomLocation } from "../../intracom/locations/model";
export interface LayoutCorner {
    lat: number;
    lng: number;
}
export interface IndoorPositioningLayoutBuilding {
    /** Display name (e.g. "House No. 05") */
    name: string;
    /** Optional address */
    address?: string | null;
    /** Building footprint in world coordinates (lat/lng), typically 4 corners */
    corners: LayoutCorner[];
    /** Center point for map focus */
    location: {
        lat: number;
        lng: number;
    };
    /** Physical dimensions in meters (for scale reference) */
    dimensions: {
        width: number;
        length: number;
    };
    /** Rotation in degrees (e.g. for aligning floor plan to north) */
    rotation?: number;
}
export interface IndoorPositioningLayoutFloor {
    /** Parent building document id (IndoorPositioningLayout.id where type === "building") */
    buildingId: string;
    /** Display name (e.g. "GF", "1F") */
    name: string;
    /** Floor level (0 = ground, 1 = first, etc.) */
    level: number;
    /** Height of this floor above ground in meters (optional) */
    levelHeight?: number;
}
/** A single polygon geofence: ordered path of lat/lng (closed ring). */
export interface GeofencePolygon {
    type: "polygon";
    path: Array<{
        lat: number;
        lng: number;
    }>;
    /** Optional name (e.g. from KML Placemark). */
    name?: string;
}
/** Geofence geometry (polygon for now; circle can be added later). */
export type Geofence = GeofencePolygon;
export interface IndoorPositioningLayoutGeofences {
    buildingId: string;
    floorId: string;
    geofences: Geofence[];
}
export interface IndoorPositioningLayoutMapLayer {
    /** Layer identifier (e.g. "report_map_issue", "traffic") */
    type: string;
    /** [[southWestLat, southWestLng], [northEastLat, northEastLng]] */
    bounds: [[number, number], [number, number]];
}
export interface IndoorPositioningLayoutMapZoomBounds {
    zoom: number;
    /** [[southWestLat, southWestLng], [northEastLat, northEastLng]] */
    bounds: [[number, number], [number, number]];
}
export interface IndoorPositioningLayoutMapConfig {
    /** Attribution text (e.g. "Imagery ©2026 Airbus, Maxar Technologies") */
    attribution: string;
    /** Layer definitions with geographic bounds */
    layers: IndoorPositioningLayoutMapLayer[];
    /** Bounds per zoom level */
    zoomBounds: IndoorPositioningLayoutMapZoomBounds[];
}
export type IndoorPositioningLayoutData = IndoorPositioningLayoutBuilding | IndoorPositioningLayoutFloor | IndoorPositioningLayoutMapConfig | IndoorPositioningLayoutGeofences | IntracomLocation;
export type IndoorPositioningLayoutType = "building" | "floor" | "map_config" | "geofences" | "location";
export interface IndoorPositioningLayout {
    id: string;
    organizationId: string;
    type: IndoorPositioningLayoutType;
    data: IndoorPositioningLayoutData;
    /** When true, this layout is the primary one (e.g. one per organization or per organization+type). */
    isPrimary?: boolean;
    createdAt: number;
    lastUpdated: number;
}
export declare function isBuildingLayout(layout: IndoorPositioningLayout): layout is IndoorPositioningLayout & {
    type: "building";
    data: IndoorPositioningLayoutBuilding;
};
export declare function isFloorLayout(layout: IndoorPositioningLayout): layout is IndoorPositioningLayout & {
    type: "floor";
    data: IndoorPositioningLayoutFloor;
};
export declare function isMapConfigLayout(layout: IndoorPositioningLayout): layout is IndoorPositioningLayout & {
    type: "map_config";
    data: IndoorPositioningLayoutMapConfig;
};
export declare function isGeofencesLayout(layout: IndoorPositioningLayout): layout is IndoorPositioningLayout & {
    type: "geofences";
    data: IndoorPositioningLayoutGeofences;
};
//# sourceMappingURL=model.d.ts.map