/**
 * @platform-core/mobileapp
 * React Native–specific utilities.
 * Add and re-export modules below.
 */
// export * from './deviceUtils';
// export * from './storageUtils';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { AzureEntraClaims } from './types/user';
import { DateTime } from "luxon";
import * as ReactNative from 'react-native'

// Custom UUID v4 generator
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const uniqueId = () => generateUUID();

export const generateRandomString = (length = 30) => {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
  // Filename: year_month_day_hour_minute_second.ext
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
  const randomString = generateRandomString(5);
  return `${year}_${month}_${day}_${hour}_${minute}_${second}_${milliseconds}_${randomString}${extension}`;
}

// Read a File object as text
export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

export const extractEmailFromTokens = (
  idTokenClaims: AzureEntraClaims | null,
  accessTokenClaims: any
): string => {
  // Try ID token first
  if (idTokenClaims?.email) {
    return idTokenClaims.email.toLowerCase();
  }

  // Try access token claims
  if (accessTokenClaims?.email) {
    return accessTokenClaims.email.toLowerCase();
  }

  // Try preferred_username from ID token
  if (idTokenClaims?.preferred_username && idTokenClaims.preferred_username.includes('@')) {
    return idTokenClaims.preferred_username.toLowerCase();
  }

  // Try preferred_username from access token
  if (accessTokenClaims?.preferred_username && accessTokenClaims.preferred_username.includes('@')) {
    return accessTokenClaims.preferred_username.toLowerCase();
  }

  if (accessTokenClaims?.unique_name && accessTokenClaims.unique_name.includes('@')) {
    return accessTokenClaims.unique_name.toLowerCase();
  }

  // Try upn (User Principal Name) from access token
  if (accessTokenClaims?.upn && accessTokenClaims.upn.includes('@')) {
    return accessTokenClaims.upn.toLowerCase();
  }

  console.warn('No email found in either ID token or access token claims');
  return '';
};


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
      } else if (char === ',') {
        row.push(cell.trim());
        cell = "";
      } else if (char === '\n') {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      } else if (char === '\r') {
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
  return rows.filter(r => r.some(c => c.length > 0));
}

// Normalize header names to simple keys
function normalizeHeader(h: string): string {
  return h.toLowerCase().replace(/[^a-z0-9]+/g, "").trim();
}

export const setLocalStorageItem = async (key: string, value: any) => {
  try {
    // Handle empty string case specially
    if (value === '') {
      await AsyncStorage.setItem(key, '');
    } else {
      const item = JSON.stringify({value});
      await AsyncStorage.setItem(key, item);
    }
  } catch (e) {
    console.error(`Failed to store item ${key}:`, e);
  }
};

export const getLocalStorageItem = async (key: string) => {
  try {
    const itemStr = await AsyncStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    
    // Handle empty string case
    if (itemStr === '') {
      return '';
    }
    
    // Try to parse as JSON, fallback to direct value
    try {
      const item = JSON.parse(itemStr);
      return item.value;
    } catch (parseError) {
      // If parsing fails, return the raw string
      return itemStr;
    }
  } catch (e) {
    console.error(`Failed to get item ${key}:`, e);
    return null;
  }
};

