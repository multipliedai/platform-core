import { gql } from "@apollo/client";

export const GET_TWILIO_WEBHOOK_DATA_BY_ID = gql`
  query GetTwilioWebhookDataById($id: ID!, $accessToken: String, $organizationId: String!) {
    getTwilioWebhookDataById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_TWILIO_WEBHOOK_DATA = gql`
  query GetTwilioWebhookData($filters: JSON, $accessToken: String, $organizationId: String!) {
    getTwilioWebhookData(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const SAVE_TWILIO_WEBHOOK_DATA = gql`
  mutation SaveTwilioWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    saveTwilioWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_TWILIO_WEBHOOK_DATA = gql`
  mutation DeleteTwilioWebhookData($userInput: JSON!, $accessToken: String, $organizationId: String!) {
    deleteTwilioWebhookData(userInput: $userInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

