/**
 * Format a date/timestamp with optional timezone support
 * @param date - Date object, timestamp (ms), or ISO string
 * @param timeZone - Optional IANA timezone identifier (e.g., "America/New_York")
 * @param options - Optional Intl.DateTimeFormatOptions for custom formatting
 * @returns Formatted date string
 */
export declare const formatDateWithTimezone: (date: Date | number | string, timeZone?: string, options?: Intl.DateTimeFormatOptions) => string;
/**
 * Format date only (no time) with optional timezone support
 */
export declare const formatDateOnlyWithTimezone: (date: Date | number | string, timeZone?: string) => string;
/**
 * Format time only with optional timezone support
 */
export declare const formatTimeOnlyWithTimezone: (date: Date | number | string, timeZone?: string) => string;
/**
 * Format date for display in tables/lists (compact format)
 */
export declare const formatCompactDateWithTimezone: (date: Date | number | string, timeZone?: string) => string;
/**
 * Format relative date (Today, Yesterday, or full date) with optional timezone
 */
export declare const formatRelativeDateWithTimezone: (date: Date | number | string, timeZone?: string) => string;
/**
 * Equivalent to Date.toLocaleString() but with timezone support
 * Formats date and time according to locale conventions
 */
export declare const toLocaleStringWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
/**
 * Equivalent to Date.toLocaleDateString() but with timezone support
 * Formats date only (no time) according to locale conventions
 */
export declare const toLocaleDateStringWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
/**
 * Equivalent to Date.toLocaleTimeString() but with timezone support
 * Formats time only (no date) according to locale conventions
 */
export declare const toLocaleTimeStringWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
/**
 * Format date in long format (e.g., "Monday, January 15, 2024")
 */
export declare const formatLongDateWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format date in short format (e.g., "1/15/24")
 */
export declare const formatShortDateWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format full date and time (e.g., "Monday, January 15, 2024 at 3:45 PM")
 */
export declare const formatFullDateTimeWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format month and year only (e.g., "January 2024")
 */
export declare const formatMonthYearWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format weekday and date (e.g., "Monday, Jan 15")
 */
export declare const formatWeekdayDateWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format time with seconds (e.g., "3:45:30 PM")
 */
export declare const formatTimeWithSecondsWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format 24-hour time (e.g., "15:45")
 */
export declare const format24HourTimeWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format 24-hour time with seconds (e.g., "15:45:30")
 */
export declare const format24HourTimeWithSecondsWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format ISO date string with timezone offset (e.g., "2024-01-15T15:45:30-05:00")
 */
export declare const formatISOWithTimezone: (date: Date | number | string, timeZone?: string) => string;
/**
 * Format date as numeric (e.g., "01/15/2024")
 */
export declare const formatNumericDateWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format date with weekday abbreviation (e.g., "Mon, Jan 15, 2024")
 */
export declare const formatDateWithWeekdayWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Format date and time in compact format (e.g., "1/15/24, 3:45 PM")
 */
export declare const formatCompactDateTimeWithTimezone: (date: Date | number | string, timeZone?: string, locales?: string | string[]) => string;
/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone for a given Date
 * @param date - Date object to get the start of day for
 * @param timeZone - IANA timezone identifier (e.g., "America/New_York")
 * @returns UTC timestamp in milliseconds
 */
export declare const getStartOfDayForDateInTimezone: (date: Date, timeZone: string) => number;
/**
 * Convert a Date object to represent the same calendar date in a different timezone
 * This is useful when a date is selected in a calendar - we want to preserve the calendar date
 * but represent it in the organization's timezone
 * @param date - Date object (typically representing a date at midnight in user's local timezone)
 * @param timeZone - Target IANA timezone identifier (e.g., "America/Chicago")
 * @returns Date object representing the same calendar date at midnight in the target timezone
 */
export declare const convertDateToTimezone: (date: Date, timeZone: string) => Date;
/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone
 */
export declare const getStartOfDayInTimezone: (year: number, month: number, day: number, timeZone: string) => number;
/**
 * Get the UTC timestamp for the end of a day (23:59:59.999) in a specific timezone
 */
export declare const getEndOfDayInTimezone: (year: number, month: number, day: number, timeZone: string) => number;
/**
 * Get the UTC timestamp for a specific local time (hour, minute) on a date in a timezone.
 * Use this so shift times (e.g. 7am, 3pm) are interpreted in the organization timezone, not the user's local timezone.
 */
export declare const getTimestampAtTimeInTimezone: (year: number, month: number, day: number, hour: number, minute: number, timeZone: string) => number;
//# sourceMappingURL=timezone-date-conversion.d.ts.map