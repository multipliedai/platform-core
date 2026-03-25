/** App state when the location was captured (e.g. react-native-app-state) */
export type AppState = "foreground" | "background" | "inactive";
/** Activity type from the device (e.g. React Native Geolocation / activity recognition) */
export type LocationActivityType = "stationary" | "moving" | "on_foot" | "in_vehicle" | "on_bicycle" | "running" | "walking" | "still" | "unknown";
export declare const LOCATION_ACTIVITY_TYPE: {
    stationary: string;
    moving: string;
    on_foot: string;
    in_vehicle: string;
    on_bicycle: string;
    running: string;
    walking: string;
    still: string;
    unknown: string;
};
/** Device info from react-native-device-info (subset we persist per sample) */
export interface UserLocationDeviceInfo {
    /** Unique device id (e.g. getUniqueId()) */
    deviceId?: string;
    /** Device model (e.g. "iPhone14,2") */
    model?: string;
    /** Brand (e.g. "Apple", "samsung") */
    brand?: string;
    /** OS name (e.g. "iOS", "Android") */
    systemName?: string;
    /** OS version (e.g. "17.0") */
    systemVersion?: string;
    /** Build id / fingerprint */
    buildId?: string;
    /** App build number */
    appBuildNumber?: string;
    /** Whether device is a tablet */
    isTablet?: boolean;
}
/** Core coordinates and motion from the location service (aligns with BG Coords) */
export interface UserLocationCoords {
    latitude: number;
    longitude: number;
    /** Horizontal accuracy in meters */
    accuracy?: number;
    /** Meters above sea level */
    altitude?: number;
    /** Ellipsoidal altitude in meters (if available) */
    ellipsoidalAltitude?: number;
    /** Floor level (indoor, if available) */
    floor?: number;
    /** Altitude accuracy in meters (if available) */
    altitudeAccuracy?: number;
    /** Heading / bearing in degrees 0–360 (if available) */
    heading?: number;
    /** Heading accuracy in degrees (if available) */
    headingAccuracy?: number;
    /** Speed in m/s (if available) */
    speed?: number;
    /** Speed accuracy in m/s (if available) */
    speedAccuracy?: number;
}
/** Battery snapshot at sample time (from BG Location.battery) */
export interface UserLocationBattery {
    is_charging: boolean;
    level: number;
}
/** Motion activity from the device (from BG Location.activity) */
export type UserLocationMotionActivityType = "still" | "walking" | "on_foot" | "running" | "on_bicycle" | "in_vehicle" | "unknown";
export interface UserLocationMotionActivity {
    type: UserLocationMotionActivityType;
    confidence: number;
}
/** Provider state at sample time (from BG Location.provider) */
export interface UserLocationProviderChangeEvent {
    enabled: boolean;
    status: number;
    network: boolean;
    gps: boolean;
    accuracyAuthorization: number;
}
/** Geofence definition (from BG Geofence) */
export type UserLocationGeofenceVertices = [number, number][];
export interface UserLocationGeofence {
    identifier: string;
    latitude: number;
    longitude: number;
    radius: number;
    notifyOnEntry?: boolean;
    notifyOnExit?: boolean;
    notifyOnDwell?: boolean;
    loiteringDelay?: number;
    extras?: Record<string, unknown>;
    vertices?: UserLocationGeofenceVertices;
}
/** Geofence event that triggered this location (from BG Location.geofence; no nested location to avoid recursion) */
export type UserLocationGeofenceAction = "ENTER" | "EXIT" | "DWELL";
export interface UserLocationGeofenceEvent {
    timestamp: string;
    identifier: string;
    action: UserLocationGeofenceAction;
    extras?: Record<string, unknown>;
    geofence?: UserLocationGeofence;
}
/** x, y, z axes plus timestamp (ms). Used for accelerometer, gyroscope, magnetometer, gravity. */
export interface UserLocationSensorXYZ {
    x: number;
    y: number;
    z: number;
    timestamp: number;
}
/** Orientation at sample time: quaternion (qx,qy,qz,qw) + pitch, roll, yaw + timestamp (ms). */
export interface UserLocationOrientation {
    qx: number;
    qy: number;
    qz: number;
    qw: number;
    pitch: number;
    roll: number;
    yaw: number;
    timestamp: number;
}
/** Barometer reading at sample time: pressure in hPa, timestamp in ms. */
export interface UserLocationBarometer {
    pressure: number;
    timestamp: number;
}
/** WiFi access point from a scan (e.g. react-native-wifi-reborn). BSSID + RSSI for fingerprinting. */
export interface UserLocationWifiEntry {
    /** MAC address of the access point (e.g. "aa:bb:cc:dd:ee:ff") */
    bssid: string;
    /** Signal strength in dBm (e.g. -65) */
    rssi: number;
    /** Network name (SSID), if available */
    ssid?: string;
}
export interface UserLocationEstimatedWifiLocation {
    latitude?: number;
    longitude?: number;
    floorId?: string;
    buildingId?: string;
    geofenceLayoutId?: string;
    confidence?: number;
    locationId?: string;
}
export interface UserLocation {
    id: string;
    userId: string;
    organizationId: string;
    /** App version at time of capture (e.g. "1.2.0") */
    appVersion: string;
    /** Whether app was in foreground, background, or inactive when sample was taken */
    appState: AppState;
    /** Activity inferred by the OS: stationary, moving, etc. */
    activityType?: LocationActivityType;
    /** Coordinates and motion from the location service */
    coords: UserLocationCoords;
    estimatedWifiLocation?: UserLocationEstimatedWifiLocation;
    /** Device details from react-native-device-info (snapshot at sample time) */
    device?: UserLocationDeviceInfo;
    /** Battery state at sample time (from BG Location) */
    battery?: UserLocationBattery;
    /** Motion activity from BG Location.activity */
    activity?: UserLocationMotionActivity;
    /** Provider state at sample time (from BG Location.provider) */
    provider?: UserLocationProviderChangeEvent;
    /** Geofence event if this location was triggered by a geofence (from BG Location.geofence) */
    geofence?: UserLocationGeofenceEvent;
    /** Barometer reading at sample time (pressure in hPa, timestamp in ms). */
    barometer?: UserLocationBarometer;
    /** Accelerometer reading at sample time (x, y, z, timestamp in ms). */
    accelerometer?: UserLocationSensorXYZ;
    /** Gyroscope reading at sample time (x, y, z, timestamp in ms). */
    gyroscope?: UserLocationSensorXYZ;
    /** Magnetometer reading at sample time (x, y, z, timestamp in ms). */
    magnetometer?: UserLocationSensorXYZ;
    /** Gravity reading at sample time (x, y, z, timestamp in ms). */
    gravity?: UserLocationSensorXYZ;
    /** Orientation at sample time (quaternion + pitch, roll, yaw, timestamp in ms). */
    orientation?: UserLocationOrientation;
    /** WiFi scan at sample time: list of BSSID + RSSI (from react-native-wifi-reborn). */
    wifi?: UserLocationWifiEntry[];
    createdAt: number;
    lastUpdated: number;
}
//# sourceMappingURL=model.d.ts.map