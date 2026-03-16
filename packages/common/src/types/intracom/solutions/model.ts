

export type IntracomSolutionDepartment = "security" | "catering" | "parking" | "cleanliness" | "guest-experience" | "event-operations" | "reputation" | "facilities" | "human-resources";

export interface IntracomSolution {
  id: string;
  title: string;
  department: IntracomSolutionDepartment;
  description: string;
  tagline?: string; // One-line description for UI
  managers: string[];
  createdAt: number;
  lastUpdated: number;
  status: "active" | "inactive" | "archived" | "closed";
  tags: string[];
  userId: string;
  isParent: boolean;
  needShiftSummary?: boolean;
  organizationId: string; // Multi-tenant organization identifier
}


export interface AIIntracomSolution {
  id: string;
  title: string;
  department: IntracomSolutionDepartment;
  description: string;
  tagline?: string; // One-line description for UI
  tags: string[];
  organizationId: string; // Multi-tenant organization identifier
}