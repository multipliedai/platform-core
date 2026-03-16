import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations($filters: JSON, $accessToken: String, $organizationId: String!) {
    getLocations(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: String!, $accessToken: String, $organizationId: String!) {
    getLocationById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_LOCATION = gql`
  mutation UpsertLocation($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertLocation(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_LOCATION = gql`
  mutation DeleteLocation($id: String!, $accessToken: String, $organizationId: String!) {
    deleteLocation(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
