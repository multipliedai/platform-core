import { gql } from "@apollo/client";

export const GET_PROGRAMS = gql`
  query GetPrograms($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPrograms(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PROGRAM_BY_ID = gql`
  query GetProgramById($id: String!, $accessToken: String, $organizationId: String!) {
    getProgramById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_PROGRAM = gql`
  mutation UpsertProgram($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProgram(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PROGRAM = gql`
  mutation DeleteProgram($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProgram(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const CREATE_PROGRAM_FROM_INSIGHT = gql`
  mutation CreateProgramFromInsight($insightData: JSON!, $additionalData: JSON, $accessToken: String, $organizationId: String!) {
    createProgramFromInsight(insightData: $insightData, additionalData: $additionalData, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
