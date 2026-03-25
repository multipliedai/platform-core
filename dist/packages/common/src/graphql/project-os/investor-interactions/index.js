"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_INVESTOR_INTERACTION_STATUS = exports.CREATE_INVESTOR_INTERACTION = exports.DELETE_INVESTOR_INTERACTION = exports.UPSERT_INVESTOR_INTERACTION = exports.GET_INVESTOR_INTERACTION_BY_ID = exports.GET_INVESTOR_INTERACTIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INVESTOR_INTERACTIONS = (0, client_1.gql) `
  query GetProjectOSInvestorInteractions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSInvestorInteractions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INVESTOR_INTERACTION_BY_ID = (0, client_1.gql) `
  query GetProjectOSInvestorInteractionById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSInvestorInteractionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_INVESTOR_INTERACTION = (0, client_1.gql) `
  mutation UpsertProjectOSInvestorInteraction($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSInvestorInteraction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INVESTOR_INTERACTION = (0, client_1.gql) `
  mutation DeleteProjectOSInvestorInteraction($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSInvestorInteraction(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.CREATE_INVESTOR_INTERACTION = (0, client_1.gql) `
  mutation CreateProjectOSInvestorInteraction($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSInvestorInteraction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_INVESTOR_INTERACTION_STATUS = (0, client_1.gql) `
  mutation UpdateProjectOSInvestorInteractionStatus($id: String!, $status: String!, $accessToken: String!, $organizationId: String!) {
    updateProjectOSInvestorInteractionStatus(id: $id, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map