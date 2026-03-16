import { gql } from "@apollo/client";

export const GET_OPPORTUNITIES = gql`
  query GetProjectOSOpportunities($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSOpportunities(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_OPPORTUNITY_BY_ID = gql`
  query GetProjectOSOpportunityById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSOpportunityById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_OPPORTUNITY = gql`
  mutation UpsertProjectOSOpportunity($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSOpportunity(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_OPPORTUNITY = gql`
  mutation DeleteProjectOSOpportunity($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSOpportunity(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const CREATE_OPPORTUNITY = gql`
  mutation CreateProjectOSOpportunity($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSOpportunity(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_OPPORTUNITY_STAGE = gql`
  mutation UpdateProjectOSOpportunityStage($id: String!, $stage: String!, $accessToken: String!, $organizationId: String!) {
    updateProjectOSOpportunityStage(id: $id, stage: $stage, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
