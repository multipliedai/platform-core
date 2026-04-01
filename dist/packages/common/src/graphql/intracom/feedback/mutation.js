"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INTRACOM_FEEDBACK = exports.GET_INTRACOM_FEEDBACK_STATS = exports.GET_INTRACOM_FEEDBACKS = exports.CREATE_INTRACOM_FEEDBACK = void 0;
const client_1 = require("@apollo/client");
exports.CREATE_INTRACOM_FEEDBACK = (0, client_1.gql) `
  mutation CreateIntracomFeedback($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createIntracomFeedback(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INTRACOM_FEEDBACKS = (0, client_1.gql) `
  query GetIntracomFeedbacks($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomFeedbacks(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INTRACOM_FEEDBACK_STATS = (0, client_1.gql) `
  query GetIntracomFeedbackStats($timeRange: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomFeedbackStats(timeRange: $timeRange, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INTRACOM_FEEDBACK = (0, client_1.gql) `
  mutation DeleteIntracomFeedback($feedbackId: String!, $accessToken: String!, $organizationId: String!) {
    deleteIntracomFeedback(feedbackId: $feedbackId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=mutation.js.map