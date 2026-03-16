import { gql } from "@apollo/client";

export const GET_GUARD_POST_SHIFT_SUMMARY_UPDATES = gql`
  query GetGuardPostShiftSummaryUpdates($filters: JSON, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryUpdates(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_GUARD_POST_SHIFT_SUMMARY_UPDATE_BY_ID = gql`
  query GetGuardPostShiftSummaryUpdateById($id: String!, $accessToken: String, $organizationId: String!) {
    getGuardPostShiftSummaryUpdateById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_GUARD_POST_SHIFT_SUMMARY_UPDATE = gql`
  mutation UpsertGuardPostShiftSummaryUpdate($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertGuardPostShiftSummaryUpdate(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_GUARD_POST_SHIFT_SUMMARY_UPDATE = gql`
  mutation DeleteGuardPostShiftSummaryUpdate($id: String!, $accessToken: String, $organizationId: String!) {
    deleteGuardPostShiftSummaryUpdate(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

