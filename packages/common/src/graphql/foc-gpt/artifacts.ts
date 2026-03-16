import { gql } from "@apollo/client";

// GraphQL definitions for FOC GPT Need Artifacts
export const GET_FOC_GPT_NEED_ARTIFACTS = gql`
  query GetFocGPTNeedArtifacts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFocGPTNeedArtifacts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_FOC_GPT_NEED_ARTIFACT = gql`
  mutation UpsertFocGPTNeedArtifact($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFocGPTNeedArtifact(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_FOC_GPT_NEED_ARTIFACT = gql`
  mutation DeleteFocGPTNeedArtifact($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFocGPTNeedArtifact(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

