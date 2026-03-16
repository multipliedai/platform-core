import { gql } from "@apollo/client";

export const GET_RISK_SURVEYS = gql`
  query GetRiskSurveys($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskSurveys(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_RISK_SURVEY_BY_ID = gql`
  query GetRiskSurveyById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskSurveyById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_RISK_SURVEY = gql`
  mutation UpdateRiskSurvey($riskSurveyInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskSurvey(riskSurveyInput: $riskSurveyInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_RISK_SURVEY = gql`
  mutation DeleteRiskSurvey($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskSurvey(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;


