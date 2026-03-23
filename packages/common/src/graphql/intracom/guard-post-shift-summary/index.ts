import { gql } from "@apollo/client";

export const GET_GUARD_POST_SHIFT_SUMMARIES = gql`
  query GetGuardPostShiftSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_GUARD_POST_SHIFT_SUMMARY_BY_ID = gql`
  query GetGuardPostShiftSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_GUARD_POST_SHIFT_SUMMARY = gql`
  mutation UpsertGuardPostShiftSummary($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertGuardPostShiftSummary(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_GUARD_POST_SHIFT_SUMMARY = gql`
  mutation DeleteGuardPostShiftSummary($id: String!, $accessToken: String, $organizationId: String!) {
    deleteGuardPostShiftSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_GUARD_POST_SHIFT_SUMMARY_HISTORY = gql`
  query GetGuardPostShiftSummaryHistory($guardPostShiftSummaryId: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryHistory(guardPostShiftSummaryId: $guardPostShiftSummaryId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export * from './updates';