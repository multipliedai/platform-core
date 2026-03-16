import { gql } from "@apollo/client";

export const GET_MESSAGING_FEED = gql`
  query GetMessagingFeed($filters: JSON, $accessToken: String, $organizationId: String!) {
    getMessagingFeed(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_MESSAGING_FEED_ITEM_BY_ID = gql`
  query GetMessagingFeedItemById($id: String!, $accessToken: String, $organizationId: String!) {
    getMessagingFeedItemById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_MESSAGING_FEED_HISTORY_BY_ITEM_ID = gql`
  query GetMessagingFeedHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getMessagingFeedHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_MESSAGING_FEED_ITEM = gql`
  mutation UpsertMessagingFeedItem($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertMessagingFeedItem(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_MESSAGING_FEED_ITEM = gql`
  mutation DeleteMessagingFeedItem($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteMessagingFeedItem(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SUBMIT_MESSAGING_FEED_ITEM_FROM_WEB_APP = gql`
  mutation SubmitMessagingFeedItemFromMobileApp($input: JSON!, $accessToken: String, $organizationId: String!) {
    submitMessagingFeedItemFromMobileApp(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const PROCESS_FORM_AI_FROM_MOBILE_APP = gql`
  mutation ProcessFormAIFromMobileApp($input: JSON!, $accessToken: String, $organizationId: String!) {
    processFormAIFromMobileApp(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;


