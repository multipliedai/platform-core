export interface RadioLogEntry {
  date: number;            // Sign-out date (ISO format preferred)
  time: number;            // Sign-out time (HH:mm format)
  radioNumber: string;     // Radio ID or number
  printedName: string;     // Name of the person signing out
  hasSignature: boolean;  // Whether a signature is present
  issuedBy: string;        // Person issuing the radio
  turnInDate?: number;     // Date radio was returned (ISO format)
  turnInTime?: number;     // Time radio was returned (HH:mm format)
  receivedBy?: string;     // Person who received the radio upon return
  userId?: string;
}

export interface RadioLog {
  entries: RadioLogEntry[];
}
