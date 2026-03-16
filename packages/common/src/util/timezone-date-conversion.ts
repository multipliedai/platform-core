import { DateTime } from "luxon";

// ============================================
// TIMEZONE-AWARE DATE FORMATTING UTILITIES
// ============================================

/**
 * Format a date/timestamp with optional timezone support
 * @param date - Date object, timestamp (ms), or ISO string
 * @param timeZone - Optional IANA timezone identifier (e.g., "America/New_York")
 * @param options - Optional Intl.DateTimeFormatOptions for custom formatting
 * @returns Formatted date string
 */
export const formatDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    ...options,
  };

  if (timeZone) {
    defaultOptions.timeZone = timeZone;
  }

  return dateObj.toLocaleString(undefined, defaultOptions);
};

/**
 * Format date only (no time) with optional timezone support
 */
export const formatDateOnlyWithTimezone = (
  date: Date | number | string,
  timeZone?: string
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (timeZone) {
    options.timeZone = timeZone;
  }

  // Use toLocaleDateString instead of toLocaleString to ensure no time is included
  return dateObj.toLocaleDateString(undefined, options);
};

/**
 * Format time only with optional timezone support
 */
export const formatTimeOnlyWithTimezone = (
  date: Date | number | string,
  timeZone?: string
): string => {
  return formatDateWithTimezone(date, timeZone, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Format date for display in tables/lists (compact format)
 */
export const formatCompactDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string
): string => {
  return formatDateWithTimezone(date, timeZone, {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Format relative date (Today, Yesterday, or full date) with optional timezone
 */
export const formatRelativeDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const now = new Date();

  // Get dates in the target timezone for comparison
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    ...(timeZone && { timeZone }),
  };

  const todayStr = now.toLocaleDateString(undefined, options);
  const dateStr = dateObj.toLocaleDateString(undefined, options);

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString(undefined, options);

  const timeStr = formatTimeOnlyWithTimezone(dateObj, timeZone);

  if (dateStr === todayStr) {
    return `Today ${timeStr}`;
  } else if (dateStr === yesterdayStr) {
    return `Yesterday ${timeStr}`;
  } else {
    return formatDateWithTimezone(dateObj, timeZone);
  }
};

// ============================================
// NATIVE JAVASCRIPT METHOD EQUIVALENTS WITH TIMEZONE
// ============================================

/**
 * Equivalent to Date.toLocaleString() but with timezone support
 * Formats date and time according to locale conventions
 */
export const toLocaleStringWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const formatOptions: Intl.DateTimeFormatOptions = {
    ...options,
    ...(timeZone && { timeZone }),
  };

  return dateObj.toLocaleString(locales, formatOptions);
};

/**
 * Equivalent to Date.toLocaleDateString() but with timezone support
 * Formats date only (no time) according to locale conventions
 */
export const toLocaleDateStringWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const formatOptions: Intl.DateTimeFormatOptions = {
    ...options,
    ...(timeZone && { timeZone }),
  };

  return dateObj.toLocaleDateString(locales, formatOptions);
};

/**
 * Equivalent to Date.toLocaleTimeString() but with timezone support
 * Formats time only (no date) according to locale conventions
 */
export const toLocaleTimeStringWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  const formatOptions: Intl.DateTimeFormatOptions = {
    ...options,
    ...(timeZone && { timeZone }),
  };

  return dateObj.toLocaleTimeString(locales, formatOptions);
};

// ============================================
// ADDITIONAL COMMON DATE FORMATS
// ============================================

/**
 * Format date in long format (e.g., "Monday, January 15, 2024")
 */
export const formatLongDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Format date in short format (e.g., "1/15/24")
 */
export const formatShortDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });
};

/**
 * Format full date and time (e.g., "Monday, January 15, 2024 at 3:45 PM")
 */
export const formatFullDateTimeWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleStringWithTimezone(date, timeZone, locales, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Format month and year only (e.g., "January 2024")
 */
export const formatMonthYearWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    year: "numeric",
    month: "long",
  });
};

/**
 * Format weekday and date (e.g., "Monday, Jan 15")
 */
