/**
 * @platform-core/common
 * Shared types, schemas, models, and validation.
 * Add and re-export modules below.
 */
// export * from './types';
// export * from './schemas';
import { v4 as uuid } from "uuid";
export const uniqueId = () => uuid();

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
