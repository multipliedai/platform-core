import { gql } from '@apollo/client';

export const GET_SAS_URL = gql`
mutation Mutation($storageAccountName: String!, $containerName: String!, $fileName: String!, $contentType: String!, $accessToken: String!, $organizationId: String!) {
	getgenerateSASURL(storageAccountName: $storageAccountName, containerName: $containerName, fileName: $fileName, contentType: $contentType, accessToken: $accessToken, organizationId: $organizationId)
}
`;

export const REGENERATE_SIGNED_URL = gql`
mutation Mutation($storageAccountName: String!, $url: String!, $accessToken: String!, $organizationId: String!) {
	regenerateSignedUrlFromUrl(storageAccountName: $storageAccountName, url: $url, accessToken: $accessToken, organizationId: $organizationId)
}
`;

export const DELETE_FILE_FROM_BLOB_STORAGE = gql`
mutation Mutation($storageAccountName: String!, $url: String!, $accessToken: String!, $organizationId: String!) {
	deleteFileFromBlobStorage(storageAccountName: $storageAccountName, url: $url, accessToken: $accessToken, organizationId: $organizationId)
}
`;

export const CONVERT_FILE = gql`
  mutation Mutation(
    $fileUrl: String!
    $fileType: String!
  ) {
    convertFile(
      fileUrl: $fileUrl
      fileType: $fileType
    )
  }
`;