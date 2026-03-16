import { gql } from "@apollo/client";

export const GET_RISK_ASSESSMENTS = gql`
  query GetRiskAssessments($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskAssessments(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_RISK_ASSESSMENT_BY_ID = gql`
  query GetRiskAssessmentById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskAssessmentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_RISK_ASSESSMENT = gql`
  mutation UpdateRiskAssessment($riskAssessmentInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskAssessment(riskAssessmentInput: $riskAssessmentInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_RISK_ASSESSMENT = gql`
  mutation DeleteRiskAssessment($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskAssessment(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;


