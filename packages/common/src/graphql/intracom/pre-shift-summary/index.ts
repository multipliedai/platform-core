import { gql } from "@apollo/client";

export const GET_PRE_SHIFT_SUMMARIES = gql`
  query GetPreShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PRE_SHIFT_SUMMARY_BY_ID = gql`
  query GetPreShiftSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_PRE_SHIFT_SUMMARY = gql`
  mutation UpsertPreShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPreShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PRE_SHIFT_SUMMARY = gql`
  mutation DeletePreShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deletePreShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SHARED_PRE_SHIFT_SUMMARY = gql`
  query GetSharedPreShiftSummary($id: String, $date: Float, $organizationId: String!, $recaptchaToken: String) {
    getSharedPreShiftSummary(id: $id, date: $date, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;

export const SHARE_PRE_SHIFT_SUMMARY = gql`
  mutation SharePreShiftSummary($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePreShiftSummary(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PRE_SHIFT_SUMMARY_HISTORY = gql`
  query GetPreShiftSummaryHistory($preShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getPreShiftSummaryHistory(preShiftSummaryId: $preShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SHARED_PRE_SHIFT_SUMMARY_HISTORY = gql`
  query GetSharedPreShiftSummaryHistory($id: String, $organizationId: String!, $recaptchaToken: String) {
    getSharedPreShiftSummaryHistory(id: $id, organizationId: $organizationId, recaptchaToken: $recaptchaToken)
  }
`;

export const SHARE_PRE_SHIFT_SUMMARY_HISTORY = gql`
  mutation SharePreShiftSummaryHistory($id: String!, $phoneNumbers: [String!]!, $emails: [String!]!, $accessToken: String!, $organizationId: String!) {
    sharePreShiftSummaryHistory(id: $id, phoneNumbers: $phoneNumbers, emails: $emails, accessToken: $accessToken, organizationId: $organizationId)
  }
`;