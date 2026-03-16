import { gql } from "@apollo/client";

export const GET_INTRACOM_CONFIGS = gql`
  query GetIntracomConfigs($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomConfigs(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INTRACOM_CONFIG_BY_ID = gql`
  query GetIntracomConfigById($id: String!, $accessToken: String, $organizationId: String!) {
    getIntracomConfigById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INTRACOM_CONFIG = gql`
  mutation UpsertIntracomConfig($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIntracomConfig(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INTRACOM_CONFIG = gql`
  mutation DeleteIntracomConfig($id: String!, $accessToken: String, $organizationId: String!) {
    deleteIntracomConfig(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;



