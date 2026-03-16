import { gql } from "@apollo/client";

export const GET_SURVEY_SUBMISSIONS = gql`
  query GetSurveySubmissions($filter: JSON, $accessToken: String, $organizationId: String!) {
    getSurveySubmissions(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SURVEY_SUBMISSION_BY_ID = gql`
  query GetSurveySubmissionById($id: String!, $accessToken: String, $organizationId: String!) {
    getSurveySubmissionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SUBMISSIONS_BY_SURVEY_ID = gql`
  query GetSubmissionsBySurveyId($surveyId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionsBySurveyId(surveyId: $surveyId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SUBMISSIONS_BY_EMPLOYEE_ID = gql`
  query GetSubmissionsByEmployeeId($employeeId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionsByEmployeeId(employeeId: $employeeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SUBMISSION_BY_SURVEY_AND_EMPLOYEE = gql`
  query GetSubmissionBySurveyAndEmployee($surveyId: String!, $employeeId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionBySurveyAndEmployee(surveyId: $surveyId, employeeId: $employeeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SUBMISSION_STATISTICS = gql`
  query GetSubmissionStatistics($surveyId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionStatistics(surveyId: $surveyId, accessToken: $accessToken, organizationId: $organizationId) {
      totalSubmissions
      averageRating
      responseCount
    }
  }
`;



export const UPDATE_SURVEY_SUBMISSION = gql`
  mutation UpdateSurveySubmission($id: String!, $submissionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateSurveySubmission(id: $id, submissionInput: $submissionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SURVEY_SUBMISSION = gql`
  mutation DeleteSurveySubmission($id: String!, $accessToken: String, $organizationId: String!) {
    deleteSurveySubmission(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SEND_NUDGE = gql`
  mutation SendNudge($employeeId: String!, $surveyId: String!, $surveyResponseId: String!, $nudgeId: String!, $accessToken: String, $organizationId: String!) {
    sendNudge(employeeId: $employeeId, surveyId: $surveyId, surveyResponseId: $surveyResponseId, nudgeId: $nudgeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// PUBLIC
export const GET_PUBLIC_SURVEY_BUNDLE = gql`
  query GetPublicSurveyBundle($id: String, $surveyId: String, $employeeId: String, $organizationId: String!) {
    getPublicSurveyBundle(id: $id, surveyId: $surveyId, employeeId: $employeeId, organizationId: $organizationId)
  }
`;

export const PUBLIC_UPDATE_SURVEY_SUBMISSION = gql`
  mutation PublicUpdateSurveySubmission($id: String!, $submissionInput: JSON!, $organizationId: String!) {
    publicUpdateSurveySubmission(id: $id, submissionInput: $submissionInput, organizationId: $organizationId)
  }
`;