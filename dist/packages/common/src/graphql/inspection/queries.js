"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INSPECTION = exports.UPDATE_INSPECTION = exports.GET_INSPECTION_BY_ID = exports.GET_INSPECTIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_INSPECTIONS = (0, client_1.gql) `
  query GetInspections($filter: JSON, $accessToken: String, $organizationId: String!) {
    getInspections(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_INSPECTION_BY_ID = (0, client_1.gql) `
  query GetInspectionById($id: String!, $accessToken: String, $organizationId: String!) {
    getInspectionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_INSPECTION = (0, client_1.gql) `
  mutation UpdateInspection($inspectionInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateInspection(inspectionInput: $inspectionInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_INSPECTION = (0, client_1.gql) `
  mutation DeleteInspection($id: String!, $accessToken: String, $organizationId: String!) {
    deleteInspection(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=queries.js.map