/**
 * Base64 decoding helpers for Node.js services.
 * Uses Node's Buffer API, so this must stay in @platform-core/services
 * and is not safe for web or React Native.
 */

/**
 * Decode a Base64-encoded JSON string, if the input looks like Base64.
 * If the input is not a Base64 string, it is returned unchanged.
 */
export const decodeBase64IfNeeded = (input: unknown): unknown => {
  if (typeof input === "string" && isBase64Encoded(input)) {
    // Keep logging minimal and generic so this utility can be reused
    // without requiring a specific logger implementation.
    console.info("Base64Decoder: Decoding Base64 input");
    return decodeBase64(input);
  }
  return input;
};

/**
 * Decode a Base64-encoded JSON string to an object.
 * Throws if decoding or JSON parsing fails.
 */
export const decodeBase64 = (encodedData: string): unknown => {
  try {
    const buffer = Buffer.from(encodedData, "base64");
    const jsonString = buffer.toString("utf8");
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Base64 decoding failed:", error);
    throw new Error("Failed to decode Base64 data");
  }
};

/**
 * Heuristically determine whether a string is valid Base64.
 */
export const isBase64Encoded = (str: string): boolean => {
  if (!str || typeof str !== "string") {
    return false;
  }

  // Base64 strings only contain A-Z, a-z, 0-9, +, /, and = (for padding)
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  if (!base64Regex.test(str)) {
    return false;
  }

  try {
    const buffer = Buffer.from(str, "base64");
    const reencoded = buffer.toString("base64");
    return reencoded === str;
  } catch {
    return false;
  }
};

