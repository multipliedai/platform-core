
export type IntracomProgramStatus = "planning" | "active" | "paused" | "completed" | "cancelled";
export type IntracomProgramType = "security" | "operational" | "safety" | "maintenance" | "training" | "compliance" | "guest-experience" | "parking" | "cleanliness" | "event-operations" | "reputation";

export interface IntracomProgramAction {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  estimatedImpact: string;
  assignedTo: string;
  createdAt: number;
  lastUpdated: number;
  comments?: {
    userId: string;
    comment: string;
    createdAt: number;
  }[];
}

export interface IntracomProgram {
  id: string;
  title: string;
  type: IntracomProgramType;
  owner: string;
  overview: string; // Overview from step 1
  description: string; // Detailed description from step 2
  status: IntracomProgramStatus;
  startDate?: number;
  endDate?: number;
  expectedDuration?: number;
  priority: "high" | "medium" | "low";
  progress?: number;
  budget?: number;
  assignedManager?: string;
  teamMembers: string[];
  tags: string[];
  solutionIds: string[];
  insightIds: string[];
  userId: string;
  createdAt: number;
  lastUpdated: number;
  // 
  objectives: string[];
  recommendations: string[];
  actionPlan: IntracomProgramAction[];
  organizationId: string; // Multi-tenant organization identifier
}

