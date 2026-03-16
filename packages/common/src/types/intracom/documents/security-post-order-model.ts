/** Top-level document extracted from the PDF */
export interface IntracomDocumentSecurityPostOrder {
    documentTitle: string;            // "SECURITY POST ORDERS" (p1)
    description:string;
    siteName: string;                 // "George R Brown Convention Center" (p1)
    postName: string;                 // "SS-2 Inside Rover" (p1/p2)
    effectiveDate?: number;           // unix format
  
    location: LocationInfo;           // Address block (p1)
    contacts: Contacts;               // SOC/PM/APM/Operations Center (p1)
  
    postDetails: PostDetails;         // Post/Equipment/Shift/Daily/Weekly (p2)
    directives: string[];             // Bullet directives (p2–p4)
    breakCoverage?: BreakCoverage;    // 15-min break responsibilities (p3)
    responsibilities?: Responsibilities; // "SS2 officers are responsible for..." (p4)
    lightingInstructions?: LightingInstructions; // "Lights" section (p4)
  }
  
  /** Location / address section */
  export interface LocationInfo {
    addressLine: string;              // "701 Avenida De Las Americas, Houston, TX 77010" (p1)
    city?: string;
    state?: string;
    zip?: string;
  }
  
  /** Contact block */
  export interface Contacts {
    soc?: SocContact;                 // SOC# with phones (p1)
    projectManager?: PersonContact;   // Tony Tamayo + phone (p1)
    assistantProjectManager?: PersonContact; // Tamika Bates + phone (p1)
    operationsCenter?: OperationsCenterContact; // TriCorps GOC (p1)
  }
  
  export interface SocContact {
    landline?: string;                // "713 853-8087" (p1)
    cellphone?: string;               // "281 806-2078" (p1)
  }
  
  export interface PersonContact {
    name: string;                     // e.g., "Tony Tamayo" (p1)
    phone?: string;                   // e.g., "405 826-0777" (p1)
  }
  
  export interface OperationsCenterContact {
    name: string;                     // "TriCorps Global Security Operations Center" (p1)
    phone?: string;                   // "844.TRICORPS (844.874.2677)" (p1)
  }
  
  /** Structured "Post Details" table-ish block */
  export interface PostDetails {
    post: string;                     // "SS-2 Inside Rover" (p2)
    equipment: string[];              // ["Two-way radio","keys","smart phone"] (p2)
    shiftHoursRaw: string;            // "1st Shift (0700-1500)..." (p2) keep raw for safety
    shifts?: ShiftWindow[];           // Optional parsed version
    dailyHours?: number;              // 8 (p2)
    weeklyHours?: number;             // 40 (p2)
    notes?: string[];                 // e.g., ["This is a Maximum Visibility Post"] (p2)
  }
  
  export interface ShiftWindow {
    label: string;                    // "1st Shift" | "2nd shift" | "3rd shift" (p2)
    start: string;                    // "0700"
    end: string;                      // "1500"
  }
  
  /** Break coverage section */
  export interface BreakCoverage {
    breakDurationMinutes: number;     // 15 (p3)
    locations: string[];              // ["Partnership Tower Lobby","Scanner","Dispatch","Any other position as needed"] (p3)
    documentationRequirement?: string; // DAR note about start/end time (p3)
  }
  
  /** Responsibilities block on page 4 */
  export interface Responsibilities {
    items: string[];                  // e.g. office doors locked, opening/closing, etc. (p4)
  }
  
  /** Lighting instructions section */
  export interface LightingInstructions {
    items: string[];                  // Ballroom neon light rule + switch location (p4)
  }
  