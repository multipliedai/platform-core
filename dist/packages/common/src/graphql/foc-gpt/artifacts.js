"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_FOC_GPT_NEED_ARTIFACT = exports.UPSERT_FOC_GPT_NEED_ARTIFACT = exports.GET_FOC_GPT_NEED_ARTIFACTS = void 0;
const client_1 = require("@apollo/client");
// GraphQL definitions for FOC GPT Need Artifacts
exports.GET_FOC_GPT_NEED_ARTIFACTS = (0, client_1.gql) `
  query GetFocGPTNeedArtifacts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFocGPTNeedArtifacts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_FOC_GPT_NEED_ARTIFACT = (0, client_1.gql) `
  mutation UpsertFocGPTNeedArtifact($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFocGPTNeedArtifact(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_FOC_GPT_NEED_ARTIFACT = (0, client_1.gql) `
  mutation DeleteFocGPTNeedArtifact($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFocGPTNeedArtifact(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=artifacts.js.map