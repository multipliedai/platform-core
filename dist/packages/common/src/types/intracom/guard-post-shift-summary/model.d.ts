export interface IntracomGuardPostShiftSummary {
    id: string;
    createdAt: number;
    lastUpdated: number;
    userId?: string;
    organizationId: string;
    audios: {
        url: string;
        duration_sec: number;
        text: string;
    }[];
    shiftStartTime?: number;
    shiftEndTime?: number;
    personnels?: string[] | number;
    areasCovered?: string[];
    highlights?: string[];
    problemsEncountered?: string[];
    needMaintenances?: string[];
    issuesResolved?: string[];
    recommendationsForNextShift?: string[];
    incomingShiftSupervisor?: string;
    attachments?: {
        fileName: string;
        url: string;
        contentType: string;
    }[];
    relatedUpdates?: string[];
}
//# sourceMappingURL=model.d.ts.map