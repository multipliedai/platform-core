import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($id: ID!, $accessToken: String) {
    getUserById(id: $id, accessToken: $accessToken)
  }
`;

export const GET_USERS = gql`
  query Query($accessToken: String, $organizationId: String) {
    getUsers(
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;

export const GET_ALL_COGNITO_USERS = gql`
  query Query($accessToken: String) {
    getAllCognitoUsers(
      accessToken: $accessToken
    )
  }
`;

export const GET_NOTIFICATION_PERMISSIONS = gql`
  query Query($accessToken: String, $userId: String) {
    getNotificationPermissions(
      accessToken: $accessToken
      userId: $userId
    )
  }
`;
