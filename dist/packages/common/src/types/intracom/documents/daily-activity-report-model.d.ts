export interface Activity {
    time: number;
    activites: string;
}
export interface IntracomDocumentDailyActivityReport {
    entries: Activity[];
    date: number;
    post: string;
    location: string;
    equipmentReceived: string;
    shiftStartTime: number;
    shiftEndTime?: number;
}
//# sourceMappingURL=daily-activity-report-model.d.ts.map