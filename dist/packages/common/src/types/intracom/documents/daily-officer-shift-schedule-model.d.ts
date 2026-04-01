/** Common time range in 24h HHmm format used by the sheet (e.g., "0500", "1530") */
export type HHmm = `${number}${number}${number}${number}`;
/** Range like "0500-1530" */
export interface TimeRange {
    start: HHmm;
    end: HHmm;
}
/** How a post is staffed for a given shift */
export type CoverageStatus = "OPEN" | "CLOSED" | "STAFFED" | "UNSPECIFIED";
/** One shift definition from the header */
export interface ShiftDefinition {
    /** e.g. "1st", "2nd", "3rd" */
    label: string;
    /** Optional if not present in header */
    window?: TimeRange;
}
/** Coverage details for a post for a particular shift */
export interface ShiftCoverage {
    /** Match ShiftDefinition.label */
    shiftLabel: string;
    /** Officer name if assigned (e.g., "J. Merlan") */
    officerName?: string;
    /** OPEN/CLOSED/STAFFED/etc */
    status: CoverageStatus;
    /**
     * Time range(s) shown under the post for that shift.
     * Some cells may contain one range; others may be empty or "24 hours".
     */
    timeRanges?: TimeRange[];
    /**
     * Things like:
     * - "24 hours"
     * - "Event Based"
     * - "(0700 - 1600 Mon. - Fri.)"
     */
    annotation?: string;
    /** Normalized day restriction if extractable */
    dayConstraint?: string;
}
/**
 * A post/location line item like "S6", "SOC", "North Garage", "Mailroom PT", "Turnstile Polk St", etc.
 */
export interface PostAssignment {
    /** Human-readable name as on the sheet (e.g. "S6", "Dock Marshall", "SOC / Lost and Found") */
    postName: string;
    /** Optional grouping/area if you decide to infer (e.g., "Garage", "Gates") */
    category?: string;
    /** Optional extra label that sometimes appears in parentheses below the post name */
    postAnnotation?: string;
    /**
     * Coverage by shift. For posts that don’t vary by shift, you can still store one entry
     * (e.g., shiftLabel = "ALL") or fill 1st/2nd/3rd similarly.
     */
    coverages: ShiftCoverage[];
    /**
     * Raw text from the sheet block for traceability/debugging.
     * Highly recommended during extraction to avoid losing info.
     */
    rawText?: string;
}
/** Bottom-of-sheet items that don’t fit the main grid cleanly */
export interface ScheduleFooter {
    /** e.g. "Notes/Comments:" text block */
    notes?: string;
    /**
     * Some sheets have extra one-off assignments near the bottom like:
     * "S4: J. Jones ... AR 2: E. Ramirez"
     */
    additionalAssignments?: string[];
}
/** Final extracted object for one sheet/day */
export interface IntracomDocumentDailyOfficerShiftSchedule {
    /** Date from header; store ISO for consistency */
    date: number;
    /** The shift definitions from the header */
    shifts: ShiftDefinition[];
    /** All posts/locations found in the body */
    posts: PostAssignment[];
    /** Notes / trailing info */
    footer?: ScheduleFooter;
    /**
     * Source metadata to help with auditing
     * (sheet name, workbook filename, parser version, etc.)
     */
    meta?: {
        workbookName?: string;
        sheetName?: string;
        extractedAt?: number;
        parserVersion?: string;
    };
}
//# sourceMappingURL=daily-officer-shift-schedule-model.d.ts.map