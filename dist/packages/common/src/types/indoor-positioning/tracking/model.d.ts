export type Fingerprint = {
    lat: number;
    lon: number;
    /** MAC address (BSSID) → RSSI in dBm */
    wifi: Record<string, number>;
};
/** Estimated or smoothed position (lat/lon). */
export type Position = {
    lat: number;
    lon: number;
};
//# sourceMappingURL=model.d.ts.map