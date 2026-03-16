import { gql } from "@apollo/client";

// GraphQL definitions for FOC GPT needs
export const GET_NEEDS = gql`
  query GetNeeds($filter: JSON, $accessToken: String, $organizationId: String!) {
    getNeeds(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_NEED_BY_ID = gql`
  query GetNeedById($id: String!, $accessToken: String, $organizationId: String!) {
    getNeedById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_NEED = gql`
  mutation UpdateNeed($id: String!, $needInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateNeed(id: $id, needInput: $needInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_NEED = gql`
  mutation DeleteNeed($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteNeed(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// PUBLIC - No authentication required
// Note: Need itself IS the submission - no separate submission concept
export const GET_PUBLIC_NEED_BUNDLE = gql`
  query GetPublicNeedBundle($id: String, $userId: String, $organizationId: String!) {
    getPublicNeedBundle(id: $id, userId: $userId, organizationId: $organizationId)
  }
`;

// Public update for need (which is the submission)
export const PUBLIC_UPDATE_NEED = gql`
  mutation PublicUpdateNeed($id: String!, $needInput: JSON!, $organizationId: String!) {
    publicUpdateNeed(id: $id, needInput: $needInput, organizationId: $organizationId)
  }
`;

// AI Conversation management
export const ADD_AI_CONVERSATION_ITEMS = gql`
  mutation AddAiConversationItems($needId: String!, $conversationItems: [JSON!]!, $accessToken: String, $organizationId: String!) {
    addAiConversationItems(needId: $needId, conversationItems: $conversationItems, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_NEED_AI_CONTEXT_DATA = gql`
  mutation UpsertNeedAiContextData($needId: String!, $aiContextData: JSON!, $accessToken: String, $organizationId: String!) {
    upsertNeedAiContextData(needId: $needId, aiContextData: $aiContextData, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// Security Domain management
export const UPSERT_SECURITY_DOMAIN_ITEMS = gql`
  mutation UpsertSecurityDomainItems($needId: String!, $securityDomainItems: [JSON!]!, $accessToken: String, $organizationId: String!) {
    upsertSecurityDomainItems(needId: $needId, securityDomainItems: $securityDomainItems, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const REMOVE_SECURITY_DOMAIN_ITEMS = gql`
  mutation RemoveSecurityDomainItems($needId: String!, $securityDomainIds: [String!], $accessToken: String, $organizationId: String!) {
    removeSecurityDomainItems(needId: $needId, securityDomainIds: $securityDomainIds, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// Attachments management
export const UPSERT_ATTACHMENTS = gql`
  mutation UpsertAttachments($needId: String!, $attachments: [JSON!]!, $accessToken: String, $organizationId: String!) {
    upsertAttachments(needId: $needId, attachments: $attachments, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const REMOVE_ATTACHMENTS = gql`
  mutation RemoveAttachments($needId: String!, $attachmentUids: [String!], $accessToken: String, $organizationId: String!) {
    removeAttachments(needId: $needId, attachmentUids: $attachmentUids, accessToken: $accessToken, organizationId: $organizationId)
  }
`;