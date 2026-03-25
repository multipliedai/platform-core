"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER_OR_REMOVE_FROM_ORG = exports.VERIFY_TOKEN = exports.UPDATE_USER_PASSWORD_AND_SEND_EMAIL = exports.UPDATE_USER = void 0;
const client_1 = require("@apollo/client");
exports.UPDATE_USER = (0, client_1.gql) `
  mutation Mutation(
    $userInput: JSON
    $accessToken: String
    $organizationId: String
  ) {
    saveUser(
      userInput: $userInput
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;
exports.UPDATE_USER_PASSWORD_AND_SEND_EMAIL = (0, client_1.gql) `
  mutation Mutation($userInput: JSON, $accessToken: String) {
    updateUserPasswordAndSendEmail(userInput: $userInput, accessToken: $accessToken)
  }
`;
exports.VERIFY_TOKEN = (0, client_1.gql) `
  mutation Mutation($accessToken: String) {
    verifyToken(accessToken: $accessToken)
  }
`;
exports.DELETE_USER_OR_REMOVE_FROM_ORG = (0, client_1.gql) `
  mutation Mutation(
    $userId: String
    $accessToken: String
    $organizationId: String
  ) {
    deleteUserOrRemoveFromOrg(
      userId: $userId
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;
//# sourceMappingURL=mutation.js.map