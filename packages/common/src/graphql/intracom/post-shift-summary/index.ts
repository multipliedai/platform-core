import { gql } from "@apollo/client";

export const GET_POST_SHIFT_SUMMARIES = gql`
  query GetPostShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPostShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_POST_SHIFT_SUMMARY = gql`
  mutation UpsertPostShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPostShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_POST_SHIFT_SUMMARY = gql`
  mutation DeletePostShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deletePostShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SHARED_POST_SHIFT_SUMMARY = gql`
  query GetSharedPostShiftSummary($id: String, $organizationId: String!, $recaptchaToken: String) {
    getSharedPostShiftSummary(id: $id, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;

export const SHARE_POST_SHIFT_SUMMARY = gql`
  mutation SharePostShiftSummary($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePostShiftSummary(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_POST_SHIFT_SUMMARY_HISTORY = gql`
  query GetPostShiftSummaryHistory($postShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getPostShiftSummaryHistory(postShiftSummaryId: $postShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;