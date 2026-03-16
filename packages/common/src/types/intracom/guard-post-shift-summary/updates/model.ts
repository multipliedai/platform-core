
export interface IntracomGuardPostShiftSummaryUpdate {
    id: string;
    userId: string;
    organizationId: string;
    description: string;
    attachments: {
        fileName: string;
        url: string;
        contentType: string;
    }[];
    createdAt: number;
    lastUpdated: number;
}

