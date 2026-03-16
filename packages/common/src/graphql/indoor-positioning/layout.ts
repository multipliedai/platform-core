import { gql } from "@apollo/client";

export const GET_LAYOUTS = gql`
  query GetLayouts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getLayouts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_LAYOUT_BY_ID = gql`
  query GetLayoutById($id: String!, $accessToken: String, $organizationId: String!) {
    getLayoutById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_LAYOUT_HISTORY_BY_ITEM_ID = gql`
  query GetLayoutHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getLayoutHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_LAYOUT = gql`
  mutation UpsertLayout($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertLayout(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_LAYOUT = gql`
  mutation DeleteLayout($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteLayout(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
