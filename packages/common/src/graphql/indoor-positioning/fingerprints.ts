import { gql } from "@apollo/client";

export const GET_FINGERPRINTS = gql`
  query GetFingerprints($filters: JSON, $accessToken: String, $organizationId: String!) {
    getFingerprints(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_FINGERPRINT_BY_ID = gql`
  query GetFingerprintById($id: String!, $accessToken: String, $organizationId: String!) {
    getFingerprintById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_FINGERPRINT_HISTORY_BY_ITEM_ID = gql`
  query GetFingerprintHistoryByItemId($itemId: String!, $accessToken: String, $organizationId: String!) {
    getFingerprintHistoryByItemId(itemId: $itemId, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_FINGERPRINT = gql`
  mutation UpsertFingerprint($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertFingerprint(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_FINGERPRINT = gql`
  mutation DeleteFingerprint($id: String!, $accessToken: String!, $organizationId: String!) {
    deleteFingerprint(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const ESTIMATE_INDOOR_LOCATION = gql`
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

export const TRAIN_INDOOR_LOCATION_MODEL = gql`
  mutation TrainIndoorLocationModel($organizationId: String!, $accessToken: String) {
    trainIndoorLocationModel(organizationId: $organizationId, accessToken: $accessToken)
  }
`;
