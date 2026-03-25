"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_CHANNEL = exports.UPSERT_CHANNEL = exports.GET_CHANNEL_BY_ID = exports.GET_CHANNELS = void 0;
const client_1 = require("@apollo/client");
exports.GET_CHANNELS = (0, client_1.gql) `
  query GetChannels($filters: JSON, $accessToken: String, $organizationId: String!) {
    getChannels(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_CHANNEL_BY_ID = (0, client_1.gql) `
  query GetChannelById($id: String!, $accessToken: String, $organizationId: String!) {
    getChannelById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_CHANNEL = (0, client_1.gql) `
  mutation UpsertChannel($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertChannel(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_CHANNEL = (0, client_1.gql) `
  mutation DeleteChannel($id: String!, $accessToken: String, $organizationId: String!) {
    deleteChannel(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map