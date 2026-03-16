export interface UserOrganization {
    roles?: string[]; // "admin", "manager", "user"
    status?: "active" | "pending" | "deleted";
  }
  
  export interface User {
    id: string;
    email?: string;
    name?: string;
    phoneNumber: string;
    userName?: string;
    sid: string[];
    organizations?: Record<string, UserOrganization>;
    primaryOrganizationId?: string;
    profileDetails?: {
      role: string;
      department?: string;
      joinDate?: string;
      avatar?: string;
      age?: number;
      managerId?: string;
      team_members?: string[];
  
    };
    messagingToken?: {
      echosApp?: string;
      intracomApp?: string;
    };
    status: "active" | "pending" | "deleted";
    createdAt: number;
    lastUpdated: number;
    additional_details?: string;
  }
  
  export interface SearchUsersInput {
    id?: string;
    email?: string;
    userName?: string;
    groups?: Record<string, string[]>;
  }