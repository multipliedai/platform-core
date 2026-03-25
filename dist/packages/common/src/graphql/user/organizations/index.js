"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIVATE_ORGANIZATION = exports.SUSPEND_ORGANIZATION = exports.DELETE_ORGANIZATION = exports.SAVE_ORGANIZATION = exports.GET_ORGANIZATIONS = exports.GET_ORGANIZATION_BY_ID = void 0;
const client_1 = require("@apollo/client");
// Organization Queries
exports.GET_ORGANIZATION_BY_ID = (0, client_1.gql) `
  query Query($id: ID!, $accessToken: String, $organizationId: String) {
    getOrganizationById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_ORGANIZATIONS = (0, client_1.gql) `
  query Query($accessToken: String, $filters: JSON, $organizationId: String) {
    getOrganizations(accessToken: $accessToken, filters: $filters, organizationId: $organizationId)
  }
`;
// Organization Mutations
exports.SAVE_ORGANIZATION = (0, client_1.gql) `
  mutation Mutation($organizationInput: JSON, $accessToken: String, $organizationId: String) {
    saveOrganization(organizationInput: $organizationInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_ORGANIZATION = (0, client_1.gql) `
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    deleteOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.SUSPEND_ORGANIZATION = (0, client_1.gql) `
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    suspendOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
exports.ACTIVATE_ORGANIZATION = (0, client_1.gql) `
  mutation Mutation($organizationId: String!, $accessToken: String!) {
    activateOrganization(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
//# sourceMappingURL=index.js.map