import { v4 as uuid } from 'uuid';
import { size, isEmpty, isEqual, xorWith } from 'lodash';
import { randomBytes } from 'crypto';

export const generateRandomId = () => {
	let result = '';
	let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < 30; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const emailsForWebsite = (urlString?: string) => {
	if (!urlString) return ['test@gmail.com'];
	const url = new URL(urlString);
	const emailHost = url.hostname.split('.').slice(-2).join('.');

	return [`info@${emailHost}`];
};

export const websiteHostUrl = (urlString?: string) => {
	if (!urlString) return [''];
	const url = new URL(urlString);
	const host = url.hostname;
	return host;
};

export const generateShortRandomId = () => {
	let result = '';
	let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < 15; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const generateShortRandomNumber = () => {
	let result = '';
	let characters = '1234567890';
	let charactersLength = characters.length;
	for (let i = 0; i < 10; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

/** Character sets for temporary password (Azure AD requires: 8+ chars, upper, lower, number, symbol). */
const TEMP_PASSWORD_UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const TEMP_PASSWORD_LOWER = "abcdefghjkmnpqrstuvwxyz";
const TEMP_PASSWORD_DIGITS = "23456789";
const TEMP_PASSWORD_SYMBOLS = "!@#$%&*";

/**
 * Generates a cryptographically random temporary password meeting common policy requirements
 * (e.g. Azure AD: 8+ chars, upper, lower, number, symbol). Default length 16.
 */
export function generateTemporaryPassword(length: number = 16): string {
	const parts: string[] = [
		TEMP_PASSWORD_UPPER[randomBytes(1)[0]! % TEMP_PASSWORD_UPPER.length],
		TEMP_PASSWORD_LOWER[randomBytes(1)[0]! % TEMP_PASSWORD_LOWER.length],
		TEMP_PASSWORD_DIGITS[randomBytes(1)[0]! % TEMP_PASSWORD_DIGITS.length],
		TEMP_PASSWORD_SYMBOLS[randomBytes(1)[0]! % TEMP_PASSWORD_SYMBOLS.length],
	];
	const all = TEMP_PASSWORD_UPPER + TEMP_PASSWORD_LOWER + TEMP_PASSWORD_DIGITS + TEMP_PASSWORD_SYMBOLS;
	for (let i = parts.length; i < length; i++) {
		parts.push(all[randomBytes(1)[0]! % all.length] ?? all[0]);
	}
	for (let i = parts.length - 1; i > 0; i--) {
		const j = randomBytes(1)[0]! % (i + 1);
		[parts[i], parts[j]] = [parts[j] ?? "", parts[i] ?? ""];
	}
	return parts.join("");
}

export const cloneNumberStampedId = (oldId: string) => {
	const newId = oldId.split('-').slice(0, -1).join('-') + '-' + generateShortRandomNumber();
	return newId;
};

export const cloneName = (oldName: string) => {
	const parts = oldName.split(' - copy');
	let newId = parts[0] + ' - copy';
	if (parts.length > 1) {
		if (!isNaN(parseInt(parts[1]))) {
			let index = +parts[1].trim() + 1;
			newId += ' ' + index;
		} else {
			newId += ' 2';
		}
	}

	return newId;
};

export const shorten = (str?: string, maxLen: number = 3) => {
	if (!str) {
		return '';
	}

	if (str.length > maxLen) {
		return str.substring(0, maxLen) + '...';
	}

	return str;
};

export const getNameFromImageUrl = (url?: string) => {
	return url?.split('?')?.[0]?.split('/')?.pop()?.split('%2F')?.pop();
};

export const uniqueId = () => uuid();

/**
 * Converts a string to a URL-friendly slug
 * @param str - The string to slugify
 * @returns A slugified string (lowercase, hyphens instead of spaces, special chars removed)
 * @example
 * slugify("Hello World!") // "hello-world"
 * slugify("  Test   String  ") // "test-string"
 * slugify("Café & Bar") // "cafe-bar"
 */
export const slugify = (str: string): string => {
	if (!str) return '';
	
	return str
		.toString()
		.toLowerCase()
		.trim()
		// Replace spaces and underscores with hyphens
		.replace(/[\s_]+/g, '-')
		// Remove special characters, keep alphanumeric and hyphens
		.replace(/[^\w\-]+/g, '')
		// Replace multiple consecutive hyphens with a single hyphen
		.replace(/\-\-+/g, '-')
		// Remove hyphens from start and end
		.replace(/^-+/, '')
		.replace(/-+$/, '');
};

export const numberKey = (id: number) => String(id).padStart(9, '0');

export const sequenceId = () => {
	const start = new Date('2021-01-01');
	const now = new Date();
	const elapsed = Math.floor((now.getTime() - start.getTime()) / 1000);
	return numberKey(elapsed);
};

export const arraysEqual = (a: string[], b: string[]) => {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

export function titleUpperCase(str: string) {
	if (!str) return '';
	return str
		.replace(/_/g, ' ')
		.toLowerCase()
		.split(' ')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}

export function camelToTitleCase(string?: string) {
	if (!string) return '';
	string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
	string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
	return string.substring(0, 1).toUpperCase() + string.substring(1);
}

export function isValidHttpUrl(str: string) {
	try {
		const newUrl = new URL(str);
		return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
	} catch (err) {
		return false;
	}
}

export function onlyUnique<T>(value: T, index: number, array: T[]) {
	return array.indexOf(value) === index;
}

export function subsetEquals(subset: object, set: object) {
	if (!subset) return false;

	const keys1 = Object.keys(subset);
	if (!keys1.length) return false;

	if (!set) return false;
	for (let key of keys1) {
		if (subset[key as keyof object] !== set[key as keyof object]) {
			return false;
		}
	}

	return true;
}

export function areArraysEqual<T>(x: T[], y: T[]) {
	if (size(x) !== size(y)) return false;
	else return isEmpty(xorWith(x, y, isEqual));
}

export const initials = (name: string) => {
	let returnName = '';
	for (let i = 0; i < name?.length; i++) {
		// Add first character or character after space (but not space itself)
		if ((i === 0 && name[i] !== ' ') || (i > 0 && name[i - 1] === ' ' && name[i] !== ' ')) {
			returnName = returnName + name[i];
		}
	}
	const length = 2;

	let trimmedName = returnName.length > length ? returnName.substring(0, 2) : returnName;

	return trimmedName.toUpperCase();
};
export const createImageFromInitials = (size: number, name: string) => {
	if (name == null) return;
	name = initials(name);
	const canvas = document.createElement('canvas');
	canvas.width = canvas.height = size;
	return canvas.toDataURL();
};

export const getRandomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export function spacedTitle(value?: string) {
	if (!value) return ' ';
	const output = value.replace(/([A-Z])/g, '   $1').trim();
	return output;
}

export const isValidUrl = (urlString: string) => {
	let urlPattern = new RegExp(
		'^(https?:\\/\\/)?' + // validate protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
		'(\\#[-a-z\\d_]*)?$',
		'i',
	); // validate fragment locator

	return !!urlPattern.test(urlString);
};

export async function urlToFileObject(url: string, name: string) {
	let response = await fetch(url);
	let data = await response.blob();
	let file = new File([data], name, { lastModified: new Date().getTime() });
	return file;
}

export function isValidEmail(email: string) {
	const emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
	const isEmailValid = email?.match(emailRegex);

	if (isEmailValid) {
		return true;
	} else {
		return false;
	}
}

export const appendHttpToUrl = (url: string) => {
	if (!/^https?:\/\//i.test(url)) {
		return 'https://' + url;
	} else {
		return url;
	}
};

export const blobToBase64 = (blob: Blob) => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	return new Promise((resolve) => {
		reader.onloadend = () => {
			resolve(reader.result);
		};
	});
};

export const imageUrlToBase64 = async (url: string) => {
	const data = await fetch(url);
	const blob = await data.blob();
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			const base64data = reader.result;
			resolve(base64data);
		};
		reader.onerror = reject;
	});
};

export const imageToDataURL = async (url: string, name: string, type: string) => {
	const data = await fetch(url);
	const blob = await data.blob();
	let file = new File([blob], name, {
		type,
	});
	return file;
};

export const generateSecurePassword = (): string => {
	const upperCase = "ABCDEFGHJKMNPQRSTUVWXYZ";
	const lowerCase = "abcdefghjkmnpqrstuvwxyz";
	const numbers = "23456789";
	const specialChars = "@#$%&";
	const allChars = upperCase + lowerCase + numbers + specialChars;
	const getRandomChar = (str: string): string =>
		str[Math.floor(Math.random() * str.length)];
	let password = "";
	password += getRandomChar(upperCase);
	password += getRandomChar(lowerCase);
	password += getRandomChar(numbers);
	password += getRandomChar(specialChars);

	while (password.length < 10) {
		password += getRandomChar(allChars);
	}
	password = password.split("").sort(() => Math.random() - 0.5).join("");

	return password;
};

export function isEmailOrGroup(input: string) {
	const emailRegex = /@.*\./;

	if (emailRegex.test(input)) {
		return "email";
	} else {
		return "name";
	}
}

export function getDomainInfo(email?: string) {
	if (!email || typeof email !== "string" || !email?.includes("@")) {
		return { domain: "", isSpecificDomain: false }
	}

	const domain = email?.split("@")[1].toLowerCase()?.trim();

	const genericDomains = [
		"gmail.com",
		"yahoo.com",
		"hotmail.com",
		"outlook.com",
		"live.com",
		"aol.com"
	];

	const isSpecificDomain = !genericDomains.includes(domain);

	return { domain, isSpecificDomain };
}


export function getFileNameFromUrl(url?: string) {
	if (typeof url !== "string") {
		return url;
	}
	try {
		const urlObj = new URL(url);
		const pathname = urlObj.pathname;
		const segments = pathname.split("/");
		const fileName = segments.pop() || "";
		return fileName;
	} catch (error) {
		const segments = url?.split("/");
		let fileName = segments?.pop() || "";
		fileName = fileName.split("?")[0];
		return fileName;
	}
}


export const extractLeadingNumber = (value: string | undefined | null): number => {
	if (!value) return 0;
	const match = value.match(/^\d+/);
	return match ? parseInt(match[0], 10) : 0;
};

export function formatDateTime(input: string | number): string {
	// Regex to check if input already matches "MM/DD/YYYY hh:mm:ss AM/PM"
	const formattedDateTimeRegex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} (AM|PM)$/;

	if (typeof input === 'string' && formattedDateTimeRegex.test(input)) {
		// Already formatted correctly, return as is
		return input;
	}

	// If input contains a comma and extra numbers (like "2023-09-27T11:45:49,1695914113464"), clean it
	if (typeof input === 'string' && input.includes(',')) {
		input = input.split(',')[0];
	}

	const date = new Date(input);

	const options: Intl.DateTimeFormatOptions = {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true,
	};

	return date.toLocaleString('en-US', options).replace(',', '');
}


