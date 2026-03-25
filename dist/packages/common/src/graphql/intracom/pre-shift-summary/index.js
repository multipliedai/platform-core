"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHARE_PRE_SHIFT_SUMMARY_HISTORY = exports.GET_SHARED_PRE_SHIFT_SUMMARY_HISTORY = exports.GET_PRE_SHIFT_SUMMARY_HISTORY = exports.SHARE_PRE_SHIFT_SUMMARY = exports.GET_SHARED_PRE_SHIFT_SUMMARY = exports.DELETE_PRE_SHIFT_SUMMARY = exports.UPSERT_PRE_SHIFT_SUMMARY = exports.GET_PRE_SHIFT_SUMMARY_BY_ID = exports.GET_PRE_SHIFT_SUMMARIES = void 0;
const client_1 = require("@apollo/client");
exports.GET_PRE_SHIFT_SUMMARIES = (0, client_1.gql) `
  query GetPreShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PRE_SHIFT_SUMMARY_BY_ID = (0, client_1.gql) `
  query GetPreShiftSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_PRE_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation UpsertPreShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPreShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PRE_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation DeletePreShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deletePreShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SHARED_PRE_SHIFT_SUMMARY = (0, client_1.gql) `
  query GetSharedPreShiftSummary($id: String, $date: Float, $organizationId: String!, $recaptchaToken: String) {
    getSharedPreShiftSummary(id: $id, date: $date, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;
exports.SHARE_PRE_SHIFT_SUMMARY = (0, client_1.gql) `
  mutation SharePreShiftSummary($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePreShiftSummary(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PRE_SHIFT_SUMMARY_HISTORY = (0, client_1.gql) `
  query GetPreShiftSummaryHistory($preShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaryHistory(preShiftSummaryId: $preShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SHARED_PRE_SHIFT_SUMMARY_HISTORY = (0, client_1.gql) `
  query GetSharedPreShiftSummaryHistory($id: String, $organizationId: String!, $recaptchaToken: String) {
    getSharedPreShiftSummaryHistory(id: $id, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;
exports.SHARE_PRE_SHIFT_SUMMARY_HISTORY = (0, client_1.gql) `
  mutation SharePreShiftSummaryHistory($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePreShiftSummaryHistory(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map