export declare const uniqueId: () => string;
export declare const onlyUnique: <T>(value: T, index: number, array: T[]) => boolean;
export declare const generateRandomString: (length?: number) => string;
export declare function generateFilename(blobType: string): string;
export declare function generateGreetings(): "Good Morning" | "Good Afternoon" | "Good Evening" | "Good Night" | "Hello";
export declare function parseCsvText(csvText: string): string[][];
export declare function normalizeHeader(h: string): string;
export declare const areArrayEqual: <T>(arr1: T[], arr2: T[]) => boolean;
export declare const areObjectsEqual: (obj1: any, obj2: any) => boolean;
export declare function toTitleCase(str?: string): string;
export declare function toTitleCaseFromKebab(str?: string): string;
export declare function formatFileSize(bytes: number): string;
export declare function formatDate(dateString: string): string;
export declare function getFileCategory(mimeType: string): "image" | "video" | "audio" | "pdf" | "doc" | "other";
export declare function truncateDescription(text: string | null | undefined, maxLength?: number, addEllipsis?: boolean): string;
export declare function truncateByWords(text: string | null | undefined, maxWords?: number, addEllipsis?: boolean): string;
export declare const isSameDate: (date1: number | Date, date2: Date) => boolean;
export declare const getFileTypeFromName: (fileName: string) => string;
export declare const getFileTypeFromUrl: (url: string) => string;
export declare function getFileNameFromUrl(url: string): string;
export declare const isValidEmail: (email: string) => boolean;
export declare const getAttachmentType: (contentType: string) => "image" | "video" | "audio" | "application";
export declare const formatMessageTimestamp: (date: Date | number | string, timeZone?: string) => string;
export declare const getLastNHoursRange: (hours: number, timeZone?: string) => {
    start: number;
    end: number;
};
export declare const getLastNDaysRange: (days: number, timeZone?: string) => {
    start: number;
    end: number;
};
/**
 * Takes a date and returns a new date with the date part from the input
 * and the current time (hours, minutes, seconds, milliseconds) from now.
 *
 * @param date - Date object, timestamp (ms), or ISO string
 * @returns New Date object with input date and current time
 *
 * @example
 * // If today is 2025-01-20 15:30:45 and you pass 2025-01-15
 * // Returns: 2025-01-15 15:30:45
 */
export declare const getCurrentTimeWithDate: (date: Date | number | string) => number;
//# sourceMappingURL=util.d.ts.map