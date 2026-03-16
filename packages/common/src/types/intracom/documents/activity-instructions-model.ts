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
  is_done?: boolean;
  status?: "pending" | "in-progress" | "completed";
  signalIds?: string[];
  segmentIds?: string[];
  relatedPosts?: string[];
  createdAt?: number;
  lastUpdated?: number;
  onBreak?: boolean;
  breakType?: "break-10-40" | "break-10-100";
  /** User who created/is assigned to this task (e.g. for break tasks when postId is not available). */
  userId?: string;
}

export interface ActivityInstructions {
  type?:
    | "door-request"
    | "assistance-request"
    | "service-request"
    | "security-breaks";
  tasks: Task[];
}
