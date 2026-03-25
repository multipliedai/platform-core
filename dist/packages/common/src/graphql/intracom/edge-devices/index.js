"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPSERT_EDGE_DEVICE = exports.GET_DEVICE_EVENTS = exports.GET_DEVICE = exports.GET_DEVICES = void 0;
const client_1 = require("@apollo/client");
exports.GET_DEVICES = (0, client_1.gql) `
  query GetDevices($organizationId: String!, $accessToken: String) {
    getDevices(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.GET_DEVICE = (0, client_1.gql) `
  query GetDevice($deviceId: ID!, $organizationId: String!, $accessToken: String) {
    getDevice(deviceId: $deviceId, organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.GET_DEVICE_EVENTS = (0, client_1.gql) `
  query GetDeviceEvents(
    $filters: JSON
    $accessToken: String
    $organizationId: String!
  ) {
    getDeviceEvents(
      filters: $filters
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;
exports.UPSERT_EDGE_DEVICE = (0, client_1.gql) `
  mutation UpsertEdgeDevice($input: JSON!, $accessToken: String) {
    upsertEdgeDevice(input: $input, accessToken: $accessToken)
  }
`;
//# sourceMappingURL=index.js.map