import { gql } from "@apollo/client";

export const GET_RISK_SURVEY_SUBMISSIONS = gql`
  query GetRiskSurveySubmissions($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskSurveySubmissions(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_RISK_SURVEY_SUBMISSION_BY_ID = gql`
  query GetRiskSurveySubmissionById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskSurveySubmissionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_RISK_SURVEY_SUBMISSION = gql`
  mutation UpdateRiskSurveySubmission($id: String!, $submissionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskSurveySubmission(id: $id, submissionInput: $submissionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_RISK_SURVEY_SUBMISSION = gql`
  mutation DeleteRiskSurveySubmission($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskSurveySubmission(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// PUBLIC
export const GET_PUBLIC_RISK_SURVEY_BUNDLE = gql`
  query GetPublicRiskSurveyBundle($id: String, $surveyId: String, $employeeId: String) {
    getPublicRiskSurveyBundle(id: $id, surveyId: $surveyId, employeeId: $employeeId)
  }
`;

export const PUBLIC_UPDATE_RISK_SURVEY_SUBMISSION = gql`
  mutation PublicUpdateRiskSurveySubmission($id: String!, $submissionInput: JSON!) {
    publicUpdateRiskSurveySubmission(id: $id, submissionInput: $submissionInput)
  }
`;


