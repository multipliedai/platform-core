import { gql } from "@apollo/client";

export const GET_SURVEYS = gql`
  query GetSurveys($filter: JSON, $accessToken: String, $organizationId: String!) {
    getSurveys(filter: $filter, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_SURVEY_BY_ID = gql`
  query GetSurveyById($id: String!, $accessToken: String, $organizationId: String!) {
    getSurveyById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_SURVEY = gql`
  mutation UpdateSurvey($surveyInput: JSON!, $accessToken: String, $organizationId: String!) {
    updateSurvey(surveyInput: $surveyInput, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_SURVEY = gql`
  mutation DeleteSurvey($id: String!, $accessToken: String, $organizationId: String!) {
    deleteSurvey(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
