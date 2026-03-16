import { gql } from "@apollo/client";

export const GET_INTRACOM_DOCUMENTS = gql`
  query GetIntracomDocuments($filters: JSON, $accessToken: String, $organizationId: String!) {
    getIntracomDocuments(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INTRACOM_DOCUMENT_BY_ID = gql`
  query GetIntracomDocumentById($id: String!, $accessToken: String, $organizationId: String!) {
    getIntracomDocumentById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_INTRACOM_DOCUMENT = gql`
  mutation UpsertIntracomDocument($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertIntracomDocument(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_INTRACOM_DOCUMENT = gql`
  mutation DeleteIntracomDocument($id: String!, $accessToken: String, $organizationId: String!) {
    deleteIntracomDocument(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_INTRACOM_DOCUMENT_HISTORY = gql`
  query GetIntracomDocumentHistory($documentId: String!, $accessToken: String, $organizationId: String!) {
    getIntracomDocumentHistory(documentId: $documentId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SHARED_INTRACOM_DOCUMENT_BY_ID = gql`
  query GetSharedIntracomDocumentById(
    $id: String!
    $organizationId: String!
    $recaptchaToken: String
  ) {
    getSharedIntracomDocumentById(
      id: $id
      organizationId: $organizationId
      recaptchaToken: $recaptchaToken
    )
  }
`;

export const UPDATE_SHARED_INTRACOM_DOCUMENT_STATUS = gql`
  mutation UpdateSharedIntracomDocumentStatus(
    $id: String!
    $status: String!
    $organizationId: String!
    $userId: String!
    $recaptchaToken: String
    $comments: JSON
  ) {
    updateSharedIntracomDocumentStatus(
      id: $id
      status: $status
      organizationId: $organizationId
      userId: $userId
      recaptchaToken: $recaptchaToken
      comments: $comments
    )
  }
`;

