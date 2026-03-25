export type PlanAccess = "public" | "staff" | "vip" | "restricted" | "unknown";
export type PlanPointType = "entry" | "exit" | "door" | "dock" | "other";
export type PlanItemType = "room" | "zone" | "stage" | "seating" | "table" | "booth" | "tech" | "storage" | "service" | "other";
export interface PlanHeader {
    venue?: string;
    eventName?: string;
    spaceName?: string;
    showDates?: string[];
}
export interface PlanItem {
    id: string;
    label: string;
    type?: PlanItemType;
    access?: PlanAccess;
    notes?: string;
}
export interface PlanPoint {
    id: string;
    label: string;
    type?: PlanPointType;
    access?: PlanAccess;
}
export interface PlanCounts {
    chairs?: number;
    tables?: number;
    seats?: number;
    risers?: number;
}
export interface IntracomDocumentEventFloorPlan {
    header?: PlanHeader;
    items: PlanItem[];
    points?: PlanPoint[];
    counts?: PlanCounts;
    rawLabels?: string[];
}
//# sourceMappingURL=event-floor-plan-model.d.ts.map