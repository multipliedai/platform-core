import { gql } from "@apollo/client";

export const GET_CALENDAR_EVENTS = gql`
  query GetCalendarEvents($filters: JSON, $accessToken: String, $organizationId: String!) {
    getCalendarEvents(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const GET_CALENDAR_EVENT_BY_ID = gql`
  query GetCalendarEventById($id: String!, $accessToken: String, $organizationId: String!) {
    getCalendarEventById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPSERT_CALENDAR_EVENT = gql`
  mutation UpsertCalendarEvent($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertCalendarEvent(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const DELETE_CALENDAR_EVENT = gql`
  mutation DeleteCalendarEvent($id: String!, $accessToken: String, $organizationId: String!) {
    deleteCalendarEvent(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;

export const UPDATE_ATTENDEE_RESPONSE = gql`
  mutation UpdateAttendeeResponse($eventId: String!, $attendeeEmail: String!, $status: String!, $accessToken: String, $organizationId: String!) {
    updateAttendeeResponse(eventId: $eventId, attendeeEmail: $attendeeEmail, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
