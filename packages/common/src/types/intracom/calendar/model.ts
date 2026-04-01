export type CalendarEventType = "meeting" | "appointment" | "reminder" | "deadline" | "event" | "task" | "holiday" | "personal";
export type CalendarEventStatus = "confirmed" | "tentative" | "cancelled" | "completed";
export type CalendarEventVisibility = "public" | "private" | "confidential";
export type CalendarRecurrenceType = "none" | "daily" | "weekly" | "monthly" | "yearly";

export interface CalendarEventRecurrence {
  type: CalendarRecurrenceType;
  interval: number; // Every X days/weeks/months/years
  endDate?: number; // Unix timestamp when recurrence ends
  occurrences?: number; // Number of occurrences
  daysOfWeek?: number[]; // 0-6 (Sunday-Saturday) for weekly recurrence
  dayOfMonth?: number; // 1-31 for monthly recurrence
  monthOfYear?: number; // 1-12 for yearly recurrence
}

export interface CalendarEventAttendee {
  email: string;
  name?: string;
  status: "accepted" | "declined" | "tentative" | "needsAction";
  isOrganizer?: boolean;
  isOptional?: boolean;
  responseTime?: number; // Unix timestamp of response
}

export interface CalendarEventLocation {
  name?: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  isOnline: boolean;
  meetingUrl?: string; // For online meetings (Zoom, Teams, etc.)
  meetingId?: string; // Meeting ID for online meetings
  meetingPassword?: string; // Meeting password if required
}

export interface CalendarEventReminder {
  type: "email" | "popup" | "sms";
  minutes: number; // Minutes before event
}

export interface Attachment {
  uid: string;
  name: string;
  url?: string;
  thumbUrl?: string;
  type?: string;
  size?: number;
  aiCreated?: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  type: CalendarEventType;
  status: CalendarEventStatus;
  visibility: CalendarEventVisibility;
  
  // Date and time
  startDate: number; // Unix timestamp
  endDate: number; // Unix timestamp
  publicStartDate?: number; // Unix timestamp
  publicEndDate?: number; // Unix timestamp
  isAllDay: boolean;
  timezone?: string; // IANA timezone (e.g., "America/New_York")
  
  // Location
  location?: CalendarEventLocation;
  
  // Attendees
  attendees: CalendarEventAttendee[];
  organizer: {
    email: string;
    name?: string;
  };
  
  // Recurrence
  recurrence?: CalendarEventRecurrence;
  
  // Reminders
  reminders: CalendarEventReminder[];
  
  // Additional properties
  tags?: string[];
  priority?: "low" | "normal" | "high";
  color?: string; // Hex color code
  attachments?: Attachment[];
  
  // Metadata
  createdAt: number;
  lastUpdated: number;
  userId: string;
  calendarId?: string; // If using multiple calendars
  source?: string; // "google", "apple", "outlook", "manual"
  externalId?: string; // ID from external calendar system
  organizationId: string; // Multi-tenant organization identifier
  
  // Meeting specific
  meetingNotes?: string;
  agenda?: string[];
  meetingRecording?: string; // URL to recording

  // Related event plan
  relatedEventPlanIds?: string[];
  relatedPostPlanIds?: string[];
}