import { gql } from "@apollo/client";

export const GET_PROMPTS = gql`
  query GetPrompts($filters: JSON, $accessToken: String, $organizationId: String!) {
    getPrompts(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_PROMPT_HISTORY = gql`
  query GetPromptHistory($promptId: String!, $accessToken: String, $organizationId: String!) {
    getPromptHistory(promptId: $promptId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_PROMPT = gql`
  mutation UpsertPrompt($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertPrompt(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_PROMPT = gql`
  mutation DeletePrompt($id: String!, $accessToken: String, $organizationId: String!) {
    deletePrompt(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

