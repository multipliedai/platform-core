export type DeviceStatus = "OK" | "WARN" | "ERROR" | "OFFLINE";

export interface IntracomEdgeDevice {
  id: string;
  organizationId: string;
  name: string;
  device_type?: string;
  location?: string;
  metadata?: Record<string, any>;
  latest_events?: Record<string, IntracomDeviceEvent>;
  // Notification tracking fields
  lastErrorNotificationSent?: number; // Timestamp of last error notification
  lastTimeoutNotificationSent?: number; // Timestamp of last timeout notification
  lastRecoveryNotificationSent?: number; // Timestamp of last recovery notification
  createdAt: number;
  lastUpdated: number;
}

export interface IntracomDeviceEvent {
  id: string;
  device_id: string;
  organizationId: string;
  event_type: string;
  status: "OK" | "WARN" | "ERROR";
  loop_index?: number;
  meta: Record<string, any>;
  createdAt: number;
  lastUpdated: number;
}