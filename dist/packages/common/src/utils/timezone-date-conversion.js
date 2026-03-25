"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestampAtTimeInTimezone = exports.getEndOfDayInTimezone = exports.getStartOfDayInTimezone = exports.convertDateToTimezone = exports.getStartOfDayForDateInTimezone = exports.formatCompactDateTimeWithTimezone = exports.formatDateWithWeekdayWithTimezone = exports.formatNumericDateWithTimezone = exports.formatISOWithTimezone = exports.format24HourTimeWithSecondsWithTimezone = exports.format24HourTimeWithTimezone = exports.formatTimeWithSecondsWithTimezone = exports.formatWeekdayDateWithTimezone = exports.formatMonthYearWithTimezone = exports.formatFullDateTimeWithTimezone = exports.formatShortDateWithTimezone = exports.formatLongDateWithTimezone = exports.toLocaleTimeStringWithTimezone = exports.toLocaleDateStringWithTimezone = exports.toLocaleStringWithTimezone = exports.formatRelativeDateWithTimezone = exports.formatCompactDateWithTimezone = exports.formatTimeOnlyWithTimezone = exports.formatDateOnlyWithTimezone = exports.formatDateWithTimezone = void 0;
const luxon_1 = require("luxon");
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
const formatDateWithTimezone = (date, timeZone, options) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const defaultOptions = {
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
exports.formatDateWithTimezone = formatDateWithTimezone;
/**
 * Format date only (no time) with optional timezone support
 */
const formatDateOnlyWithTimezone = (date, timeZone) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const options = {
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
exports.formatDateOnlyWithTimezone = formatDateOnlyWithTimezone;
/**
 * Format time only with optional timezone support
 */
const formatTimeOnlyWithTimezone = (date, timeZone) => {
    return (0, exports.formatDateWithTimezone)(date, timeZone, {
        hour: "2-digit",
        minute: "2-digit",
    });
};
exports.formatTimeOnlyWithTimezone = formatTimeOnlyWithTimezone;
/**
 * Format date for display in tables/lists (compact format)
 */
const formatCompactDateWithTimezone = (date, timeZone) => {
    return (0, exports.formatDateWithTimezone)(date, timeZone, {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
};
exports.formatCompactDateWithTimezone = formatCompactDateWithTimezone;
/**
 * Format relative date (Today, Yesterday, or full date) with optional timezone
 */
const formatRelativeDateWithTimezone = (date, timeZone) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const now = new Date();
    // Get dates in the target timezone for comparison
    const options = {
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
    const timeStr = (0, exports.formatTimeOnlyWithTimezone)(dateObj, timeZone);
    if (dateStr === todayStr) {
        return `Today ${timeStr}`;
    }
    else if (dateStr === yesterdayStr) {
        return `Yesterday ${timeStr}`;
    }
    else {
        return (0, exports.formatDateWithTimezone)(dateObj, timeZone);
    }
};
exports.formatRelativeDateWithTimezone = formatRelativeDateWithTimezone;
// ============================================
// NATIVE JAVASCRIPT METHOD EQUIVALENTS WITH TIMEZONE
// ============================================
/**
 * Equivalent to Date.toLocaleString() but with timezone support
 * Formats date and time according to locale conventions
 */
const toLocaleStringWithTimezone = (date, timeZone, locales, options) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const formatOptions = {
        ...options,
        ...(timeZone && { timeZone }),
    };
    return dateObj.toLocaleString(locales, formatOptions);
};
exports.toLocaleStringWithTimezone = toLocaleStringWithTimezone;
/**
 * Equivalent to Date.toLocaleDateString() but with timezone support
 * Formats date only (no time) according to locale conventions
 */
const toLocaleDateStringWithTimezone = (date, timeZone, locales, options) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const formatOptions = {
        ...options,
        ...(timeZone && { timeZone }),
    };
    return dateObj.toLocaleDateString(locales, formatOptions);
};
exports.toLocaleDateStringWithTimezone = toLocaleDateStringWithTimezone;
/**
 * Equivalent to Date.toLocaleTimeString() but with timezone support
 * Formats time only (no date) according to locale conventions
 */
const toLocaleTimeStringWithTimezone = (date, timeZone, locales, options) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    const formatOptions = {
        ...options,
        ...(timeZone && { timeZone }),
    };
    return dateObj.toLocaleTimeString(locales, formatOptions);
};
exports.toLocaleTimeStringWithTimezone = toLocaleTimeStringWithTimezone;
// ============================================
// ADDITIONAL COMMON DATE FORMATS
// ============================================
/**
 * Format date in long format (e.g., "Monday, January 15, 2024")
 */
const formatLongDateWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
exports.formatLongDateWithTimezone = formatLongDateWithTimezone;
/**
 * Format date in short format (e.g., "1/15/24")
 */
const formatShortDateWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
    });
};
exports.formatShortDateWithTimezone = formatShortDateWithTimezone;
/**
 * Format full date and time (e.g., "Monday, January 15, 2024 at 3:45 PM")
 */
const formatFullDateTimeWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleStringWithTimezone)(date, timeZone, locales, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
};
exports.formatFullDateTimeWithTimezone = formatFullDateTimeWithTimezone;
/**
 * Format month and year only (e.g., "January 2024")
 */
const formatMonthYearWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        year: "numeric",
        month: "long",
    });
};
exports.formatMonthYearWithTimezone = formatMonthYearWithTimezone;
/**
 * Format weekday and date (e.g., "Monday, Jan 15")
 */
const formatWeekdayDateWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });
};
exports.formatWeekdayDateWithTimezone = formatWeekdayDateWithTimezone;
/**
 * Format time with seconds (e.g., "3:45:30 PM")
 */
const formatTimeWithSecondsWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleTimeStringWithTimezone)(date, timeZone, locales, {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
};
exports.formatTimeWithSecondsWithTimezone = formatTimeWithSecondsWithTimezone;
/**
 * Format 24-hour time (e.g., "15:45")
 */
const format24HourTimeWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleTimeStringWithTimezone)(date, timeZone, locales, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
};
exports.format24HourTimeWithTimezone = format24HourTimeWithTimezone;
/**
 * Format 24-hour time with seconds (e.g., "15:45:30")
 */
const format24HourTimeWithSecondsWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleTimeStringWithTimezone)(date, timeZone, locales, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
};
exports.format24HourTimeWithSecondsWithTimezone = format24HourTimeWithSecondsWithTimezone;
/**
 * Format ISO date string with timezone offset (e.g., "2024-01-15T15:45:30-05:00")
 */
const formatISOWithTimezone = (date, timeZone) => {
    var _a;
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime()))
        return "";
    if (timeZone) {
        const dt = luxon_1.DateTime.fromJSDate(dateObj).setZone(timeZone);
        return (_a = dt.toISO()) !== null && _a !== void 0 ? _a : "";
    }
    return dateObj.toISOString();
};
exports.formatISOWithTimezone = formatISOWithTimezone;
/**
 * Format date as numeric (e.g., "01/15/2024")
 */
const formatNumericDateWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};
exports.formatNumericDateWithTimezone = formatNumericDateWithTimezone;
/**
 * Format date with weekday abbreviation (e.g., "Mon, Jan 15, 2024")
 */
const formatDateWithWeekdayWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleDateStringWithTimezone)(date, timeZone, locales, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};
exports.formatDateWithWeekdayWithTimezone = formatDateWithWeekdayWithTimezone;
/**
 * Format date and time in compact format (e.g., "1/15/24, 3:45 PM")
 */
const formatCompactDateTimeWithTimezone = (date, timeZone, locales) => {
    return (0, exports.toLocaleStringWithTimezone)(date, timeZone, locales, {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
};
exports.formatCompactDateTimeWithTimezone = formatCompactDateTimeWithTimezone;
// ============================================
// TIMEZONE-AWARE DATE MANIPULATION
// ============================================
/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone for a given Date
 * @param date - Date object to get the start of day for
 * @param timeZone - IANA timezone identifier (e.g., "America/New_York")
 * @returns UTC timestamp in milliseconds
 */
const getStartOfDayForDateInTimezone = (date, timeZone) => {
    const dt = luxon_1.DateTime.fromJSDate(date).setZone(timeZone).startOf("day");
    return dt.toMillis();
};
exports.getStartOfDayForDateInTimezone = getStartOfDayForDateInTimezone;
/**
 * Convert a Date object to represent the same calendar date in a different timezone
 * This is useful when a date is selected in a calendar - we want to preserve the calendar date
 * but represent it in the organization's timezone
 * @param date - Date object (typically representing a date at midnight in user's local timezone)
 * @param timeZone - Target IANA timezone identifier (e.g., "America/Chicago")
 * @returns Date object representing the same calendar date at midnight in the target timezone
 */
const convertDateToTimezone = (date, timeZone) => {
    // Get the date components (year, month, day) as they appear in the target timezone
    const dt = luxon_1.DateTime.fromJSDate(date).setZone(timeZone);
    const year = dt.year;
    const month = dt.month;
    const day = dt.day;
    // Get the UTC timestamp for midnight of that date in the target timezone
    const timestamp = (0, exports.getStartOfDayInTimezone)(year, month, day, timeZone);
    // Return a Date object (which will display correctly when formatted with the timezone)
    return new Date(timestamp);
};
exports.convertDateToTimezone = convertDateToTimezone;
/**
 * Get the UTC timestamp for the start of a day (00:00:00) in a specific timezone
 */
const getStartOfDayInTimezone = (year, month, day, timeZone) => {
    const dt = luxon_1.DateTime.fromObject({ year, month, day }, { zone: timeZone }).startOf("day");
    return dt.toMillis();
};
exports.getStartOfDayInTimezone = getStartOfDayInTimezone;
/**
 * Get the UTC timestamp for the end of a day (23:59:59.999) in a specific timezone
 */
const getEndOfDayInTimezone = (year, month, day, timeZone) => {
    const dt = luxon_1.DateTime.fromObject({ year, month, day }, { zone: timeZone }).endOf("day");
    return dt.toMillis();
};
exports.getEndOfDayInTimezone = getEndOfDayInTimezone;
/**
 * Get the UTC timestamp for a specific local time (hour, minute) on a date in a timezone.
 * Use this so shift times (e.g. 7am, 3pm) are interpreted in the organization timezone, not the user's local timezone.
 */
const getTimestampAtTimeInTimezone = (year, month, day, hour, minute, timeZone) => {
    const dt = luxon_1.DateTime.fromObject({ year, month, day, hour, minute }, { zone: timeZone });
    return dt.toMillis();
};
exports.getTimestampAtTimeInTimezone = getTimestampAtTimeInTimezone;
//# sourceMappingURL=timezone-date-conversion.js.map