export interface TimeWindow {
    start_time?: string;
    end_time?: string;
    notes?: string;
}
export interface TaskType {
    type: "securing" | "request";
    status?: "secured" | "unsecured";
}
export interface Task {
    id: string;
    description: string;
    location?: string;
    assets?: string[];
    time_window?: TimeWindow;
    task_type?: TaskType;
    segmentIds?: string[];
    is_done?: boolean;
    status?: "pending" | "in-progress" | "completed";
    signalIds?: string[];
    relatedPosts?: string[];
    createdAt?: number;
    lastUpdated?: number;
    onBreak?: boolean;
    breakType?: "break-10-40" | "break-10-100";
    /** User who created/is assigned to this task (e.g. for break tasks when postId is not available). */
    userId?: string;
}
export interface TeamInstructions {
    id: string;
    team_name: string;
    tasks: Task[];
    notes?: string;
}
export interface VehicleInstruction {
    vehicle_type: string;
    arrival_time?: string;
    route?: string;
    destination?: string;
    requirements?: string[];
    notes?: string;
}
export interface PersonnelAccess {
    organization: string;
    access_time: string;
    entry_point: string;
    contact_method?: string;
    names: string[];
}
export interface HangTagInstruction {
    quantity: number;
    issued_to: string;
    pickup_location: string;
    parking_location: string;
    instructions: string;
}
export interface IntracomDocumentOpeningInstructions {
    event_name: string;
    venue: string;
    event_date: number;
    hang_tags?: HangTagInstruction;
    teams: TeamInstructions[];
    vehicle_instructions?: VehicleInstruction[];
    personnel_access?: PersonnelAccess[];
    general_notes?: string;
    summary?: string[];
}
//# sourceMappingURL=opening-instructions-model.d.ts.map