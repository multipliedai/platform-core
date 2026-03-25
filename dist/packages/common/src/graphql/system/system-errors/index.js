"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_SYSTEM_ERROR = exports.SAVE_SYSTEM_ERROR = exports.GET_SYSTEM_ERRORS = exports.GET_ALL_SYSTEM_ERRORS = exports.GET_SYSTEM_ERROR = void 0;
const client_1 = require("@apollo/client");
exports.GET_SYSTEM_ERROR = (0, client_1.gql) `
  query GetSystemError($id: String, $accessToken: String, $organizationId: String!) {
    getSystemError(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_ALL_SYSTEM_ERRORS = (0, client_1.gql) `
  query GetAllSystemErrors($accessToken: String, $organizationId: String!) {
    getAllSystemErrors(accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SYSTEM_ERRORS = (0, client_1.gql) `
  query GetSystemErrors($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSystemErrors(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SAVE_SYSTEM_ERROR = (0, client_1.gql) `
  mutation SaveSystemError($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveSystemError(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SYSTEM_ERROR = (0, client_1.gql) `
  mutation DeleteSystemError($id: ID!, $accessToken: String, $organizationId: String!) {
    deleteSystemError(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map