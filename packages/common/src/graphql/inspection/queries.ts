import { gql } from "@apollo/client";

export const GET_INSPECTIONS = gql`
  query GetInspections($filter: JSON, $accessToken: String, $organizationId: String!) {
    getInspections(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INSPECTION_BY_ID = gql`
  query GetInspectionById($id: String!, $accessToken: String, $organizationId: String!) {
    getInspectionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_INSPECTION = gql`
  mutation UpdateInspection($inspectionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateInspection(inspectionInput: $inspectionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INSPECTION = gql`
  mutation DeleteInspection($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInspection(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;