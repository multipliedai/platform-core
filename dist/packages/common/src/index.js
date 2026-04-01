"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @platform-core/common
 * Shared types, schemas, models, and validation.
 * Safe for webapp and mobileapp (no DOM/localStorage).
 * Browser-only utils (localStorage, FileReader) live in @platform-core/webapp.
 */
__exportStar(require("./utils/util"), exports);
__exportStar(require("./utils/timezone-date-conversion"), exports);
__exportStar(require("./types/user/user/model"), exports);
__exportStar(require("./types/user/user-location/model"), exports);
__exportStar(require("./types/user/organization/model"), exports);
__exportStar(require("./types/intracom/config/model"), exports);
__exportStar(require("./types/intracom/calendar/model"), exports);
__exportStar(require("./types/intracom/channels/model"), exports);
__exportStar(require("./types/intracom/edge-devices/model"), exports);
__exportStar(require("./types/intracom/feedback/model"), exports);
__exportStar(require("./types/intracom/guard-post-shift-summary/model"), exports);
__exportStar(require("./types/intracom/guard-post-shift-summary/updates/model"), exports);
__exportStar(require("./types/intracom/incidents/walkie-talkie-incident"), exports);
__exportStar(require("./types/intracom/insights/model"), exports);
__exportStar(require("./types/intracom/locations/model"), exports);
__exportStar(require("./types/intracom/map-data/model"), exports);
__exportStar(require("./types/intracom/post-shift-summary/model"), exports);
__exportStar(require("./types/intracom/pre-shift-summary/model"), exports);
__exportStar(require("./types/intracom/programs/model"), exports);
__exportStar(require("./types/intracom/solutions/model"), exports);
__exportStar(require("./types/indoor-positioning/layout/model"), exports);
__exportStar(require("./types/indoor-positioning/fingerprints/model"), exports);
__exportStar(require("./types/indoor-positioning/tracking/model"), exports);
__exportStar(require("./types/indoor-positioning/model-training/model"), exports);
__exportStar(require("./graphql"), exports);
// export * from './schemas';
//# sourceMappingURL=index.js.map