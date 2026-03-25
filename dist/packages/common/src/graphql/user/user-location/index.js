"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPSERT_USER_LOCATION = exports.GET_LATEST_USER_LOCATIONS = exports.GET_USER_LOCATIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_USER_LOCATIONS = (0, client_1.gql) `
  query GetUserLocations($filters: JSON, $accessToken: String, $organizationId: String!) {
    getUserLocations(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_LATEST_USER_LOCATIONS = (0, client_1.gql) `
  query GetLatestUserLocations($userIds: [String!]!, $accessToken: String, $organizationId: String!) {
    getLatestUserLocations(userIds: $userIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_USER_LOCATION = (0, client_1.gql) `
  mutation UpsertUserLocation($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertUserLocation(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map