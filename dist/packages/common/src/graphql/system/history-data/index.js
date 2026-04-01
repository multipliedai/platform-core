"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HISTORY_DATA_QUERY = void 0;
const client_1 = require("@apollo/client");
exports.HISTORY_DATA_QUERY = (0, client_1.gql) `
  query HistoryData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getHistoryItems(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map