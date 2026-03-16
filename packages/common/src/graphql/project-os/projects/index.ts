import { gql } from "@apollo/client";

// ===== PROJECT OVERVIEW =====
export const GET_PROJECTS = gql`
  query GetProjectOSProjects($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSProjects(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query GetProjectOSProjectById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_PROJECT = gql`
  mutation UpsertProjectOSProject($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSProject(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProjectOSProject($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSProject(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// ===== PROJECT UPDATES =====
export const GET_PROJECT_UPDATES = gql`
  query GetProjectOSProjectUpdates($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectUpdates(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PROJECT_UPDATE_BY_ID = gql`
  query GetProjectOSProjectUpdateById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectUpdateById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const CREATE_PROJECT_UPDATE = gql`
  mutation CreateProjectOSProjectUpdate($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSProjectUpdate(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
