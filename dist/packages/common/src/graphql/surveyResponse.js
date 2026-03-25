"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_UPDATE_SURVEY_SUBMISSION = exports.GET_PUBLIC_SURVEY_BUNDLE = exports.SEND_NUDGE = exports.DELETE_SURVEY_SUBMISSION = exports.UPDATE_SURVEY_SUBMISSION = exports.GET_SUBMISSION_STATISTICS = exports.GET_SUBMISSION_BY_SURVEY_AND_EMPLOYEE = exports.GET_SUBMISSIONS_BY_EMPLOYEE_ID = exports.GET_SUBMISSIONS_BY_SURVEY_ID = exports.GET_SURVEY_SUBMISSION_BY_ID = exports.GET_SURVEY_SUBMISSIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_SURVEY_SUBMISSIONS = (0, client_1.gql) `
  query GetSurveySubmissions($filter: JSON, $accessToken: String, $organizationId: String!) {
    getSurveySubmissions(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SURVEY_SUBMISSION_BY_ID = (0, client_1.gql) `
  query GetSurveySubmissionById($id: String!, $accessToken: String, $organizationId: String!) {
    getSurveySubmissionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SUBMISSIONS_BY_SURVEY_ID = (0, client_1.gql) `
  query GetSubmissionsBySurveyId($surveyId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionsBySurveyId(surveyId: $surveyId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SUBMISSIONS_BY_EMPLOYEE_ID = (0, client_1.gql) `
  query GetSubmissionsByEmployeeId($employeeId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionsByEmployeeId(employeeId: $employeeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SUBMISSION_BY_SURVEY_AND_EMPLOYEE = (0, client_1.gql) `
  query GetSubmissionBySurveyAndEmployee($surveyId: String!, $employeeId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionBySurveyAndEmployee(surveyId: $surveyId, employeeId: $employeeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SUBMISSION_STATISTICS = (0, client_1.gql) `
  query GetSubmissionStatistics($surveyId: String!, $accessToken: String, $organizationId: String!) {
    getSubmissionStatistics(surveyId: $surveyId, accessToken: $accessToken, organizationId: $organizationId) {
      totalSubmissions
      averageRating
      responseCount
    }
  }
`;
exports.UPDATE_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation UpdateSurveySubmission($id: String!, $submissionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateSurveySubmission(id: $id, submissionInput: $submissionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation DeleteSurveySubmission($id: String!, $accessToken: String, $organizationId: String!) {
    deleteSurveySubmission(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SEND_NUDGE = (0, client_1.gql) `
  mutation SendNudge($employeeId: String!, $surveyId: String!, $surveyResponseId: String!, $nudgeId: String!, $accessToken: String, $organizationId: String!) {
    sendNudge(employeeId: $employeeId, surveyId: $surveyId, surveyResponseId: $surveyResponseId, nudgeId: $nudgeId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// PUBLIC
exports.GET_PUBLIC_SURVEY_BUNDLE = (0, client_1.gql) `
  query GetPublicSurveyBundle($id: String, $surveyId: String, $employeeId: String, $organizationId: String!) {
    getPublicSurveyBundle(id: $id, surveyId: $surveyId, employeeId: $employeeId, organizationId: $organizationId)
  }
`;
exports.PUBLIC_UPDATE_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation PublicUpdateSurveySubmission($id: String!, $submissionInput: JSON!, $organizationId: String!) {
    publicUpdateSurveySubmission(id: $id, submissionInput: $submissionInput, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=surveyResponse.js.map