export interface IntracomConfig {
  id: string;
  type: "privacy" | "pre-shift-config" 
    | "post-shift-config" | "edge-device-notification-config" | 
    "user-post-mapping" | "post-list-config" | "shift-config"
    | "whitelisted-email-domains" | "whitelisted-phone-numbers" 
    | "notification-config" | "wristband-config";
  data: IntracomConfigShiftConfig | IntracomConfigPrivacyData 
    | IntracomConfigEdgeDeviceNotificationConfig | IntracomConfigUserPostMapping 
    | IntracomConfigPostListConfig | IntracomConfigShiftTimeConfig | IntracomConfigWhitelistedEmailDomains | IntracomConfigWhitelistedPhoneNumbers
    | IntracomConfigNotificationConfig | IntracomConfigWristbandConfig[];
  organizationId: string; // Multi-tenant organization identifier
  userId: string;
  createdAt: number;
  lastUpdated: number;
}

export interface IntracomConfigPrivacyData {
  privacyLevel: "none" | "hybrid" | "full";
}

export interface IntracomConfigShiftTimeConfig {
  shifts: IntracomConfigShift[];
}


export interface IntracomConfigShift {
  shiftId: string; // shift_1, shift_2, shift_3
  label: string;
  duration: number; // in ms
  start_time: number; // in ms from 12:00 AM midnight
  end_time: number; // in ms from 12:00 AM midnight
}

export interface IntracomConfigShiftConfig {
  // New simplified fields
  recipients?: string[]; // Array of channel IDs
  recipients_emails?: string[]; // Array of email addresses
  recipients_phone_numbers?: string[]; // Array of phone numbers
  
  // Old fields (kept for backward compatibility)
  time?: string; // HH:mm format
  timezone?: string;
  days?: string[]; // ["Mon", "Tue", "Wed", etc.]
  formats?: string[]; // ["PDF", "Dashboard Snapshot", "Audio: Formal", "Audio: Rap"]
  
  enabled?: boolean;
  lastRun?: number;
  nextRun?: number;
}

export interface IntracomConfigUserPostMapping {
  mapping?: IntracomConfigUserPostMappingItem[];
}

export interface IntracomConfigUserPostMappingItem {
  userId: string;
  postId: string;
  shiftType: "shift_1" | "shift_2" | "shift_3";
  startTime: number;
  endTime: number;
}

export interface IntracomConfigWhitelistedEmailDomains {
  domains: string[];
}

export interface IntracomConfigWhitelistedPhoneNumbers {
  phoneNumbers: {
    phoneNumber: string;
    name?: string;
  }[];
}

export interface IntracomConfigWristbandConfig {
  date: number; // in ms from 12:00 AM midnight
  colorName: string;
  colorCode: string;
}

export interface NotificationConfigItem {
  notificationKind: "sms" | "email" | "mobileapp" | "webapp";
  recipients_emails?: string[];
  triggerType: "trigger-function" | "cron" | "scheduled-event";
  triggerFor: "intracom-document-bolo-report"
    | "intracom-guard-shift-exceed"
    | "intracom-guard-shift-exceed-to-soc"
    | "intracom-guard-break-exceed"
    | "intracom-guard-break-exceed-to-soc"
    | "intracom-guard-no-update";
  numberOfTimes?: number; // number of times to send notifications
  timeInterval?: number; // between notifications in ms
  firstNotificationDelay?: number; // delay before first notification in ms
  sendToCurrentUser?: boolean; // send notification to current user
  recipients_phone_numbers?: string[];
  recipients_userIds?: string[];
}

export interface IntracomConfigNotificationConfig {
  notificationConfigs: NotificationConfigItem[];
}

export interface IntracomConfigEdgeDeviceNotificationConfig {
  // Recipients
  recipients?: string[]; // Array of channel IDs
  recipients_emails?: string[]; // Array of email addresses
  recipients_phone_numbers?: string[]; // Array of phone numbers
  
  // Global settings
  enabled?: boolean;
  lastRun?: number;
  nextRun?: number;
  
  // Error notification settings
  errorNotifications?: {
    enabled?: boolean;
    // Notify on ERROR status events
    notifyOnError?: boolean;
    // Specific event types to monitor (empty = all event types)
    eventTypes?: string[];
    // Cooldown period in milliseconds before sending another error notification for the same device
    cooldownMs?: number; // Default: 1 hour (3600000ms)
    // Filter by device IDs (empty = all devices)
    deviceIds?: string[];
    // Filter by locations (empty = all locations)
    locations?: string[];
  };
  
  // Data timeout notification settings
  dataTimeoutNotifications?: {
    enabled?: boolean;
    // Timeout threshold in milliseconds (how long without data before notification)
    timeoutThresholdMs?: number; // Default: 30 minutes (1800000ms)
    // Cooldown period in milliseconds before sending another timeout notification for the same device
    cooldownMs?: number; // Default: 1 hour (3600000ms)
    // Filter by device IDs (empty = all devices)
    deviceIds?: string[];
    // Filter by locations (empty = all locations)
    locations?: string[];
    // Which event types to monitor for timeout (empty = all event types)
    eventTypes?: string[];
  };
  
  // Data recovery notification settings
  dataRecoveryNotifications?: {
    enabled?: boolean;
    // Minimum timeout duration in milliseconds before considering it a "recovery"
    // (prevents notifications for brief interruptions)
    minTimeoutDurationMs?: number; // Default: 5 minutes (300000ms)
    // Cooldown period in milliseconds before sending another recovery notification for the same device
    cooldownMs?: number; // Default: 1 hour (3600000ms)
    // Filter by device IDs (empty = all devices)
    deviceIds?: string[];
    // Filter by locations (empty = all locations)
    locations?: string[];
    // Which event types to monitor for recovery (empty = all event types)
    eventTypes?: string[];
  };
}

export interface IntracomConfigPostListConfig {
  list?: IntracomConfigPostListItem[];
}

export interface IntracomConfigPostListItem {
  postId: string;
  title: string;
  description: string;
  allowedGolfCart?: boolean;
}