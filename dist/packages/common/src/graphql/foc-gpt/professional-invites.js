"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_PROFESSIONAL_INVITE = exports.SEND_BULK_PROFESSIONAL_INVITES = exports.UPSERT_PROFESSIONAL_INVITE_AI_CONTEXT_DATA = exports.UPSERT_PUBLIC_PROFESSIONAL_INVITE = exports.UPSERT_PROFESSIONAL_INVITE = exports.GET_PUBLIC_PROFESSIONAL_INVITE = exports.GET_PROFESSIONAL_INVITES = void 0;
const client_1 = require("@apollo/client");
// GraphQL definitions for FOC GPT Professional Invites
exports.GET_PROFESSIONAL_INVITES = (0, client_1.gql) `
  query GetProfessionalInvites($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProfessionalInvites(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PUBLIC_PROFESSIONAL_INVITE = (0, client_1.gql) `
  query GetPublicProfessionalInvite($inviteId: String!) {
    getPublicProfessionalInvite(inviteId: $inviteId)
  }
`;
exports.UPSERT_PROFESSIONAL_INVITE = (0, client_1.gql) `
  mutation UpsertProfessionalInvite($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProfessionalInvite(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_PUBLIC_PROFESSIONAL_INVITE = (0, client_1.gql) `
  mutation UpsertPublicProfessionalInvite($input: JSON!) {
    upsertPublicProfessionalInvite(input: $input)
  }
`;
exports.UPSERT_PROFESSIONAL_INVITE_AI_CONTEXT_DATA = (0, client_1.gql) `
  mutation UpsertProfessionalInviteAiContextData($inviteId: String!, $aiContextData: JSON!, $organizationId: String!) {
    upsertProfessionalInviteAiContextData(inviteId: $inviteId, aiContextData: $aiContextData, organizationId: $organizationId)
  }
`;
exports.SEND_BULK_PROFESSIONAL_INVITES = (0, client_1.gql) `
  mutation SendBulkProfessionalInvites($input: JSON!, $accessToken: String, $organizationId: String!) {
    sendBulkProfessionalInvites(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PROFESSIONAL_INVITE = (0, client_1.gql) `
  mutation DeleteProfessionalInvite($inviteId: String!, $accessToken: String!, $organizationId: String!) {
    deleteProfessionalInvite(inviteId: $inviteId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=professional-invites.js.map