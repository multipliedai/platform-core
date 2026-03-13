/**
 * @platform-core/common
 * Shared types, schemas, models, and validation.
 * Safe for webapp and mobileapp (no DOM/localStorage).
 * Browser-only utils (localStorage, FileReader) live in @platform-core/webapp.
 */
// export * from './types';
// export * from './schemas';
import { v4 as uuid } from "uuid";
import { isEqual } from "lodash";
import moment from "moment";
import { toLocaleStringWithTimezone, toLocaleTimeStringWithTimezone, toLocaleDateStringWithTimezone, getStartOfDayInTimezone, getEndOfDayInTimezone } from "./timezone-date-conversion";
import { DateTime } from "luxon";

// Custom UUID v4 generator
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const uniqueId = () => generateUUID();

export const onlyUnique = <T>(value: T, index: number, array: T[]) => {
  return array.indexOf(value) === index;
};

export function generateFilename(blobType: string) {
  let extension;

  switch (blobType) {
    // Images
    case 'image/jpeg':
      extension = '.jpg';
      break;
    case 'image/png':
      extension = '.png';
      break;
    case 'image/gif':
      extension = '.gif';
      break;
    case 'image/bmp':
      extension = '.bmp';
      break;
    case 'image/tiff':
      extension = '.tiff';
      break;
    case 'image/webp':
      extension = '.webp';
      break;
    case "image/heif":
      extension = ".heif";
      break;
    case "image/heic":
      extension = ".heic";
      break;
    // Videos
    case 'video/mp4':
      extension = '.mp4';
      break;
    case 'video/quicktime':
      extension = '.mov';
      break;
    case 'video/webm':
      extension = '.webm';
      break;
    case 'video/ogg':
      extension = '.ogv';
      break;
    // Audio
    case 'audio/mpeg':
      extension = '.mp3';
      break;
    case 'audio/wav':
      extension = '.wav';
      break;
    case 'audio/webm':
      extension = '.webm';
      break;
    case 'audio/webm;codecs=opus':
      extension = '.webm';
      break;
    case 'audio/ogg':
      extension = '.ogg';
      break;
    case 'audio/flac':
      extension = '.flac';
      break;
    case 'audio/aac':
      extension = '.aac';
      break;
    case 'audio/x-m4a':
    case 'audio/m4a':
      extension = '.m4a';
      break;
    case 'audio/x-aiff':
      extension = '.aiff';
      break;
    case 'audio/x-wav':
      extension = '.wav';
      break;
    // Documents
    case 'application/pdf':
      extension = '.pdf';
      break;
    case 'application/msword':
      extension = '.docx';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      extension = '.xlsx';
      break;
    case 'application/vnd.ms-excel':
      extension = '.xls';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      extension = '.pptx';
      break;
    case 'application/vnd.ms-powerpoint':
      extension = '.ppt';
      break;
    case 'text/plain':
      extension = '.txt';
      break;
    case 'text/csv':
      extension = '.csv';
      break;
    // Web content
    case 'text/html':
      extension = '.html';
      break;
    case 'application/xhtml+xml':
      extension = '.xhtml';
      break;
    // Archives
    case 'application/zip':
      extension = '.zip';
      break;
    case 'application/x-gzip':
      extension = '.gz';
      break;
    case 'application/x-bzip2':
      extension = '.bz2';
      break;
    // Add more cases for other file types as needed
    default:
      extension = '.dat'; // Default extension if type is unknown
      break;
  }
  // Generate a unique filename
  const uniqueFilename = new Date().getTime() + uniqueId() + extension;

  return uniqueFilename;
}

export function generateGreetings() {
  let currentHour = Number(moment().format("HH"));

  if (currentHour >= 3 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Good Evening";
  } else if (currentHour >= 20 || currentHour < 3) {
    return "Good Night";
  } else {
    return "Hello";
  }
}

// Minimal CSV parser that supports quoted fields and commas inside quotes
export function parseCsvText(csvText: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const next = csvText[i + 1];
    if (inQuotes) {
      if (char === '"' && next === '"') {
        cell += '"';
        i++; // skip escaped quote
      } else if (char === '"') {
        inQuotes = false;
      } else {
        cell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(cell.trim());
        cell = "";
      } else if (char === "\n") {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      } else if (char === "\r") {
        // ignore
      } else {
        cell += char;
      }
    }
  }
  // flush last cell
  if (cell.length > 0 || inQuotes || row.length > 0) {
    row.push(cell.trim());
  }
  if (row.length > 0) rows.push(row);
  // filter empty trailing rows
  return rows.filter((r) => r.some((c) => c.length > 0));
}

