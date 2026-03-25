"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBuildingLayout = isBuildingLayout;
exports.isFloorLayout = isFloorLayout;
exports.isMapConfigLayout = isMapConfigLayout;
exports.isGeofencesLayout = isGeofencesLayout;
// --- Type guards for data ---
function isBuildingLayout(layout) {
    return layout.type === "building";
}
function isFloorLayout(layout) {
    return layout.type === "floor";
}
function isMapConfigLayout(layout) {
    return layout.type === "map_config";
}
function isGeofencesLayout(layout) {
    return layout.type === "geofences";
}
//# sourceMappingURL=model.js.map