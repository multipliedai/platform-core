import { gql } from "@apollo/client";

export const GET_SYSTEM_ERROR = gql`
  query GetSystemError($id: String, $accessToken: String, $organizationId: String!) {
    getSystemError(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_ALL_SYSTEM_ERRORS = gql`
  query GetAllSystemErrors($accessToken: String, $organizationId: String!) {
    getAllSystemErrors(accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SYSTEM_ERRORS = gql`
  query GetSystemErrors($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSystemErrors(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SAVE_SYSTEM_ERROR = gql`
  mutation SaveSystemError($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveSystemError(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SYSTEM_ERROR = gql`
  mutation DeleteSystemError($id: ID!, $accessToken: String, $organizationId: String!) {
    deleteSystemError(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
