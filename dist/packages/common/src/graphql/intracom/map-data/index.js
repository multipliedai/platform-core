"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_MAP_DATA = exports.UPSERT_MAP_DATA = exports.GET_MAP_DATA_BY_ID = exports.GET_MAP_DATA = void 0;
const client_1 = require("@apollo/client");
exports.GET_MAP_DATA = (0, client_1.gql) `
  query GetMapData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getMapData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_MAP_DATA_BY_ID = (0, client_1.gql) `
  query GetMapDataById($id: String!, $accessToken: String, $organizationId: String!) {
    getMapDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_MAP_DATA = (0, client_1.gql) `
  mutation UpsertMapData($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertMapData(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_MAP_DATA = (0, client_1.gql) `
  mutation DeleteMapData($id: String!, $accessToken: String, $organizationId: String!) {
    deleteMapData(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map