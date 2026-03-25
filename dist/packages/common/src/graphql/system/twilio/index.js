"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_TWILIO_WEBHOOK_DATA = exports.SAVE_TWILIO_WEBHOOK_DATA = exports.GET_TWILIO_WEBHOOK_DATA = exports.GET_TWILIO_WEBHOOK_DATA_BY_ID = void 0;
const client_1 = require("@apollo/client");
exports.GET_TWILIO_WEBHOOK_DATA_BY_ID = (0, client_1.gql) `
  query GetTwilioWebhookDataById($id: ID!, $accessToken: String, $organizationId: String!) {
    getTwilioWebhookDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_TWILIO_WEBHOOK_DATA = (0, client_1.gql) `
  query GetTwilioWebhookData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getTwilioWebhookData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SAVE_TWILIO_WEBHOOK_DATA = (0, client_1.gql) `
  mutation SaveTwilioWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveTwilioWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_TWILIO_WEBHOOK_DATA = (0, client_1.gql) `
  mutation DeleteTwilioWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    deleteTwilioWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map