import { AzureEntraClaims } from '../types/user';
export declare const uniqueId: () => string;
export declare const generateRandomString: (length?: number) => string;
export declare function generateFilename(blobType: string): string;
export declare function readFileAsText(file: File): Promise<string>;
export declare const extractEmailFromTokens: (idTokenClaims: AzureEntraClaims | null, accessTokenClaims: any) => string;
export declare function parseCsvText(csvText: string): string[][];
export declare const setLocalStorageItem: (key: string, value: any) => Promise<void>;
export declare const getLocalStorageItem: (key: string) => Promise<any>;
export declare const removeLocalStorageItem: (key: string) => Promise<void>;
export declare function getJwtPayload(token: string): import("jwt-decode").JwtPayload | null;
export declare const getTodayRange: () => {
    start: number;
    end: number;
};
/**
 * Checks if a URL is local (file://) or deployed (http:///https://)
 * @param url - The URL string to check
 * @returns 'local' if the URL is a local file path, 'deployed' if it's a remote URL, or null if invalid
 */
export declare function isLocalOrDeployedUrl(url: string): 'local' | 'deployed' | null;
/** Asset type inferred from URL (extension or path). */
export type AssetTypeFromUrl = 'video' | 'audio' | 'image' | 'document';
/**
 * Infers asset type (video, audio, image, document) from a URL.
 * Uses the file extension from the path; unknown extensions are treated as document.
 * @param url - URL or file path string
 * @returns 'video' | 'audio' | 'image' | 'document', or null if url is invalid
 */
export declare function getAssetTypeFromUrl(url: string): AssetTypeFromUrl | null;
export declare const getLastNHoursRange: (hours: number, timeZone?: string) => {
    start: number;
    end: number;
};
export declare const getLastNDaysRange: (days: number, timeZone?: string) => {
    start: number;
    end: number;
};
/**
 * Converts a slug (e.g. "pre-shift-report", "event_plan") to a normal display string.
 * Replaces hyphens and underscores with spaces and title-cases each word.
 * @param slug - Slug or identifier string
 * @returns Human-readable string, e.g. "pre-shift-report" → "Pre Shift Report"
 */
export declare function slugToDisplayString(slug: string): string;
export declare const truncateString: (str: string, maxLength: number) => string;
//# sourceMappingURL=util.d.ts.map