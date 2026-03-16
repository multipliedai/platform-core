import { gql } from "@apollo/client";

// ===== EXPENSE SUMMARIES (User Overview) =====
export const GET_EXPENSE_SUMMARIES = gql`
  query GetProjectOSExpenseSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_EXPENSE_SUMMARY_BY_ID = gql`
  query GetProjectOSExpenseSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_EXPENSE_SUMMARY = gql`
  mutation DeleteProjectOSExpenseSummary($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteProjectOSExpenseSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// ===== EXPENSE TRANSACTIONS (Individual Records) =====
export const GET_EXPENSE_TRANSACTIONS = gql`
  query GetProjectOSExpenseTransactions($userId: String, $projectId: String, $status: String, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseTransactions(userId: $userId, projectId: $projectId, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_EXPENSE_TRANSACTION_BY_ID = gql`
  query GetProjectOSExpenseTransactionById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseTransactionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const CREATE_EXPENSE_TRANSACTION = gql`
  mutation CreateProjectOSExpenseTransaction($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSExpenseTransaction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const APPROVE_EXPENSE_TRANSACTION = gql`
  mutation ApproveProjectOSExpenseTransaction($id: String!, $approvedBy: String!, $accessToken: String!, $organizationId: String!) {
    approveProjectOSExpenseTransaction(id: $id, approvedBy: $approvedBy, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const REJECT_EXPENSE_TRANSACTION = gql`
  mutation RejectProjectOSExpenseTransaction($id: String!, $rejectionReason: String!, $accessToken: String, $organizationId: String!) {
    rejectProjectOSExpenseTransaction(id: $id, rejectionReason: $rejectionReason, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

// ===== LEGACY COMPATIBILITY (for backward compatibility) =====
// These map to the new expense summaries for now
export const GET_EXPENSES = GET_EXPENSE_SUMMARIES;
export const GET_EXPENSE_BY_ID = GET_EXPENSE_SUMMARY_BY_ID;
export const DELETE_EXPENSE = DELETE_EXPENSE_SUMMARY;
