"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_RISK_SURVEY = exports.UPDATE_RISK_SURVEY = exports.GET_RISK_SURVEY_BY_ID = exports.GET_RISK_SURVEYS = void 0;
const client_1 = require("@apollo/client");
exports.GET_RISK_SURVEYS = (0, client_1.gql) `
  query GetRiskSurveys($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskSurveys(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_RISK_SURVEY_BY_ID = (0, client_1.gql) `
  query GetRiskSurveyById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskSurveyById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_RISK_SURVEY = (0, client_1.gql) `
  mutation UpdateRiskSurvey($riskSurveyInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskSurvey(riskSurveyInput: $riskSurveyInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_RISK_SURVEY = (0, client_1.gql) `
  mutation DeleteRiskSurvey($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskSurvey(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=risk-assessment-surveys.js.map