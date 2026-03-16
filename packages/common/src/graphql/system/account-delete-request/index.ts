import { gql } from "@apollo/client";

export const REQUEST_ACCOUNT_DELETION = gql`
  mutation RequestAccountDeletion($name: String!, $email: String!, $recaptchaToken: String!, $reason: String) {
    requestAccountDeletion(name: $name, email: $email, recaptchaToken: $recaptchaToken, reason: $reason)
  }
`;
