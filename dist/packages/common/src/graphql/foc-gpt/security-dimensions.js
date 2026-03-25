"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_FOC_GPT_NEED_SECURITY_DIMENSION = exports.UPSERT_FOC_GPT_NEED_SECURITY_DIMENSION = exports.GET_FOC_GPT_NEED_SECURITY_DIMENSIONS = void 0;
const client_1 = require("@apollo/client");
// GraphQL definitions for FOC GPT Need Security Dimensions
exports.GET_FOC_GPT_NEED_SECURITY_DIMENSIONS = (0, client_1.gql) `
  query GetFocGPTNeedSecurityDimensions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFocGPTNeedSecurityDimensions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_FOC_GPT_NEED_SECURITY_DIMENSION = (0, client_1.gql) `
  mutation UpsertFocGPTNeedSecurityDimension($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFocGPTNeedSecurityDimension(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_FOC_GPT_NEED_SECURITY_DIMENSION = (0, client_1.gql) `
  mutation DeleteFocGPTNeedSecurityDimension($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFocGPTNeedSecurityDimension(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=security-dimensions.js.map