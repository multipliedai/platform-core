export interface PhoneLogEntry {
    date: number;
    time: number;
    post: string;
    printedName: string;
    hasSignature: boolean;
    issuedBy: string;
    turnInDate?: number;
    turnInTime?: number;
    receivedBy?: string;
    userId?: string;
}
export interface PhoneLog {
    entries: PhoneLogEntry[];
}
//# sourceMappingURL=phone-log-model.d.ts.map