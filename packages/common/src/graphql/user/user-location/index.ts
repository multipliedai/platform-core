import { gql } from "@apollo/client";

export const GET_USER_LOCATIONS = gql`
  query GetUserLocations($filters: JSON, $accessToken: String, $organizationId: String!) {
    getUserLocations(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_LATEST_USER_LOCATIONS = gql`
  query GetLatestUserLocations($userIds: [String!]!, $accessToken: String, $organizationId: String!) {
    getLatestUserLocations(userIds: $userIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_USER_LOCATION = gql`
  mutation UpsertUserLocation($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertUserLocation(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
