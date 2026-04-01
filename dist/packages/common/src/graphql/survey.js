"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_SURVEY = exports.UPDATE_SURVEY = exports.GET_SURVEY_BY_ID = exports.GET_SURVEYS = void 0;
const client_1 = require("@apollo/client");
exports.GET_SURVEYS = (0, client_1.gql) `
  query GetSurveys($filter: JSON, $accessToken: String, $organizationId: String!) {
    getSurveys(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SURVEY_BY_ID = (0, client_1.gql) `
  query GetSurveyById($id: String!, $accessToken: String, $organizationId: String!) {
    getSurveyById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_SURVEY = (0, client_1.gql) `
  mutation UpdateSurvey($surveyInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateSurvey(surveyInput: $surveyInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SURVEY = (0, client_1.gql) `
  mutation DeleteSurvey($id: String!, $accessToken: String, $organizationId: String!) {
    deleteSurvey(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=survey.js.map