"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRAIN_INDOOR_LOCATION_MODEL = exports.ESTIMATE_INDOOR_LOCATION = exports.DELETE_FINGERPRINT = exports.UPSERT_FINGERPRINT = exports.GET_FINGERPRINT_HISTORY_BY_ITEM_ID = exports.GET_FINGERPRINT_BY_ID = exports.GET_FINGERPRINTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_FINGERPRINTS = (0, client_1.gql) `
  query GetFingerprints($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFingerprints(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_FINGERPRINT_BY_ID = (0, client_1.gql) `
  query GetFingerprintById($id: String!, $accessToken: String, $organizationId: String!) {
    getFingerprintById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_FINGERPRINT_HISTORY_BY_ITEM_ID = (0, client_1.gql) `
  query GetFingerprintHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getFingerprintHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_FINGERPRINT = (0, client_1.gql) `
  mutation UpsertFingerprint($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFingerprint(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_FINGERPRINT = (0, client_1.gql) `
  mutation DeleteFingerprint($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFingerprint(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.ESTIMATE_INDOOR_LOCATION = (0, client_1.gql) `
  query EstimateIndoorLocation(
    $buildingId: String!
    $floorId: String!
    $scanResults: JSON
    $previousSmoothed: JSON
    $k: Int
    $alpha: Float
    $accessToken: String
    $organizationId: String!
  ) {
    estimateIndoorLocation(
      buildingId: $buildingId
      floorId: $floorId
      scanResults: $scanResults
      previousSmoothed: $previousSmoothed
      k: $k
      alpha: $alpha
      accessToken: $accessToken
      organizationId: $organizationId
    )
  }
`;
exports.TRAIN_INDOOR_LOCATION_MODEL = (0, client_1.gql) `
  mutation TrainIndoorLocationModel($organizationId: String!, $accessToken: String) {
    trainIndoorLocationModel(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
//# sourceMappingURL=fingerprints.js.map