import { gql } from "@apollo/client";

export const GET_CHANNEL_USERS = gql`
  query GetChannelUsers($filter: JSON, $accessToken: String!, $organizationId: String!) {
    getChannelUsers(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_CHANNEL_USER_BY_ID = gql`
  query GetChannelUserById($id: String!, $accessToken: String!, $organizationId: String!) {
    getChannelUserById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_CHANNEL_USER = gql`
  mutation UpsertChannelUser($input: JSON!, $accessToken: String!, $organizationId: String!) {
    upsertChannelUser(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_CHANNEL_USER = gql`
  mutation DeleteChannelUser($id: String!, $accessToken: String, $organizationId: String!) {
    deleteChannelUser(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;


