"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBMIT_PROFESSIONAL_RESPONSE = exports.DELETE_PROFESSIONAL = exports.UPDATE_PROFESSIONAL = exports.GET_PROFESSIONAL_BY_ID = exports.GET_PROFESSIONALS = void 0;
const client_1 = require("@apollo/client");
exports.GET_PROFESSIONALS = (0, client_1.gql) `
  query GetProfessionals($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProfessionals(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PROFESSIONAL_BY_ID = (0, client_1.gql) `
  query GetProfessional($id: String!, $accessToken: String, $organizationId: String!) {
    getProfessional(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_PROFESSIONAL = (0, client_1.gql) `
  mutation UpdateProfessional($input: JSON!, $accessToken: String, $organizationId: String!) {
    updateProfessional(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PROFESSIONAL = (0, client_1.gql) `
  mutation DeleteProfessional($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteProfessional(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.SUBMIT_PROFESSIONAL_RESPONSE = (0, client_1.gql) `
  mutation SubmitProfessionalResponse($input: JSON!, $accessToken: String, $organizationId: String!) {
    submitProfessionalResponse(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=professionals.js.map