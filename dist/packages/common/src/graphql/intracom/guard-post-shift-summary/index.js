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
exports.GET_GUARD_POST_SHIFT_SUMMARY_HISTORY = exports.DELETE_GUARD_POST_SHIFT_SUMMARY = exports.UPSERT_GUARD_POST_SHIFT_SUMMARY = exports.GET_GUARD_POST_SHIFT_SUMMARY_BY_ID = exports.GET_GUARD_POST_SHIFT_SUMMARIES = void 0;
const client_1 = require("@apollo/client");
exports.GET_GUARD_POST_SHIFT_SUMMARIES = (0, client_1.gql) `
  query GetGuardPostShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_GUARD_POST_SHIFT_SUMMARY_BY_ID = (0, client_1.gql) `
  query GetGuardPostShiftSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_GUARD_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation UpsertGuardPostShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertGuardPostShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_GUARD_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation DeleteGuardPostShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deleteGuardPostShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_GUARD_POST_SHIFT_SUMMARY_HISTORY = (0, client_1.gql) `
  query GetGuardPostShiftSummaryHistory($guardPostShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryHistory(guardPostShiftSummaryId: $guardPostShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
__exportStar(require("./updates"), exports);
//# sourceMappingURL=index.js.map