export interface RadioLogEntry {
    date: number;
    time: number;
    radioNumber: string;
    printedName: string;
    hasSignature: boolean;
    issuedBy: string;
    turnInDate?: number;
    turnInTime?: number;
    receivedBy?: string;
    userId?: string;
}
export interface RadioLog {
    entries: RadioLogEntry[];
}
//# sourceMappingURL=radio-log-modal.d.ts.map