/** Top-level document extracted from the PDF */
export interface IntracomDocumentSecurityPostOrder {
    documentTitle: string;
    description: string;
    siteName: string;
    postName: string;
    effectiveDate?: number;
    location: LocationInfo;
    contacts: Contacts;
    postDetails: PostDetails;
    directives: string[];
    breakCoverage?: BreakCoverage;
    responsibilities?: Responsibilities;
    lightingInstructions?: LightingInstructions;
}
/** Location / address section */
export interface LocationInfo {
    addressLine: string;
    city?: string;
    state?: string;
    zip?: string;
}
/** Contact block */
export interface Contacts {
    soc?: SocContact;
    projectManager?: PersonContact;
    assistantProjectManager?: PersonContact;
    operationsCenter?: OperationsCenterContact;
}
export interface SocContact {
    landline?: string;
    cellphone?: string;
}
export interface PersonContact {
    name: string;
    phone?: string;
}
export interface OperationsCenterContact {
    name: string;
    phone?: string;
}
/** Structured "Post Details" table-ish block */
export interface PostDetails {
    post: string;
    equipment: string[];
    shiftHoursRaw: string;
    shifts?: ShiftWindow[];
    dailyHours?: number;
    weeklyHours?: number;
    notes?: string[];
}
export interface ShiftWindow {
    label: string;
    start: string;
    end: string;
}
/** Break coverage section */
export interface BreakCoverage {
    breakDurationMinutes: number;
    locations: string[];
    documentationRequirement?: string;
}
/** Responsibilities block on page 4 */
export interface Responsibilities {
    items: string[];
}
/** Lighting instructions section */
export interface LightingInstructions {
    items: string[];
}
//# sourceMappingURL=security-post-order-model.d.ts.map