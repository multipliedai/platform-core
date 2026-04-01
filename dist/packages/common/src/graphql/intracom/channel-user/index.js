"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_CHANNEL_USER = exports.UPSERT_CHANNEL_USER = exports.GET_CHANNEL_USER_BY_ID = exports.GET_CHANNEL_USERS = void 0;
const client_1 = require("@apollo/client");
exports.GET_CHANNEL_USERS = (0, client_1.gql) `
  query GetChannelUsers($filter: JSON, $accessToken: String!, $organizationId: String!) {
    getChannelUsers(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_CHANNEL_USER_BY_ID = (0, client_1.gql) `
  query GetChannelUserById($id: String!, $accessToken: String!, $organizationId: String!) {
    getChannelUserById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_CHANNEL_USER = (0, client_1.gql) `
  mutation UpsertChannelUser($input: JSON!, $accessToken: String!, $organizationId: String!) {
    upsertChannelUser(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_CHANNEL_USER = (0, client_1.gql) `
  mutation DeleteChannelUser($id: String!, $accessToken: String, $organizationId: String!) {
    deleteChannelUser(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map