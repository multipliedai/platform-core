"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_RISK_ASSESSMENT = exports.UPDATE_RISK_ASSESSMENT = exports.GET_RISK_ASSESSMENT_BY_ID = exports.GET_RISK_ASSESSMENTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_RISK_ASSESSMENTS = (0, client_1.gql) `
  query GetRiskAssessments($filter: JSON, $accessToken: String, $organizationId: String!) {
    getRiskAssessments(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_RISK_ASSESSMENT_BY_ID = (0, client_1.gql) `
  query GetRiskAssessmentById($id: String!, $accessToken: String, $organizationId: String!) {
    getRiskAssessmentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_RISK_ASSESSMENT = (0, client_1.gql) `
  mutation UpdateRiskAssessment($riskAssessmentInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateRiskAssessment(riskAssessmentInput: $riskAssessmentInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_RISK_ASSESSMENT = (0, client_1.gql) `
  mutation DeleteRiskAssessment($id: String!, $accessToken: String, $organizationId: String!) {
    deleteRiskAssessment(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=risk-assessments.js.map