function isDateString(value: any): boolean {
	// Rough check: string includes '-' and ':' indicating a date-time string
	return typeof value === 'string' && /\d{4}-\d{2}-\d{2}.*\d{2}:\d{2}:\d{2}/.test(value);
}

function cleanDateString(value: string): string | number {
	// If string contains ',', take only first part (ISO date)
	if (value.includes(',')) {
		return value.split(',')[0];
	}
	return value;
}

export function formatAllDates(obj: any): any {
	if (Array.isArray(obj)) {
		return obj.map(formatAllDates);
	} else if (obj && typeof obj === 'object') {
		const newObj: any = {};
		for (const key of Object.keys(obj)) {
			const val = obj[key];
			if (isDateString(val)) {
				const cleaned = cleanDateString(val);
				newObj[key] = formatDateTime(cleaned);
			} else if (typeof val === 'number' && (key.toLowerCase().includes('date') || key.toLowerCase().includes('time'))) {
				// If number and key looks like date/time, format it as date
				newObj[key] = formatDateTime(val);
			} else if (typeof val === 'object' && val !== null) {
				newObj[key] = formatAllDates(val);
			} else {
				newObj[key] = val;
			}
		}
		return newObj;
	}
	return obj;
}



export function parseFormattedDateTime(input: string): string {
	// Match the date and time in MM/DD/YYYY hh:mm:ss AM/PM format
	const regex = /^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2}) (AM|PM)$/;
	const match = input.match(regex);

	if (!match) {
		throw new Error('Invalid date format. Expected MM/DD/YYYY hh:mm:ss AM/PM');
	}

	const [, month, day, year, hourStr, minute, second, meridian] = match;

	let hour = parseInt(hourStr, 10);

	// Convert to 24-hour format
	if (meridian === 'PM' && hour !== 12) {
		hour += 12;
	} else if (meridian === 'AM' && hour === 12) {
		hour = 0;
	}

	// Create ISO string using UTC time
	const date = new Date(
		Date.UTC(
			parseInt(year, 10),
			parseInt(month, 10) - 1,
			parseInt(day, 10),
			hour,
			parseInt(minute, 10),
			parseInt(second, 10)
		)
	);

	return date.toISOString();
}

