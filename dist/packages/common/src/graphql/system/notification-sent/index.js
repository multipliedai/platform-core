"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_NOTIFICATION_SENT_DATA = exports.SAVE_NOTIFICATION_SENT_DATA = exports.GET_NOTIFICATION_SENT_DATA = exports.GET_NOTIFICATION_SENT_DATA_BY_ID = void 0;
const client_1 = require("@apollo/client");
exports.GET_NOTIFICATION_SENT_DATA_BY_ID = (0, client_1.gql) `
  query GetNotificationSentDataById($id: ID!, $organizationId: String!, $accessToken: String) {
    getNotificationSentDataById(id: $id, organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.GET_NOTIFICATION_SENT_DATA = (0, client_1.gql) `
  query GetNotificationSentData($organizationId: String!, $accessToken: String, $filters: JSON) {
    getNotificationSentData(organizationId: $organizationId, accessToken: $accessToken, filters: $filters)
  }
`;
exports.SAVE_NOTIFICATION_SENT_DATA = (0, client_1.gql) `
  mutation SaveNotificationSentData($userInput: JSON, $organizationId: String!, $accessToken: String) {
    saveNotificationSentData(userInput: $userInput, organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.DELETE_NOTIFICATION_SENT_DATA = (0, client_1.gql) `
  mutation DeleteNotificationSentData($userInput: JSON!, $organizationId: String!, $accessToken: String) {
    deleteNotificationSentData(userInput: $userInput, organizationId: $organizationId, accessToken: $accessToken)
  }
`;
//# sourceMappingURL=index.js.map