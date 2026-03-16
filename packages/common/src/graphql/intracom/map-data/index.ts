import { gql } from "@apollo/client";

export const GET_MAP_DATA = gql`
  query GetMapData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getMapData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_MAP_DATA_BY_ID = gql`
  query GetMapDataById($id: String!, $accessToken: String, $organizationId: String!) {
    getMapDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_MAP_DATA = gql`
  mutation UpsertMapData($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertMapData(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_MAP_DATA = gql`
  mutation DeleteMapData($id: String!, $accessToken: String, $organizationId: String!) {
    deleteMapData(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

