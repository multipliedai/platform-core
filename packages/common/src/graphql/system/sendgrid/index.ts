import { gql } from "@apollo/client";

export const GET_SENDGRID_WEBHOOK_DATA_BY_ID = gql`
  query GetSendGridWebhookDataById($id: ID!, $accessToken: String, $organizationId: String!) {
    getSendGridWebhookDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SENDGRID_WEBHOOK_DATA = gql`
  query GetSendGridWebhookData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getSendGridWebhookData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SAVE_SENDGRID_WEBHOOK_DATA = gql`
  mutation SaveSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SENDGRID_WEBHOOK_DATA = gql`
  mutation DeleteSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    deleteSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const REPROCESS_SENDGRID_WEBHOOK_DATA = gql`
  mutation ReprocessSendGridWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    reprocessSendGridWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;