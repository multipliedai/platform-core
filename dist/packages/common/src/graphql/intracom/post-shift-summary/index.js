"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_POST_SHIFT_SUMMARY_HISTORY = exports.SHARE_POST_SHIFT_SUMMARY = exports.GET_SHARED_POST_SHIFT_SUMMARY = exports.DELETE_POST_SHIFT_SUMMARY = exports.UPSERT_POST_SHIFT_SUMMARY = exports.GET_POST_SHIFT_SUMMARIES = void 0;
const client_1 = require("@apollo/client");
exports.GET_POST_SHIFT_SUMMARIES = (0, client_1.gql) `
  query GetPostShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPostShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation UpsertPostShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPostShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation DeletePostShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deletePostShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SHARED_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  query GetSharedPostShiftSummary($id: String, $organizationId: String!, $recaptchaToken: String) {
    getSharedPostShiftSummary(id: $id, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;
exports.SHARE_POST_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation SharePostShiftSummary($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePostShiftSummary(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_POST_SHIFT_SUMMARY_HISTORY = (0, client_1.gql) `
  query GetPostShiftSummaryHistory($postShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getPostShiftSummaryHistory(postShiftSummaryId: $postShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map