export const removeLocalStorageItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Failed to remove item ${key}:`, e);
  }
};

export function getJwtPayload(token: string) {
  try {
    // returns the decoded payload as a JS object
    return jwtDecode(token);
  } catch (e) {
    console.error('Invalid JWT', e);
    return null;
  }
}

// Get today's start and end timestamps (in milliseconds)
export const getTodayRange = () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
  return {
    start: startOfDay.getTime(),
    end: endOfDay.getTime(),
  };
};

/**
 * Checks if a URL is local (file://) or deployed (http:///https://)
 * @param url - The URL string to check
 * @returns 'local' if the URL is a local file path, 'deployed' if it's a remote URL, or null if invalid
 */
export function isLocalOrDeployedUrl(url: string): 'local' | 'deployed' | null {
  if (!url || typeof url !== 'string') {
    return null;
  }

  const trimmedUrl = url.trim().toLowerCase();

  // Check for local file URI (file://)
  if (
    trimmedUrl.startsWith('file://') || 
    trimmedUrl.startsWith('content://') || 
    trimmedUrl.startsWith('blob:') ||
    trimmedUrl.startsWith('data:') ||
    trimmedUrl.startsWith('assets-library://') ||
    trimmedUrl.startsWith('ph://') ||
    trimmedUrl.startsWith('ms-appx://') ||
    trimmedUrl.startsWith('ms-appdata://') ||
    trimmedUrl.startsWith('ms-appx-web://') ||
    trimmedUrl.startsWith('ms-appx-web-isolated://') ||
    trimmedUrl.startsWith('ms-appx-web-isolated-temp://')
  ) {
    return 'local';
  }

  // Check for deployed/remote URLs (http:// or https://)
  if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
    return 'deployed';
  }

  // If it doesn't match either pattern, return null (invalid/unrecognized)
  return null;
}

/** Asset type inferred from URL (extension or path). */
export type AssetTypeFromUrl = 'video' | 'audio' | 'image' | 'document';

const IMAGE_EXTENSIONS = new Set([
  'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'gif', 'webp', 'avif', 'apng',
  'bmp', 'tiff', 'tif', 'heif', 'heic', 'svg', 'ico', 'raw', 'cr2', 'nef', 'arw', 'dng',
]);
const VIDEO_EXTENSIONS = new Set([
  'mp4', 'mov', 'webm', 'ogv', 'm4v', 'avi', 'mkv', '3gp', '3g2', 'mpeg', 'mpg',
  'wmv', 'flv', 'f4v', 'm2v', 'mts', 'm2ts', 'vob', 'ts', 'mxf',
]);
const AUDIO_EXTENSIONS = new Set([
  'mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a', 'wma', 'weba', 'opus',
  'mid', 'midi', 'amr', 'aiff', 'aif', 'caf', 'alac', 'ac3', 'eac3', 'ape', 'ra', 'ram',
]);

/**
 * Infers asset type (video, audio, image, document) from a URL.
 * Uses the file extension from the path; unknown extensions are treated as document.
 * @param url - URL or file path string
 * @returns 'video' | 'audio' | 'image' | 'document', or null if url is invalid
 */
export function getAssetTypeFromUrl(url: string): AssetTypeFromUrl | null {
  if (url == null || typeof url !== 'string') {
    return null;
  }
  const trimmed = url.trim();
  if (trimmed.length === 0) return null;

  try {
    // Handle paths that may not be full URLs (e.g. file names or relative paths)
    let pathname = trimmed;
    if (trimmed.includes('?')) {
      pathname = trimmed.slice(0, trimmed.indexOf('?'));
    }
    if (pathname.includes('#')) {
      pathname = pathname.slice(0, pathname.indexOf('#'));
    }
    const lastSegment = pathname.split(/[/\\]/).filter(Boolean).pop();
    const ext = lastSegment?.includes('.')
      ? lastSegment.slice(lastSegment.lastIndexOf('.') + 1).toLowerCase()
      : '';

    if (ext.length === 0) return 'document';
    if (IMAGE_EXTENSIONS.has(ext)) return 'image';
    if (VIDEO_EXTENSIONS.has(ext)) return 'video';
    if (AUDIO_EXTENSIONS.has(ext)) return 'audio';
    return 'document';
  } catch {
    return null;
  }
}

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
 * Converts a slug (e.g. "pre-shift-report", "event_plan") to a normal display string.
 * Replaces hyphens and underscores with spaces and title-cases each word.
 * @param slug - Slug or identifier string
 * @returns Human-readable string, e.g. "pre-shift-report" → "Pre Shift Report"
 */
export function slugToDisplayString(slug: string): string {
  if (slug == null || typeof slug !== 'string') {
    return '';
  }
  const withSpaces = slug.trim().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (withSpaces.length === 0) return '';
  return withSpaces
    .split(' ')
    .map((word) => (word.length === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    )
    .join(' ');
}

export const truncateString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + '...';
};


