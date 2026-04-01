"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INTRACOM_CONFIG = exports.UPSERT_INTRACOM_CONFIG = exports.GET_INTRACOM_CONFIG_BY_ID = exports.GET_INTRACOM_CONFIGS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INTRACOM_CONFIGS = (0, client_1.gql) `
  query GetIntracomConfigs($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomConfigs(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INTRACOM_CONFIG_BY_ID = (0, client_1.gql) `
  query GetIntracomConfigById($id: String!, $accessToken: String, $organizationId: String!) {
    getIntracomConfigById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INTRACOM_CONFIG = (0, client_1.gql) `
  mutation UpsertIntracomConfig($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIntracomConfig(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INTRACOM_CONFIG = (0, client_1.gql) `
  mutation DeleteIntracomConfig($id: String!, $accessToken: String, $organizationId: String!) {
    deleteIntracomConfig(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map