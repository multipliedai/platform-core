"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_LAYOUT = exports.UPSERT_LAYOUT = exports.GET_LAYOUT_HISTORY_BY_ITEM_ID = exports.GET_LAYOUT_BY_ID = exports.GET_LAYOUTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_LAYOUTS = (0, client_1.gql) `
  query GetLayouts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getLayouts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_LAYOUT_BY_ID = (0, client_1.gql) `
  query GetLayoutById($id: String!, $accessToken: String, $organizationId: String!) {
    getLayoutById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_LAYOUT_HISTORY_BY_ITEM_ID = (0, client_1.gql) `
  query GetLayoutHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getLayoutHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_LAYOUT = (0, client_1.gql) `
  mutation UpsertLayout($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertLayout(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_LAYOUT = (0, client_1.gql) `
  mutation DeleteLayout($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteLayout(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=layout.js.map