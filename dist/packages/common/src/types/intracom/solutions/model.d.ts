export type IntracomSolutionDepartment = "security" | "catering" | "parking" | "cleanliness" | "guest-experience" | "event-operations" | "reputation" | "facilities" | "human-resources";
export interface IntracomSolution {
    id: string;
    title: string;
    department: IntracomSolutionDepartment;
    description: string;
    tagline?: string;
    managers: string[];
    createdAt: number;
    lastUpdated: number;
    status: "active" | "inactive" | "archived" | "closed";
    tags: string[];
    userId: string;
    isParent: boolean;
    needShiftSummary?: boolean;
    organizationId: string;
}
export interface AIIntracomSolution {
    id: string;
    title: string;
    department: IntracomSolutionDepartment;
    description: string;
    tagline?: string;
    tags: string[];
    organizationId: string;
}
//# sourceMappingURL=model.d.ts.map