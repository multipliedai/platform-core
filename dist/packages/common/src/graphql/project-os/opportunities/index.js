"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_OPPORTUNITY_STAGE = exports.CREATE_OPPORTUNITY = exports.DELETE_OPPORTUNITY = exports.UPSERT_OPPORTUNITY = exports.GET_OPPORTUNITY_BY_ID = exports.GET_OPPORTUNITIES = void 0;
const client_1 = require("@apollo/client");
exports.GET_OPPORTUNITIES = (0, client_1.gql) `
  query GetProjectOSOpportunities($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSOpportunities(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_OPPORTUNITY_BY_ID = (0, client_1.gql) `
  query GetProjectOSOpportunityById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSOpportunityById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_OPPORTUNITY = (0, client_1.gql) `
  mutation UpsertProjectOSOpportunity($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSOpportunity(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_OPPORTUNITY = (0, client_1.gql) `
  mutation DeleteProjectOSOpportunity($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSOpportunity(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.CREATE_OPPORTUNITY = (0, client_1.gql) `
  mutation CreateProjectOSOpportunity($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSOpportunity(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_OPPORTUNITY_STAGE = (0, client_1.gql) `
  mutation UpdateProjectOSOpportunityStage($id: String!, $stage: String!, $accessToken: String!, $organizationId: String!) {
    updateProjectOSOpportunityStage(id: $id, stage: $stage, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map