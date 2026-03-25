"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_GUARD_POST_SHIFT_SUMMARY_UPDATE = exports.UPSERT_GUARD_POST_SHIFT_SUMMARY_UPDATE = exports.GET_GUARD_POST_SHIFT_SUMMARY_UPDATE_BY_ID = exports.GET_GUARD_POST_SHIFT_SUMMARY_UPDATES = void 0;
const client_1 = require("@apollo/client");
exports.GET_GUARD_POST_SHIFT_SUMMARY_UPDATES = (0, client_1.gql) `
  query GetGuardPostShiftSummaryUpdates($filters: JSON, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryUpdates(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_GUARD_POST_SHIFT_SUMMARY_UPDATE_BY_ID = (0, client_1.gql) `
  query GetGuardPostShiftSummaryUpdateById($id: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryUpdateById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_GUARD_POST_SHIFT_SUMMARY_UPDATE = (0, client_1.gql) `
  mutation UpsertGuardPostShiftSummaryUpdate($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertGuardPostShiftSummaryUpdate(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_GUARD_POST_SHIFT_SUMMARY_UPDATE = (0, client_1.gql) `
  mutation DeleteGuardPostShiftSummaryUpdate($id: String!, $accessToken: String, $organizationId: String!) {
    deleteGuardPostShiftSummaryUpdate(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=updates.js.map