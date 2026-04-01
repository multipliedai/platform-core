"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_SOLUTION = exports.UPSERT_SOLUTION = exports.GET_SOLUTION_BY_ID = exports.GET_SOLUTIONS = void 0;
const client_1 = require("@apollo/client");
exports.GET_SOLUTIONS = (0, client_1.gql) `
  query GetSolutions($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSolutions(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_SOLUTION_BY_ID = (0, client_1.gql) `
  query GetSolutionById($id: String!, $accessToken: String, $organizationId: String!) {
    getSolutionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_SOLUTION = (0, client_1.gql) `
  mutation UpsertSolution($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertSolution(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_SOLUTION = (0, client_1.gql) `
  mutation DeleteSolution($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteSolution(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map