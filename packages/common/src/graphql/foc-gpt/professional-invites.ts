import { gql } from "@apollo/client";

// GraphQL definitions for FOC GPT Professional Invites
export const GET_PROFESSIONAL_INVITES = gql`
  query GetProfessionalInvites($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProfessionalInvites(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PUBLIC_PROFESSIONAL_INVITE = gql`
  query GetPublicProfessionalInvite($inviteId: String!) {
    getPublicProfessionalInvite(inviteId: $inviteId)
  }
`;

export const UPSERT_PROFESSIONAL_INVITE = gql`
  mutation UpsertProfessionalInvite($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertProfessionalInvite(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_PUBLIC_PROFESSIONAL_INVITE = gql`
  mutation UpsertPublicProfessionalInvite($input: JSON!) {
    upsertPublicProfessionalInvite(input: $input)
  }
`;

export const UPSERT_PROFESSIONAL_INVITE_AI_CONTEXT_DATA = gql`
  mutation UpsertProfessionalInviteAiContextData($inviteId: String!, $aiContextData: JSON!, $organizationId: String!) {
    upsertProfessionalInviteAiContextData(inviteId: $inviteId, aiContextData: $aiContextData, organizationId: $organizationId)
  }
`;

export const SEND_BULK_PROFESSIONAL_INVITES = gql`
  mutation SendBulkProfessionalInvites($input: JSON!, $accessToken: String, $organizationId: String!) {
    sendBulkProfessionalInvites(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PROFESSIONAL_INVITE = gql`
  mutation DeleteProfessionalInvite($inviteId: String!, $accessToken: String!, $organizationId: String!) {
    deleteProfessionalInvite(inviteId: $inviteId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

