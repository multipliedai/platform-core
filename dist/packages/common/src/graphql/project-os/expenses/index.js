"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_EXPENSE = exports.GET_EXPENSE_BY_ID = exports.GET_EXPENSES = exports.REJECT_EXPENSE_TRANSACTION = exports.APPROVE_EXPENSE_TRANSACTION = exports.CREATE_EXPENSE_TRANSACTION = exports.GET_EXPENSE_TRANSACTION_BY_ID = exports.GET_EXPENSE_TRANSACTIONS = exports.DELETE_EXPENSE_SUMMARY = exports.GET_EXPENSE_SUMMARY_BY_ID = exports.GET_EXPENSE_SUMMARIES = void 0;
const client_1 = require("@apollo/client");
// ===== EXPENSE SUMMARIES (User Overview) =====
exports.GET_EXPENSE_SUMMARIES = (0, client_1.gql) `
  query GetProjectOSExpenseSummaries($filters: JSON, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseSummaries(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_EXPENSE_SUMMARY_BY_ID = (0, client_1.gql) `
  query GetProjectOSExpenseSummaryById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseSummaryById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_EXPENSE_SUMMARY = (0, client_1.gql) `
  mutation DeleteProjectOSExpenseSummary($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteProjectOSExpenseSummary(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// ===== EXPENSE TRANSACTIONS (Individual Records) =====
exports.GET_EXPENSE_TRANSACTIONS = (0, client_1.gql) `
  query GetProjectOSExpenseTransactions($userId: String, $projectId: String, $status: String, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseTransactions(userId: $userId, projectId: $projectId, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_EXPENSE_TRANSACTION_BY_ID = (0, client_1.gql) `
  query GetProjectOSExpenseTransactionById($id: String!, $accessToken: String, $organizationId: String!) {
    getProjectOSExpenseTransactionById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.CREATE_EXPENSE_TRANSACTION = (0, client_1.gql) `
  mutation CreateProjectOSExpenseTransaction($input: JSON!, $accessToken: String!, $organizationId: String!) {
    createProjectOSExpenseTransaction(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.APPROVE_EXPENSE_TRANSACTION = (0, client_1.gql) `
  mutation ApproveProjectOSExpenseTransaction($id: String!, $approvedBy: String!, $accessToken: String!, $organizationId: String!) {
    approveProjectOSExpenseTransaction(id: $id, approvedBy: $approvedBy, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.REJECT_EXPENSE_TRANSACTION = (0, client_1.gql) `
  mutation RejectProjectOSExpenseTransaction($id: String!, $rejectionReason: String!, $accessToken: String, $organizationId: String!) {
    rejectProjectOSExpenseTransaction(id: $id, rejectionReason: $rejectionReason, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
// ===== LEGACY COMPATIBILITY (for backward compatibility) =====
// These map to the new expense summaries for now
exports.GET_EXPENSES = exports.GET_EXPENSE_SUMMARIES;
exports.GET_EXPENSE_BY_ID = exports.GET_EXPENSE_SUMMARY_BY_ID;
exports.DELETE_EXPENSE = exports.DELETE_EXPENSE_SUMMARY;
//# sourceMappingURL=index.js.map