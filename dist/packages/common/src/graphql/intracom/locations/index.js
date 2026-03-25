"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_LOCATION = exports.UPSERT_LOCATION = exports.GET_LOCATION_BY_ID = exports.GET_LOCATIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_LOCATIONS = (0, client_1.gql) `
  query GetLocations($filters: JSON, $accessToken: String, $organizationId: String!) {
    getLocations(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_LOCATION_BY_ID = (0, client_1.gql) `
  query GetLocationById($id: String!, $accessToken: String, $organizationId: String!) {
    getLocationById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_LOCATION = (0, client_1.gql) `
  mutation UpsertLocation($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertLocation(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_LOCATION = (0, client_1.gql) `
  mutation DeleteLocation($id: String!, $accessToken: String, $organizationId: String!) {
    deleteLocation(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map