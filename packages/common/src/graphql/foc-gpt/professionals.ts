import { gql } from "@apollo/client";

export const GET_PROFESSIONALS = gql`
  query GetProfessionals($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProfessionals(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PROFESSIONAL_BY_ID = gql`
  query GetProfessional($id: String!, $accessToken: String, $organizationId: String!) {
    getProfessional(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_PROFESSIONAL = gql`
  mutation UpdateProfessional($input: JSON!, $accessToken: String, $organizationId: String!) {
    updateProfessional(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PROFESSIONAL = gql`
  mutation DeleteProfessional($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteProfessional(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SUBMIT_PROFESSIONAL_RESPONSE = gql`
  mutation SubmitProfessionalResponse($input: JSON!, $accessToken: String, $organizationId: String!) {
    submitProfessionalResponse(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;