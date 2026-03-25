"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_ATTENDEE_RESPONSE = exports.DELETE_CALENDAR_EVENT = exports.UPSERT_CALENDAR_EVENT = exports.GET_CALENDAR_EVENT_BY_ID = exports.GET_CALENDAR_EVENTS = void 0;
const client_1 = require("@apollo/client");
exports.GET_CALENDAR_EVENTS = (0, client_1.gql) `
  query GetCalendarEvents($filters: JSON, $accessToken: String, $organizationId: String!) {
    getCalendarEvents(filters: $filters, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.GET_CALENDAR_EVENT_BY_ID = (0, client_1.gql) `
  query GetCalendarEventById($id: String!, $accessToken: String, $organizationId: String!) {
    getCalendarEventById(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPSERT_CALENDAR_EVENT = (0, client_1.gql) `
  mutation UpsertCalendarEvent($input: JSON!, $accessToken: String, $organizationId: String!) {
    upsertCalendarEvent(input: $input, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.DELETE_CALENDAR_EVENT = (0, client_1.gql) `
  mutation DeleteCalendarEvent($id: String!, $accessToken: String, $organizationId: String!) {
    deleteCalendarEvent(id: $id, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
exports.UPDATE_ATTENDEE_RESPONSE = (0, client_1.gql) `
  mutation UpdateAttendeeResponse($eventId: String!, $attendeeEmail: String!, $status: String!, $accessToken: String, $organizationId: String!) {
    updateAttendeeResponse(eventId: $eventId, attendeeEmail: $attendeeEmail, status: $status, accessToken: $accessToken, organizationId: $organizationId)
  }
`;
//# sourceMappingURL=index.js.map