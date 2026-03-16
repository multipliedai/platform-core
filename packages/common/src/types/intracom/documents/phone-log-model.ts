export interface PhoneLogEntry {
  date: number;             // Sign-out date (ISO format recommended)
  time: number;             // Sign-out time (HH:mm format)
  post: string;             // Assigned post/location
  printedName: string;      // Name of the person signing out the phone
  hasSignature: boolean;  // Whether a signature is present
  issuedBy: string;         // Person issuing the phone
  turnInDate?: number;      // Date phone was returned (ISO format)
  turnInTime?: number;      // Time phone was returned (HH:mm format)
  receivedBy?: string;      // Person who received the phone upon return
  userId?: string;
}

export interface PhoneLog {
  entries: PhoneLogEntry[];
}
