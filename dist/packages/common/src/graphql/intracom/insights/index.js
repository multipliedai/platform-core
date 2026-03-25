"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INSIGHT_CHART = exports.UPSERT_INSIGHT_CHART = exports.GET_INSIGHT_CHARTS_BY_INSIGHT_IDS = exports.GET_INSIGHT_CHARTS_BY_SOLUTION_ID = exports.GET_INSIGHT_CHART_BY_ID = exports.GET_INSIGHT_CHARTS = exports.DELETE_INSIGHT = exports.UPSERT_INSIGHT = exports.GET_INSIGHTS_BY_SOLUTION_ID = exports.GET_INSIGHT_BY_ID = exports.GET_INSIGHTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INSIGHTS = (0, client_1.gql) `
  query GetInsights($filters: JSON, $accessToken: String, $organizationId: String!) {
    getInsights(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSIGHT_BY_ID = (0, client_1.gql) `
  query GetInsightById($id: String!, $accessToken: String, $organizationId: String!) {
    getInsightById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSIGHTS_BY_SOLUTION_ID = (0, client_1.gql) `
  query GetInsightsBySolutionId($solutionId: String!, $accessToken: String, $organizationId: String!) {
    getInsightsBySolutionId(solutionId: $solutionId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INSIGHT = (0, client_1.gql) `
  mutation UpsertInsight($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertInsight(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INSIGHT = (0, client_1.gql) `
  mutation DeleteInsight($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInsight(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// Chart queries
exports.GET_INSIGHT_CHARTS = (0, client_1.gql) `
  query GetInsightCharts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getInsightCharts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSIGHT_CHART_BY_ID = (0, client_1.gql) `
  query GetInsightChartById($id: String!, $accessToken: String, $organizationId: String!) {
    getInsightChartById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSIGHT_CHARTS_BY_SOLUTION_ID = (0, client_1.gql) `
  query GetInsightChartsBySolutionId($solutionId: String!, $accessToken: String, $organizationId: String!) {
    getInsightChartsBySolutionId(solutionId: $solutionId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSIGHT_CHARTS_BY_INSIGHT_IDS = (0, client_1.gql) `
  query GetInsightChartsByInsightIds($insightIds: [String!]!, $accessToken: String, $organizationId: String!) {
    getInsightChartsByInsightIds(insightIds: $insightIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INSIGHT_CHART = (0, client_1.gql) `
  mutation UpsertInsightChart($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertInsightChart(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INSIGHT_CHART = (0, client_1.gql) `
  mutation DeleteInsightChart($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInsightChart(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map