import { gql } from "@apollo/client";

export const GET_INCIDENTS = gql`
  query GetIncidents($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIncidents(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INCIDENT_BY_ID = gql`
  query GetIncidentById($id: String!, $accessToken: String, $organizationId: String!) {
    getIncidentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INCIDENT = gql`
  mutation UpsertIncident($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIncident(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INCIDENT = gql`
  mutation DeleteIncident($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteIncident(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INCIDENT_HISTORY_BY_ITEM_ID = gql`
  query GetIncidentHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getIncidentHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
