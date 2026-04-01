"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_SIGNAL = exports.UPSERT_SIGNAL = exports.GET_SIGNAL_BY_ID = exports.GET_SIGNALS = void 0;
const client_1 = require("@apollo/client");
// Updated for new signal schema with aiCategorizedType
exports.GET_SIGNALS = (0, client_1.gql) `
  query GetProjectOSSignals($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSSignals(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SIGNAL_BY_ID = (0, client_1.gql) `
  query GetProjectOSSignalById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSSignalById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_SIGNAL = (0, client_1.gql) `
  mutation UpsertProjectOSSignal($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSSignal(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SIGNAL = (0, client_1.gql) `
  mutation DeleteProjectOSSignal($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSSignal(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map