// Normalize header names to simple keys
export function normalizeHeader(h: string): string {
  return h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

// Compare two arrays for equality using lodash
export const areArrayEqual = <T>(arr1: T[], arr2: T[]): boolean => {
  return isEqual(arr1, arr2);
};

// Deep comparison for objects using lodash
export const areObjectsEqual = (obj1: any, obj2: any): boolean => {
  return isEqual(obj1, obj2);
};

export function toTitleCase(str = "") {
  return str
    .replace(/([A-Z])/g, " $1") // Split camelCase
    .replace(/[-\s_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function toTitleCaseFromKebab(str = "") {
  return str
    .toLowerCase()
    .split(/[-\s_]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getFileCategory(
  mimeType: string
): "image" | "video" | "audio" | "pdf" | "doc" | "other" {
  if (!mimeType) return "other";

  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";

  if (mimeType === "application/pdf") return "pdf";

  if (
    mimeType === "application/msword" ||
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return "doc";
  }

  return "other";
}

export function truncateDescription(
  text: string | null | undefined,
  maxLength: number = 100,
  addEllipsis: boolean = true
): string {
  if (!text) return "";

  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  return addEllipsis ? `${truncated}...` : truncated;
}

export function truncateByWords(
  text: string | null | undefined,
  maxWords: number = 20,
  addEllipsis: boolean = true
): string {
  if (!text) return "";

  const words = text.trim().split(/\s+/);

  if (words.length <= maxWords) return text;

  const truncated = words.slice(0, maxWords).join(" ");
  return addEllipsis ? `${truncated}...` : truncated;
}

export const isSameDate = (date1: number | Date, date2: Date) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
};

export const getFileTypeFromName = (fileName: string): string => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    // Images
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'bmp':
    case 'webp':
    case 'svg':
    case 'tiff':
    case 'tif':
    case 'heif':
    case 'heic':
    case 'ico':
    case 'raw':
    case 'cr2':
    case 'nef':
    case 'orf':
    case 'sr2':
      return 'image';

    // Videos
    case 'mp4':
    case 'avi':
    case 'mov':
    case 'wmv':
    case 'flv':
    case 'webm':
    case 'mkv':
    case 'm4v':
    case '3gp':
    case 'ogv':
    case 'mts':
    case 'm2ts':
    case 'vob':
    case 'asf':
    case 'rm':
    case 'rmvb':
    case 'divx':
    case 'xvid':
      return 'video';

    // Audio
    case 'mp3':
    case 'wav':
    case 'ogg':
    case 'aac':
    case 'flac':
    case 'm4a':
    case 'wma':
    case 'opus':
    case 'aiff':
    case 'au':
    case 'ra':
    case 'amr':
    case '3ga':
    case 'mka':
    case 'oga':
      return 'audio';

    // Documents
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'xls':
    case 'xlsx':
    case 'ppt':
    case 'pptx':
    case 'odt':
    case 'ods':
    case 'odp':
    case 'rtf':
    case 'txt':
    case 'csv':
    case 'html':
    case 'htm':
    case 'xml':
    case 'json':
    case 'yaml':
    case 'yml':
    case 'md':
    case 'markdown':
      return 'document';

    // Archives
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
    case 'bz2':
    case 'xz':
    case 'cab':
    case 'iso':
    case 'dmg':
    case 'pkg':
    case 'deb':
    case 'rpm':
      return 'archive';

    // Code files
    case 'js':
    case 'ts':
    case 'jsx':
    case 'tsx':
    case 'py':
    case 'java':
    case 'cpp':
    case 'c':
    case 'cs':
    case 'php':
    case 'rb':
    case 'go':
    case 'rs':
    case 'swift':
    case 'kt':
    case 'scala':
    case 'sh':
    case 'bat':
    case 'ps1':
    case 'sql':
    case 'css':
    case 'scss':
    case 'sass':
    case 'less':
    case 'vue':
    case 'svelte':
      return 'code';

    // Fonts
    case 'ttf':
    case 'otf':
    case 'woff':
    case 'woff2':
    case 'eot':
      return 'font';

    // 3D Models
    case 'obj':
    case 'fbx':
    case 'dae':
    case '3ds':
    case 'blend':
    case 'max':
    case 'ma':
    case 'mb':
    case 'x3d':
    case 'stl':
      return '3d';

    // CAD files
    case 'dwg':
    case 'dxf':
    case 'step':
    case 'stp':
    case 'iges':
    case 'igs':
      return 'cad';

    // Database files
    case 'db':
    case 'sqlite':
    case 'sqlite3':
    case 'mdb':
    case 'accdb':
      return 'database';

    // Executables
    case 'exe':
    case 'msi':
    case 'app':
      return 'executable';

    // Configuration files
    case 'ini':
    case 'cfg':
    case 'conf':
    case 'config':
    case 'properties':
    case 'env':
    case 'gitignore':
    case 'dockerfile':
      return 'config';

    default:
      return 'document';
  }
};

// Get file type from URL - tries to extract extension from URL path
export const getFileTypeFromUrl = (url: string): string => {
  try {
    // Remove query parameters and fragments
    const cleanUrl = url.split('?')[0].split('#')[0];

    // Extract filename from URL path
    const pathParts = cleanUrl.split('/');
    const filename = pathParts[pathParts.length - 1];

    // If no filename or no extension, try to detect from URL patterns
    if (!filename || !filename.includes('.')) {
      // Check for common image URL patterns
      if (url.includes('/image/') || url.includes('/img/') || url.includes('/photo/')) {
        return 'image';
      }
      // Check for common video URL patterns
      if (url.includes('/video/') || url.includes('/media/')) {
        return 'video';
      }
      // Check for common audio URL patterns
      if (url.includes('/audio/') || url.includes('/sound/')) {
        return 'audio';
      }
      // Default to document if we can't determine
      return 'document';
    }

    // Use the existing function to determine type from filename
    return getFileTypeFromName(filename);
  } catch (error) {
    console.error('Error parsing URL for file type:', error);
    return 'document';
  }
};

export function getFileNameFromUrl(url: string): string {
  const cleanUrl = url.split('?')[0].split('#')[0];
  const pathParts = cleanUrl.split('/');
  const filename = pathParts[pathParts.length - 1];
  return filename;
}

// Email validation regex
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Determine attachment type from content type
export const getAttachmentType = (contentType: string): "image" | "video" | "audio" | "application" => {
  if (contentType.startsWith("image")) return "image";
  if (contentType.startsWith("video")) return "video";
  if (contentType.startsWith("audio")) return "audio";
  if (contentType.startsWith("application")) return "application";
  return "application";
};

// Helper function to format date and time intelligently
export  const formatMessageTimestamp = (date: Date | number | string, timeZone?: string): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  const now = Date.now();
  const dateTimestamp = typeof date === 'number' ? date : (typeof date === 'string' ? new Date(date).getTime() : date.getTime());
  
  // Get dates in the specified timezone for comparison
  const nowDate = new Date(now);
  const messageDate = new Date(dateTimestamp);
  
  // Use timezone-aware date formatting to get the date parts
  const nowDateStr = toLocaleDateStringWithTimezone(now, timeZone, undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const messageDateStr = toLocaleDateStringWithTimezone(dateTimestamp, timeZone, undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  
  // Calculate yesterday's date string
  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayDateStr = toLocaleDateStringWithTimezone(yesterdayDate.getTime(), timeZone, undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const timeStr = toLocaleTimeStringWithTimezone(dateTimestamp, timeZone, undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (messageDateStr === nowDateStr) {
    return `Today ${timeStr}`;
  } else if (messageDateStr === yesterdayDateStr) {
    return `Yesterday ${timeStr}`;
  } else {
    const dateStr = toLocaleDateStringWithTimezone(dateTimestamp, timeZone, undefined, {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    return `${dateStr} ${timeStr}`;
  }
};

export const getLastNHoursRange = (hours: number, timeZone?: string) => {
  const now = Date.now();
  const start = now - (hours * 60 * 60 * 1000);
  return { start, end: now };
};

export const getLastNDaysRange = (days: number, timeZone?: string) => {
  if (timeZone) {
    // Get current DateTime in the target timezone
    const now = DateTime.now().setZone(timeZone);
    
    // Calculate target date (N days ago) and get start of that day
    const targetDate = now.minus({ days }).startOf("day");
    const start = targetDate.toMillis();
    
    // Get end of today in the timezone
    const end = now.endOf("day").toMillis();
    
    return { start, end };
  }
  
  // Fallback to local timezone (original behavior)
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - days, 0, 0, 0, 0);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  return { start: start.getTime(), end: end.getTime() };
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
export const getCurrentTimeWithDate = (date: Date | number | string) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided");
  }
  
  const currentTime = new Date(); // Get current time
  
  // Create new date with input date's year, month, day
  // and current time's hours, minutes, seconds, milliseconds
  const result = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds(),
    currentTime.getMilliseconds()
  );
  
  return result.getTime();
};