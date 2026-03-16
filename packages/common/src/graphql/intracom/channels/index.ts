import { gql } from "@apollo/client";

export const GET_CHANNELS = gql`
  query GetChannels($filters: JSON, $accessToken: String, $organizationId: String!) {
    getChannels(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_CHANNEL_BY_ID = gql`
  query GetChannelById($id: String!, $accessToken: String, $organizationId: String!) {
    getChannelById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_CHANNEL = gql`
  mutation UpsertChannel($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertChannel(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_CHANNEL = gql`
  mutation DeleteChannel($id: String!, $accessToken: String, $organizationId: String!) {
    deleteChannel(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;


