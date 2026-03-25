"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROCESS_FORM_AI_FROM_MOBILE_APP = exports.SUBMIT_MESSAGING_FEED_ITEM_FROM_WEB_APP = exports.DELETE_MESSAGING_FEED_ITEM = exports.UPSERT_MESSAGING_FEED_ITEM = exports.GET_MESSAGING_FEED_HISTORY_BY_ITEM_ID = exports.GET_MESSAGING_FEED_ITEM_BY_ID = exports.GET_MESSAGING_FEED = void 0;
const client_1 = require("@apollo/client");
exports.GET_MESSAGING_FEED = (0, client_1.gql) `
  query GetMessagingFeed($filters: JSON, $accessToken: String, $organizationId: String!) {
    getMessagingFeed(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_MESSAGING_FEED_ITEM_BY_ID = (0, client_1.gql) `
  query GetMessagingFeedItemById($id: String!, $accessToken: String, $organizationId: String!) {
    getMessagingFeedItemById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_MESSAGING_FEED_HISTORY_BY_ITEM_ID = (0, client_1.gql) `
  query GetMessagingFeedHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getMessagingFeedHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_MESSAGING_FEED_ITEM = (0, client_1.gql) `
  mutation UpsertMessagingFeedItem($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertMessagingFeedItem(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_MESSAGING_FEED_ITEM = (0, client_1.gql) `
  mutation DeleteMessagingFeedItem($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteMessagingFeedItem(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SUBMIT_MESSAGING_FEED_ITEM_FROM_WEB_APP = (0, client_1.gql) `
  mutation SubmitMessagingFeedItemFromMobileApp($input: JSON!, $accessToken: String, $organizationId: String!) {
    submitMessagingFeedItemFromMobileApp(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.PROCESS_FORM_AI_FROM_MOBILE_APP = (0, client_1.gql) `
  mutation ProcessFormAIFromMobileApp($input: JSON!, $accessToken: String, $organizationId: String!) {
    processFormAIFromMobileApp(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map