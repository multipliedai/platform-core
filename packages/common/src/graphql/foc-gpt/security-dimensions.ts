import { gql } from "@apollo/client";

// GraphQL definitions for FOC GPT Need Security Dimensions
export const GET_FOC_GPT_NEED_SECURITY_DIMENSIONS = gql`
  query GetFocGPTNeedSecurityDimensions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFocGPTNeedSecurityDimensions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_FOC_GPT_NEED_SECURITY_DIMENSION = gql`
  mutation UpsertFocGPTNeedSecurityDimension($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFocGPTNeedSecurityDimension(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_FOC_GPT_NEED_SECURITY_DIMENSION = gql`
  mutation DeleteFocGPTNeedSecurityDimension($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFocGPTNeedSecurityDimension(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

