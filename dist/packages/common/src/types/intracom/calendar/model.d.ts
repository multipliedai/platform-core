export type CalendarEventType = "meeting" | "appointment" | "reminder" | "deadline" | "event" | "task" | "holiday" | "personal";
export type CalendarEventStatus = "confirmed" | "tentative" | "cancelled" | "completed";
export type CalendarEventVisibility = "public" | "private" | "confidential";
export type CalendarRecurrenceType = "none" | "daily" | "weekly" | "monthly" | "yearly";
export interface CalendarEventRecurrence {
    type: CalendarRecurrenceType;
    interval: number;
    endDate?: number;
    occurrences?: number;
    daysOfWeek?: number[];
    dayOfMonth?: number;
    monthOfYear?: number;
}
export interface CalendarEventAttendee {
    email: string;
    name?: string;
    status: "accepted" | "declined" | "tentative" | "needsAction";
    isOrganizer?: boolean;
    isOptional?: boolean;
    responseTime?: number;
}
export interface CalendarEventLocation {
    name?: string;
    address?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
    isOnline: boolean;
    meetingUrl?: string;
    meetingId?: string;
    meetingPassword?: string;
}
export interface CalendarEventReminder {
    type: "email" | "popup" | "sms";
    minutes: number;
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
    startDate: number;
    endDate: number;
    publicStartDate?: number;
    publicEndDate?: number;
    isAllDay: boolean;
    timezone?: string;
    location?: CalendarEventLocation;
    attendees: CalendarEventAttendee[];
    organizer: {
        email: string;
        name?: string;
    };
    recurrence?: CalendarEventRecurrence;
    reminders: CalendarEventReminder[];
    tags?: string[];
    priority?: "low" | "normal" | "high";
    color?: string;
    attachments?: Attachment[];
    createdAt: number;
    lastUpdated: number;
    userId: string;
    calendarId?: string;
    source?: string;
    externalId?: string;
    organizationId: string;
    meetingNotes?: string;
    agenda?: string[];
    meetingRecording?: string;
    relatedEventPlanIds?: string[];
    relatedPostPlanIds?: string[];
}
//# sourceMappingURL=model.d.ts.map