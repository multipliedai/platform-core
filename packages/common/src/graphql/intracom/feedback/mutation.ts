import { gql } from '@apollo/client';

export const CREATE_INTRACOM_FEEDBACK = gql`
  mutation CreateIntracomFeedback($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createIntracomFeedback(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INTRACOM_FEEDBACKS = gql`
  query GetIntracomFeedbacks($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomFeedbacks(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INTRACOM_FEEDBACK_STATS = gql`
  query GetIntracomFeedbackStats($timeRange: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomFeedbackStats(timeRange: $timeRange, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INTRACOM_FEEDBACK = gql`
  mutation DeleteIntracomFeedback($feedbackId: String!, $accessToken: String!, $organizationId: String!) {
    deleteIntracomFeedback(feedbackId: $feedbackId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;