"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_PROMPT = exports.UPSERT_PROMPT = exports.GET_PROMPT_HISTORY = exports.GET_PROMPTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_PROMPTS = (0, client_1.gql) `
  query GetPrompts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPrompts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_PROMPT_HISTORY = (0, client_1.gql) `
  query GetPromptHistory($promptId: String!, $accessToken: String, $organizationId: String!) {
    getPromptHistory(promptId: $promptId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_PROMPT = (0, client_1.gql) `
  mutation UpsertPrompt($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPrompt(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_PROMPT = (0, client_1.gql) `
  mutation DeletePrompt($id: String!, $accessToken: String, $organizationId: String!) {
    deletePrompt(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map