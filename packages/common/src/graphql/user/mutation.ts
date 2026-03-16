import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation Mutation(
    $userInput: JSON
    $accessToken: String
    $organizationId: String
  ) {
    saveUser(
      userInput: $userInput
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;

export const UPDATE_USER_PASSWORD_AND_SEND_EMAIL = gql`
  mutation Mutation($userInput: JSON, $accessToken: String) {
    updateUserPasswordAndSendEmail(userInput: $userInput, accessToken: $accessToken)
  }
`;

export const VERIFY_TOKEN = gql`
  mutation Mutation($accessToken: String) {
    verifyToken(accessToken: $accessToken)
  }
`;

export const DELETE_USER_OR_REMOVE_FROM_ORG = gql`
  mutation Mutation(
    $userId: String
    $accessToken: String
    $organizationId: String
  ) {
    deleteUserOrRemoveFromOrg(
      userId: $userId
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;