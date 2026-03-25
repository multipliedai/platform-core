"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPROCESS_SENDGRID_WEBHOOK_DATA = exports.DELETE_SENDGRID_WEBHOOK_DATA = exports.SAVE_SENDGRID_WEBHOOK_DATA = exports.GET_SENDGRID_WEBHOOK_DATA = exports.GET_SENDGRID_WEBHOOK_DATA_BY_ID = void 0;
const client_1 = require("@apollo/client");
exports.GET_SENDGRID_WEBHOOK_DATA_BY_ID = (0, client_1.gql) `
  query GetSendGridWebhookDataById($id: ID!, $accessToken: String, $organizationId: String!) {
    getSendGridWebhookDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SENDGRID_WEBHOOK_DATA = (0, client_1.gql) `
  query GetSendGridWebhookData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSendGridWebhookData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SAVE_SENDGRID_WEBHOOK_DATA = (0, client_1.gql) `
  mutation SaveSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SENDGRID_WEBHOOK_DATA = (0, client_1.gql) `
  mutation DeleteSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    deleteSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.REPROCESS_SENDGRID_WEBHOOK_DATA = (0, client_1.gql) `
  mutation ReprocessSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    reprocessSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map