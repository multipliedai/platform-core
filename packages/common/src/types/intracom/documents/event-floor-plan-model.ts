export type PlanAccess = "public" | "staff" | "vip" | "restricted" | "unknown";

export type PlanPointType = "entry" | "exit" | "door" | "dock" | "other";

export type PlanItemType =
  | "room"
  | "zone"
  | "stage"
  | "seating"
  | "table"
  | "booth"
  | "tech"
  | "storage"
  | "service"
  | "other";


export interface PlanHeader {
  venue?: string;          // e.g. "George R. Brown Convention Center"
  eventName?: string;      // if printed on plan
  spaceName?: string;      // e.g. "Hall E", "Room 342", "Assembly A"
  showDates?: string[];    // if printed
}

export interface PlanItem {
  id: string;
  label: string;           // exact text label from plan ("Tech Table", "Training", "Green Room")
  type?: PlanItemType;
  access?: PlanAccess;     // basic classification if label implies it
  notes?: string;          // short human-readable note (optional)
}

export interface PlanPoint {
  id: string;
  label: string;           // "Entrance", "Exit", "Headliner Entrance", etc.
  type?: PlanPointType;
  access?: PlanAccess;
}

export interface PlanCounts {
  // only include if explicitly printed or clearly noted
  chairs?: number;
  tables?: number;
  seats?: number;
  risers?: number;
}

export interface IntracomDocumentEventFloorPlan {
  header?: PlanHeader;

  // The main output: simple lists
  items: PlanItem[];       // rooms/zones/areas/labels found on plan
  points?: PlanPoint[];    // entrances/exits/doors if labeled
  counts?: PlanCounts;     // chairs/tables/seats if stated

  // Anything else you want to keep without over-structuring
  rawLabels?: string[];    // optional: all detected text labels
}