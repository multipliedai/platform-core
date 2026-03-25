"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_PROGRAM_FROM_INSIGHT = exports.DELETE_PROGRAM = exports.UPSERT_PROGRAM = exports.GET_PROGRAM_BY_ID = exports.GET_PROGRAMS = void 0;
const client_1 = require("@apollo/client");
exports.GET_PROGRAMS = (0, client_1.gql) `
  query GetPrograms($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPrograms(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PROGRAM_BY_ID = (0, client_1.gql) `
  query GetProgramById($id: String!, $accessToken: String, $organizationId: String!) {
    getProgramById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_PROGRAM = (0, client_1.gql) `
  mutation UpsertProgram($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProgram(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PROGRAM = (0, client_1.gql) `
  mutation DeleteProgram($id: String!, $accessToken: String, $organizationId: String!) {
    deleteProgram(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.CREATE_PROGRAM_FROM_INSIGHT = (0, client_1.gql) `
  mutation CreateProgramFromInsight($insightData: JSON!, $additionalData: JSON, $accessToken: String, $organizationId: String!) {
    createProgramFromInsight(insightData: $insightData, additionalData: $additionalData, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map