"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_PROJECT_UPDATE = exports.GET_PROJECT_UPDATE_BY_ID = exports.GET_PROJECT_UPDATES = exports.DELETE_PROJECT = exports.UPSERT_PROJECT = exports.GET_PROJECT_BY_ID = exports.GET_PROJECTS = void 0;
const client_1 = require("@apollo/client");
// ===== PROJECT OVERVIEW =====
exports.GET_PROJECTS = (0, client_1.gql) `
  query GetProjectOSProjects($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSProjects(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PROJECT_BY_ID = (0, client_1.gql) `
  query GetProjectOSProjectById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_PROJECT = (0, client_1.gql) `
  mutation UpsertProjectOSProject($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProjectOSProject(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PROJECT = (0, client_1.gql) `
  mutation DeleteProjectOSProject($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProjectOSProject(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// ===== PROJECT UPDATES =====
exports.GET_PROJECT_UPDATES = (0, client_1.gql) `
  query GetProjectOSProjectUpdates($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectUpdates(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PROJECT_UPDATE_BY_ID = (0, client_1.gql) `
  query GetProjectOSProjectUpdateById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSProjectUpdateById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.CREATE_PROJECT_UPDATE = (0, client_1.gql) `
  mutation CreateProjectOSProjectUpdate($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSProjectUpdate(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map