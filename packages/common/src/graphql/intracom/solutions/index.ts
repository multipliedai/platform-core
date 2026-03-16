import { gql } from "@apollo/client";

export const GET_SOLUTIONS = gql`
  query GetSolutions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSolutions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SOLUTION_BY_ID = gql`
  query GetSolutionById($id: String!, $accessToken: String, $organizationId: String!) {
    getSolutionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_SOLUTION = gql`
  mutation UpsertSolution($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertSolution(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SOLUTION = gql`
  mutation DeleteSolution($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteSolution(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
