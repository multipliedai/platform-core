import { gql } from "@apollo/client";

export const GET_NOTIFICATION_SENT_DATA_BY_ID = gql`
  query GetNotificationSentDataById($id: ID!, $organizationId: String!, $accessToken: String) {
    getNotificationSentDataById(id: $id, organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const GET_NOTIFICATION_SENT_DATA = gql`
  query GetNotificationSentData($organizationId: String!, $accessToken: String, $filters: JSON) {
    getNotificationSentData(organizationId: $organizationId, accessToken: $accessToken, filters: $filters)
  }
`;

export const SAVE_NOTIFICATION_SENT_DATA = gql`
  mutation SaveNotificationSentData($userInput: JSON, $organizationId: String!, $accessToken: String) {
    saveNotificationSentData(userInput: $userInput, organizationId: $organizationId, accessToken: $accessToken)
  }
`;

export const DELETE_NOTIFICATION_SENT_DATA = gql`
  mutation DeleteNotificationSentData($userInput: JSON!, $organizationId: String!, $accessToken: String) {
    deleteNotificationSentData(userInput: $userInput, organizationId: $organizationId, accessToken: $accessToken)
  }
`;
