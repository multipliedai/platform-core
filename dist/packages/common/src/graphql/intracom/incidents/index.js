"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_INCIDENT_HISTORY_BY_ITEM_ID = exports.DELETE_INCIDENT = exports.UPSERT_INCIDENT = exports.GET_INCIDENT_BY_ID = exports.GET_INCIDENTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INCIDENTS = (0, client_1.gql) `
  query GetIncidents($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIncidents(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INCIDENT_BY_ID = (0, client_1.gql) `
  query GetIncidentById($id: String!, $accessToken: String, $organizationId: String!) {
    getIncidentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INCIDENT = (0, client_1.gql) `
  mutation UpsertIncident($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIncident(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INCIDENT = (0, client_1.gql) `
  mutation DeleteIncident($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteIncident(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INCIDENT_HISTORY_BY_ITEM_ID = (0, client_1.gql) `
  query GetIncidentHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getIncidentHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map