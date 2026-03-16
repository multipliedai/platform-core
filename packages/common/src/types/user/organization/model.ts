export interface OrganizationTimeZone {
    /** IANA timezone identifier (e.g., "America/New_York", "Asia/Kolkata") - used for date conversions */
    identifier: string;
    /** Human-readable label for UI display (e.g., "Eastern Time (US & Canada)", "India Standard Time") */
    label?: string;
    /** UTC offset for quick reference (e.g., "UTC-05:00", "UTC+05:30") */
    utcOffset?: string;
  }
  
  export interface Organization {
    id: string;
    name: string;
    domain?: string;
    emailDomains?: string[];
    enabledModules: string[];
    timeZone?: OrganizationTimeZone;
    location?: {
      latitude: number;
      longitude: number;
      address?: string;
      tilt?: number;
      heading?: number;
      zoom?: number;
      radius?: number; // in meters
    };
    status: "active" | "suspended" | "deleted";
    createdAt: number;
    lastUpdated: number;
    additional_details?: string;
  }
  
  export interface SearchOrganizationsInput {
    id?: string;
    name?: string;
    domain?: string;
    status?: string;
    plan?: string;
  }