export const formatWeekdayDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

/**
 * Format time with seconds (e.g., "3:45:30 PM")
 */
export const formatTimeWithSecondsWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleTimeStringWithTimezone(date, timeZone, locales, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

/**
 * Format 24-hour time (e.g., "15:45")
 */
export const format24HourTimeWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleTimeStringWithTimezone(date, timeZone, locales, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

/**
 * Format 24-hour time with seconds (e.g., "15:45:30")
 */
export const format24HourTimeWithSecondsWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleTimeStringWithTimezone(date, timeZone, locales, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

/**
 * Format ISO date string with timezone offset (e.g., "2024-01-15T15:45:30-05:00")
 */
export const formatISOWithTimezone = (
  date: Date | number | string,
  timeZone?: string
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) return "";

  if (timeZone) {
    const dt = DateTime.fromJSDate(dateObj).setZone(timeZone);
    return dt.toISO() ?? "";
  }

  return dateObj.toISOString();
};

/**
 * Format date as numeric (e.g., "01/15/2024")
 */
export const formatNumericDateWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

/**
 * Format date with weekday abbreviation (e.g., "Mon, Jan 15, 2024")
 */
export const formatDateWithWeekdayWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleDateStringWithTimezone(date, timeZone, locales, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * Format date and time in compact format (e.g., "1/15/24, 3:45 PM")
 */
export const formatCompactDateTimeWithTimezone = (
  date: Date | number | string,
  timeZone?: string,
  locales?: string | string[]
): string => {
  return toLocaleStringWithTimezone(date, timeZone, locales, {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// ============================================
// TIMEZONE-AWARE DATE MANIPULATION
// ============================================

/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone for a given Date
 * @param date - Date object to get the start of day for
 * @param timeZone - IANA timezone identifier (e.g., "America/New_York")
 * @returns UTC timestamp in milliseconds
 */
export const getStartOfDayForDateInTimezone = (date: Date, timeZone: string): number => {
  const dt = DateTime.fromJSDate(date).setZone(timeZone).startOf("day");
  return dt.toMillis();
};

/**
 * Convert a Date object to represent the same calendar date in a different timezone
 * This is useful when a date is selected in a calendar - we want to preserve the calendar date
 * but represent it in the organization's timezone
 * @param date - Date object (typically representing a date at midnight in user's local timezone)
 * @param timeZone - Target IANA timezone identifier (e.g., "America/Chicago")
 * @returns Date object representing the same calendar date at midnight in the target timezone
 */
export const convertDateToTimezone = (date: Date, timeZone: string): Date => {
  // Get the date components (year, month, day) as they appear in the target timezone
  const dt = DateTime.fromJSDate(date).setZone(timeZone);
  const year = dt.year;
  const month = dt.month;
  const day = dt.day;

  // Get the UTC timestamp for midnight of that date in the target timezone
  const timestamp = getStartOfDayInTimezone(year, month, day, timeZone);

  // Return a Date object (which will display correctly when formatted with the timezone)
  return new Date(timestamp);
};

/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone
 */
export const getStartOfDayInTimezone = (year: number, month: number, day: number, timeZone: string): number => {
  const dt = DateTime.fromObject(
    { year, month, day },
    { zone: timeZone }
  ).startOf("day");

  return dt.toMillis();
};

/**
 * Get the UTC timestamp for the end of a day (23:59:59.999) in a specific timezone
 */
export const getEndOfDayInTimezone = (year: number, month: number, day: number, timeZone: string): number => {
  const dt = DateTime.fromObject(
    { year, month, day },
    { zone: timeZone }
  ).endOf("day");

  return dt.toMillis();
};

/**
 * Get the UTC timestamp for a specific local time (hour, minute) on a date in a timezone.
 * Use this so shift times (e.g. 7am, 3pm) are interpreted in the organization timezone, not the user's local timezone.
 */
export const getTimestampAtTimeInTimezone = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string
): number => {
  const dt = DateTime.fromObject(
    { year, month, day, hour, minute },
    { zone: timeZone }
  );
  return dt.toMillis();
};
