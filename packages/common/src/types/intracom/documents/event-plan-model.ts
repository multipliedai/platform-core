export type WeatherAlertLevel = "warning" | "danger" | "caution";
export type WeatherAlertSeverity = "minor" | "moderate" | "severe" | "extreme";
export type WeatherAlertSourceName = "AlertHouston" | "NWS" | "OEM" | "Other";


export interface WeatherAlert {
  id: string;
  level: WeatherAlertLevel;
  title: string;
  message: string;
  updated: string; // ISO or human readable
  severity?: WeatherAlertSeverity;  // separates “danger” vs how bad
  sourceName?: WeatherAlertSourceName;
  url?: string;                     // link to houstonemergency.org alert detail
  area?: string;                    // e.g. "Downtown Houston / GRB & EaDo"
  effectiveFrom?: string;           // ISO
  effectiveTo?: string;             // ISO
  instructions?: string[];          // bullet points for UI
  tags?: string[];                  // e.g. ["rain", "flooding", "wind"]
}

export type VendorUpdateType =
  | "Delay"
  | "Change"
  | "Staff Change"
  | "Equipment Issue";

export type VendorUpdateSource = "Email" | "SMS" | "Phone Call" | "App";

export type VendorUpdatePriority = "low" | "medium" | "high";

export interface VendorUpdate {
  id: string;
  vendor: string;
  category: string;
  type: VendorUpdateType;
  icon: string; // Heroicon name, emoji, or custom key
  message: string;
  updated: string;
  source: VendorUpdateSource;
  priority?: VendorUpdatePriority;
  effectiveDate?: string;           // date this change applies
  impactedSpaces?: string[];        // match your spaceUsed names
  relatedContacts?: {
    name: string;
    role?: string;
    email?: string;
  }[];
  status?: "open" | "acknowledged" | "resolved";
  tags?: string[];                  // e.g. ["audio", "AV", "Sunday reception"]
}

export type NearbyEventCategory =
  | "Sports"
  | "Concert"
  | "Convention"
  | "Community"
  | "Traffic";

export type NearbyEventImpactLevel = "low" | "medium" | "high";

export interface NearbyEvent {
  id: string;
  venue: string;     // Daikin Park, Toyota Center...
  event: string;     // e.g. "NBA: Rockets vs Lakers"
  time: string;      // human readable: "Nov 24, 7:30 PM"
  note: string;      // traffic notes, impact, etc.
  category?: NearbyEventCategory;
  isoStart?: string;
  isoEnd?: string;
  attendanceEstimate?: number;
  distanceMinutesWalk?: number;     // from GRB
  ingressImpact?: NearbyEventImpactLevel;
  egressImpact?: NearbyEventImpactLevel;
  url?: string;                     // ticketmaster / venue link
  venueShortCode?: string;          // "TOYOTA_CENTER" | "DAIKIN_PARK" | ...
  tags?: string[];
}

// Extraction Schema
export interface EventIdentity {
  event_name: string;
  event_number?: string;
  event_dates: {
    move_in_start?: string;
    public_start: number;
    public_end: number;
    move_out_end?: string;
  };
  attendance: {
    peak_daily_attendance: number;
    daily_attendance_data?: {
      date: number;
      attendance: number;
      locations?: string[];
      time_range?: {
        start: string;
        end: string;
        location?: string;
      };
    }[];
  };
  event_type?: string;
  external_sites_used?: string[];
  access_model?: {
    public_open: boolean;
    credential_tiers?: string[];
    public_activations?: string[];
    youth_or_minors_expected: boolean;
  };
  summary?: {
    date: number;
    summary: string[];
  }[];
}

export interface EventStakeholders {
  facility_security_vendor?: string;
  primary_event_contacts: Array<{
    name: string;
    role?: string;
    email?: string;
    phone?: string;
  }>;
}

export interface EventSpaces {
  zones: Array<{
    zone_name: string;
    zone_use: string;
  }>;
  entry_points?: {
    public_entries?: string[];
    staff_entries?: string[];
    vip_entries?: string[];
  };
  restricted_areas?: string[];
  external_environment?: {
    garages?: string[];
    lots?: string[];
    plaza_park_usage?: string[];
    street_closures?: string[];
  };
  docks?: {
    assigned_docks?: string[];
  };
}

export interface EventOperations {
  building_schedule?: {
    doors_open_close?: string[];
    skybridge_access?: string[];
    lighting_schedule?: string[];
    hvac_schedule?: string[];
  };
  service_schedules?: {
    registration?: string[];
    major_program_times?: string[];
  };
  medical_support?: string[];
  housekeeping?: string[];
  food_and_beverage?: string[];
}

export interface EventExceptions {
  engineering?: string[];
  operations?: string[];
  production?: string[];
  external_civic_impact?: string[];
}

export interface EventPlanExtraction {
  event_identity: EventIdentity;
  stakeholders: EventStakeholders;
  spaces: EventSpaces;
  operations: EventOperations;
  exceptions: EventExceptions;
}

// Overlay/Recommendations Schema
export interface EventPlanOverlay {
  security_focus_points?: string[];
  crowd_flow_predictions?: string[];
  vip_support_notes?: string[];
  camera_monitoring_priorities?: string[];
  post_order_overrides?: string[];
  recommended_staffing_adjustments?: string[];
  risk_flags?: string[];
}

export interface IntracomDocumentEventPlan {
  extraction: EventPlanExtraction;
  overlay: EventPlanOverlay;
  // Legacy fields for weather/vendor/nearby events
  alerts?: WeatherAlert[];
  vendorUpdates?: VendorUpdate[];
  nearbyEvents?: NearbyEvent[];
  publishingStatus?: "published" | "unpublished" | "reviewed";
};
