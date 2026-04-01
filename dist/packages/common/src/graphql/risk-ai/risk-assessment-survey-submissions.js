"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_UPDATE_RISK_SURVEY_SUBMISSION = exports.GET_PUBLIC_RISK_SURVEY_BUNDLE = exports.DELETE_RISK_SURVEY_SUBMISSION = exports.UPDATE_RISK_SURVEY_SUBMISSION = exports.GET_RISK_SURVEY_SUBMISSION_BY_ID = exports.GET_RISK_SURVEY_SUBMISSIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_RISK_SURVEY_SUBMISSIONS = (0, client_1.gql) `
  query GetRiskSurveySubmissions($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskSurveySubmissions(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_RISK_SURVEY_SUBMISSION_BY_ID = (0, client_1.gql) `
  query GetRiskSurveySubmissionById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskSurveySubmissionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_RISK_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation UpdateRiskSurveySubmission($id: String!, $submissionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskSurveySubmission(id: $id, submissionInput: $submissionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_RISK_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation DeleteRiskSurveySubmission($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskSurveySubmission(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// PUBLIC
exports.GET_PUBLIC_RISK_SURVEY_BUNDLE = (0, client_1.gql) `
  query GetPublicRiskSurveyBundle($id: String, $surveyId: String, $employeeId: String) {
    getPublicRiskSurveyBundle(id: $id, surveyId: $surveyId, employeeId: $employeeId)
  }
`;
exports.PUBLIC_UPDATE_RISK_SURVEY_SUBMISSION = (0, client_1.gql) `
  mutation PublicUpdateRiskSurveySubmission($id: String!, $submissionInput: JSON!) {
    publicUpdateRiskSurveySubmission(id: $id, submissionInput: $submissionInput)
  }
`;
//# sourceMappingURL=risk-assessment-survey-submissions.js.map