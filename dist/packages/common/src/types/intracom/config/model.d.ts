export interface IntracomConfig {
    id: string;
    type: "privacy" | "pre-shift-config" | "post-shift-config" | "edge-device-notification-config" | "user-post-mapping" | "post-list-config" | "shift-config" | "whitelisted-email-domains" | "whitelisted-phone-numbers" | "notification-config" | "wristband-config";
    data: IntracomConfigShiftConfig | IntracomConfigPrivacyData | IntracomConfigEdgeDeviceNotificationConfig | IntracomConfigUserPostMapping | IntracomConfigPostListConfig | IntracomConfigShiftTimeConfig | IntracomConfigWhitelistedEmailDomains | IntracomConfigWhitelistedPhoneNumbers | IntracomConfigNotificationConfig | IntracomConfigWristbandConfig[];
    organizationId: string;
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
    shiftId: string;
    label: string;
    duration: number;
    start_time: number;
    end_time: number;
}
export interface IntracomConfigShiftConfig {
    recipients?: string[];
    recipients_emails?: string[];
    recipients_phone_numbers?: string[];
    time?: string;
    timezone?: string;
    days?: string[];
    formats?: string[];
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
    date?: number;
    dateOfTheMonth?: number;
    colorName: string;
    colorCode: string;
}
export interface NotificationConfigItem {
    notificationKind: "sms" | "email" | "mobileapp" | "webapp";
    recipients_emails?: string[];
    triggerType: "trigger-function" | "cron" | "scheduled-event";
    triggerFor: "intracom-document-bolo-report" | "intracom-guard-shift-exceed" | "intracom-guard-shift-exceed-to-soc" | "intracom-guard-break-exceed" | "intracom-guard-break-exceed-to-soc" | "intracom-guard-no-update";
    numberOfTimes?: number;
    timeInterval?: number;
    firstNotificationDelay?: number;
    sendToCurrentUser?: boolean;
    recipients_phone_numbers?: string[];
    recipients_userIds?: string[];
    closeAfter?: number;
}
export interface IntracomConfigNotificationConfig {
    notificationConfigs: NotificationConfigItem[];
}
export interface IntracomConfigEdgeDeviceNotificationConfig {
    recipients?: string[];
    recipients_emails?: string[];
    recipients_phone_numbers?: string[];
    enabled?: boolean;
    lastRun?: number;
    nextRun?: number;
    errorNotifications?: {
        enabled?: boolean;
        notifyOnError?: boolean;
        eventTypes?: string[];
        cooldownMs?: number;
        deviceIds?: string[];
        locations?: string[];
    };
    dataTimeoutNotifications?: {
        enabled?: boolean;
        timeoutThresholdMs?: number;
        cooldownMs?: number;
        deviceIds?: string[];
        locations?: string[];
        eventTypes?: string[];
    };
    dataRecoveryNotifications?: {
        enabled?: boolean;
        minTimeoutDurationMs?: number;
        cooldownMs?: number;
        deviceIds?: string[];
        locations?: string[];
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
//# sourceMappingURL=model.d.ts.map