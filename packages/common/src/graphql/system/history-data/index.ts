import { gql } from "@apollo/client";

export const HISTORY_DATA_QUERY = gql`
  query HistoryData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getHistoryItems(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;