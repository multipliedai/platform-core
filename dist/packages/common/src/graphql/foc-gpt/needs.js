"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_ATTACHMENTS = exports.UPSERT_ATTACHMENTS = exports.REMOVE_SECURITY_DOMAIN_ITEMS = exports.UPSERT_SECURITY_DOMAIN_ITEMS = exports.UPSERT_NEED_AI_CONTEXT_DATA = exports.ADD_AI_CONVERSATION_ITEMS = exports.PUBLIC_UPDATE_NEED = exports.GET_PUBLIC_NEED_BUNDLE = exports.DELETE_NEED = exports.UPDATE_NEED = exports.GET_NEED_BY_ID = exports.GET_NEEDS = void 0;
const client_1 = require("@apollo/client");
// GraphQL definitions for FOC GPT needs
exports.GET_NEEDS = (0, client_1.gql) `
  query GetNeeds($filter: JSON, $accessToken: String, $organizationId: String!) {
    getNeeds(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_NEED_BY_ID = (0, client_1.gql) `
  query GetNeedById($id: String!, $accessToken: String, $organizationId: String!) {
    getNeedById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_NEED = (0, client_1.gql) `
  mutation UpdateNeed($id: String!, $needInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateNeed(id: $id, needInput: $needInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_NEED = (0, client_1.gql) `
  mutation DeleteNeed($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteNeed(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// PUBLIC - No authentication required
// Note: Need itself IS the submission - no separate submission concept
exports.GET_PUBLIC_NEED_BUNDLE = (0, client_1.gql) `
  query GetPublicNeedBundle($id: String, $userId: String, $organizationId: String!) {
    getPublicNeedBundle(id: $id, userId: $userId, organizationId: $organizationId)
  }
`;
// Public update for need (which is the submission)
exports.PUBLIC_UPDATE_NEED = (0, client_1.gql) `
  mutation PublicUpdateNeed($id: String!, $needInput: JSON!, $organizationId: String!) {
    publicUpdateNeed(id: $id, needInput: $needInput, organizationId: $organizationId)
  }
`;
// AI Conversation management
exports.ADD_AI_CONVERSATION_ITEMS = (0, client_1.gql) `
  mutation AddAiConversationItems($needId: String!, $conversationItems: [JSON!]!, $accessToken: String, $organizationId: String!) {
    addAiConversationItems(needId: $needId, conversationItems: $conversationItems, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_NEED_AI_CONTEXT_DATA = (0, client_1.gql) `
  mutation UpsertNeedAiContextData($needId: String!, $aiContextData: JSON!, $accessToken: String, $organizationId: String!) {
    upsertNeedAiContextData(needId: $needId, aiContextData: $aiContextData, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// Security Domain management
exports.UPSERT_SECURITY_DOMAIN_ITEMS = (0, client_1.gql) `
  mutation UpsertSecurityDomainItems($needId: String!, $securityDomainItems: [JSON!]!, $accessToken: String, $organizationId: String!) {
    upsertSecurityDomainItems(needId: $needId, securityDomainItems: $securityDomainItems, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.REMOVE_SECURITY_DOMAIN_ITEMS = (0, client_1.gql) `
  mutation RemoveSecurityDomainItems($needId: String!, $securityDomainIds: [String!], $accessToken: String, $organizationId: String!) {
    removeSecurityDomainItems(needId: $needId, securityDomainIds: $securityDomainIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// Attachments management
exports.UPSERT_ATTACHMENTS = (0, client_1.gql) `
  mutation UpsertAttachments($needId: String!, $attachments: [JSON!]!, $accessToken: String, $organizationId: String!) {
    upsertAttachments(needId: $needId, attachments: $attachments, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.REMOVE_ATTACHMENTS = (0, client_1.gql) `
  mutation RemoveAttachments($needId: String!, $attachmentUids: [String!], $accessToken: String, $organizationId: String!) {
    removeAttachments(needId: $needId, attachmentUids: $attachmentUids, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=needs.js.map