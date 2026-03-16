import { gql } from "@apollo/client";

export const GET_DEVICES = gql`
  query GetDevices($organizationId: String!, $accessToken: String) {
    getDevices(organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const GET_DEVICE = gql`
  query GetDevice($deviceId: ID!, $organizationId: String!, $accessToken: String) {
    getDevice(deviceId: $deviceId, organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const GET_DEVICE_EVENTS = gql`
  query GetDeviceEvents(
    $filters: JSON
    $accessToken: String
    $organizationId: String!
  ) {
    getDeviceEvents(
      filters: $filters
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;

export const UPSERT_EDGE_DEVICE = gql`
  mutation UpsertEdgeDevice($input: JSON!, $accessToken: String) {
    upsertEdgeDevice(input: $input, accessToken: $accessToken)
  }
`;

