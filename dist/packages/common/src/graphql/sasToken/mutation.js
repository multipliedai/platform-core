"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVERT_FILE = exports.DELETE_FILE_FROM_BLOB_STORAGE = exports.REGENERATE_SIGNED_URL = exports.GET_SAS_URL = void 0;
const client_1 = require("@apollo/client");
exports.GET_SAS_URL = (0, client_1.gql) `
mutation Mutation($storageAccountName: String!, $containerName: String!, $fileName: String!, $contentType: String!, $accessToken: String!, $organizationId: String!) {
	getgenerateSASURL(storageAccountName: $storageAccountName, containerName: $containerName, fileName: $fileName, contentType: $contentType, accessToken: $accessToken, organizationId: $organizationId)
}
`;
exports.REGENERATE_SIGNED_URL = (0, client_1.gql) `
mutation Mutation($storageAccountName: String!, $url: String!, $accessToken: String!, $organizationId: String!) {
	regenerateSignedUrlFromUrl(storageAccountName: $storageAccountName, url: $url, accessToken: $accessToken, organizationId: $organizationId)
}
`;
exports.DELETE_FILE_FROM_BLOB_STORAGE = (0, client_1.gql) `
mutation Mutation($storageAccountName: String!, $url: String!, $accessToken: String!, $organizationId: String!) {
	deleteFileFromBlobStorage(storageAccountName: $storageAccountName, url: $url, accessToken: $accessToken, organizationId: $organizationId)
}
`;
exports.CONVERT_FILE = (0, client_1.gql) `
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
//# sourceMappingURL=mutation.js.map