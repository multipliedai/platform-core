import { gql } from "@apollo/client";

// Updated for new signal schema with aiCategorizedType
export const GET_SIGNALS = gql`
  query GetProjectOSSignals($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSSignals(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SIGNAL_BY_ID = gql`
  query GetProjectOSSignalById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSSignalById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_SIGNAL = gql`
  mutation UpsertProjectOSSignal($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSSignal(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SIGNAL = gql`
  mutation DeleteProjectOSSignal($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSSignal(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
