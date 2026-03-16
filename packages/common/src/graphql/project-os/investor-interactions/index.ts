import { gql } from "@apollo/client";

export const GET_INVESTOR_INTERACTIONS = gql`
  query GetProjectOSInvestorInteractions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSInvestorInteractions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INVESTOR_INTERACTION_BY_ID = gql`
  query GetProjectOSInvestorInteractionById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSInvestorInteractionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INVESTOR_INTERACTION = gql`
  mutation UpsertProjectOSInvestorInteraction($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSInvestorInteraction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INVESTOR_INTERACTION = gql`
  mutation DeleteProjectOSInvestorInteraction($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSInvestorInteraction(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const CREATE_INVESTOR_INTERACTION = gql`
  mutation CreateProjectOSInvestorInteraction($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSInvestorInteraction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_INVESTOR_INTERACTION_STATUS = gql`
  mutation UpdateProjectOSInvestorInteractionStatus($id: String!, $status: String!, $accessToken: String!, $organizationId: String!) {
    updateProjectOSInvestorInteractionStatus(id: $id, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

