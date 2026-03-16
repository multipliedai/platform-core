import { gql } from "@apollo/client";

// Organization Queries
export const GET_ORGANIZATION_BY_ID = gql`
  query Query($id: ID!, $accessToken: String, $organizationId: String) {
    getOrganizationById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_ORGANIZATIONS = gql`
  query Query($accessToken: String, $filters: JSON, $organizationId: String) {
    getOrganizations(accessToken: $accessToken, filters: $filters, organizationId: $organizationId)
  }
`;

// Organization Mutations
export const SAVE_ORGANIZATION = gql`
  mutation Mutation($organizationInput: JSON, $accessToken: String, $organizationId: String) {
    saveOrganization(organizationInput: $organizationInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_ORGANIZATION = gql`
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    deleteOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const SUSPEND_ORGANIZATION = gql`
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    suspendOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const ACTIVATE_ORGANIZATION = gql`
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    activateOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
