import { gql } from "@apollo/client";

export const GET_INSIGHTS = gql`
  query GetInsights($filters: JSON, $accessToken: String, $organizationId: String!) {
    getInsights(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSIGHT_BY_ID = gql`
  query GetInsightById($id: String!, $accessToken: String, $organizationId: String!) {
    getInsightById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSIGHTS_BY_SOLUTION_ID = gql`
  query GetInsightsBySolutionId($solutionId: String!, $accessToken: String, $organizationId: String!) {
    getInsightsBySolutionId(solutionId: $solutionId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INSIGHT = gql`
  mutation UpsertInsight($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertInsight(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INSIGHT = gql`
  mutation DeleteInsight($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInsight(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// Chart queries
export const GET_INSIGHT_CHARTS = gql`
  query GetInsightCharts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getInsightCharts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSIGHT_CHART_BY_ID = gql`
  query GetInsightChartById($id: String!, $accessToken: String, $organizationId: String!) {
    getInsightChartById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSIGHT_CHARTS_BY_SOLUTION_ID = gql`
  query GetInsightChartsBySolutionId($solutionId: String!, $accessToken: String, $organizationId: String!) {
    getInsightChartsBySolutionId(solutionId: $solutionId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSIGHT_CHARTS_BY_INSIGHT_IDS = gql`
  query GetInsightChartsByInsightIds($insightIds: [String!]!, $accessToken: String, $organizationId: String!) {
    getInsightChartsByInsightIds(insightIds: $insightIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INSIGHT_CHART = gql`
  mutation UpsertInsightChart($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertInsightChart(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INSIGHT_CHART = gql`
  mutation DeleteInsightChart($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInsightChart(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;