export const monthsAgoDate = (months: number) => new Date(
	new Date().setMonth(new Date().getMonth() - months)
);

export const yearsAgoDate = (years: number) => new Date(
	new Date().setMonth(new Date().getFullYear() - years)
);

export const startOfYear = new Date(new Date().getFullYear(), 0, 1);

export const today = {
	start: new Date(new Date().setHours(0, 0, 0, 0)),
	end: new Date(new Date().setHours(23, 59, 59, 999))
};

export const daysAgoDate = (days: number) => new Date(
	new Date().setDate(new Date().getDate() - days)
);

export const isPastDue = (dateStr: string) => {
	const [month, day, year] = dateStr.split("/").map(Number);
	const dueDate = new Date(year, month - 1, day);
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	dueDate.setHours(0, 0, 0, 0);
	return dueDate < today;
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

export const MS_PER_DAY = 24 * 60 * 60 * 1000;
export const MS_PER_HOUR = 60 * 60 * 1000;
export const MS_PER_MINUTE = 60 * 1000;

/**
 * Format elapsed duration for display: minutes (< 1h), hours (1h–24h), or days (24h+).
 * e.g. "18 minutes", "1 hour", "2 hours", "1 day", "3 days"
 */
export const formatElapsedDuration = (elapsedMs: number): string => {
  const ms = Math.max(0, elapsedMs);
  const minutes = Math.floor(ms / MS_PER_MINUTE);
  const hours = Math.floor(ms / MS_PER_HOUR);
  const days = Math.floor(ms / MS_PER_DAY);
  if (days >= 1) {
    return `${days} day${days !== 1 ? "s" : ""}`;
  }
  if (hours >= 1) {
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  }
  return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
}
