"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_NOTIFICATION_PERMISSIONS = exports.GET_ALL_COGNITO_USERS = exports.GET_USERS = exports.GET_USER = void 0;
const client_1 = require("@apollo/client");
exports.GET_USER = (0, client_1.gql) `
  query Query($id: ID!, $accessToken: String) {
    getUserById(id: $id, accessToken: $accessToken)
  }
`;
exports.GET_USERS = (0, client_1.gql) `
  query Query($accessToken: String, $organizationId: String) {
    getUsers(
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;
exports.GET_ALL_COGNITO_USERS = (0, client_1.gql) `
  query Query($accessToken: String) {
    getAllCognitoUsers(
      accessToken: $accessToken
    )
  }
`;
exports.GET_NOTIFICATION_PERMISSIONS = (0, client_1.gql) `
  query Query($accessToken: String, $userId: String) {
    getNotificationPermissions(
      accessToken: $accessToken
      userId: $userId
    )
  }
`;
//# sourceMappingURL=queries.js.map