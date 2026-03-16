import type { Layout } from "react-grid-layout";

/** Item ids for the guard locations dashboard grid. */
export const DASHBOARD_ITEM_IDS = {
  MAP: "map",
  LOCATION_STATUS: "locationStatus",
  SECURITY_BREAKS: "securityBreaks",
  TASK_SUMMARY: "taskSummary",
} as const;

export type DashboardItemId = (typeof DASHBOARD_ITEM_IDS)[keyof typeof DASHBOARD_ITEM_IDS];

/** Prefix for dynamic map panel ids (one per geofence). Full id = getGuardMapItemId(geofenceId). */
export function getGuardMapItemId(geofenceId: string): string {
  return `map-${geofenceId}`;
}

const LEFT_WIDTH = 5;
const RIGHT_START_X = 5;
const LEFT_TOTAL_ROWS = 10;

/**
 * Build default guard dashboard layout with one panel on the left per geofence.
 * When geofenceIds is empty, a single "map" panel is used on the left.
 */
export function buildGuardDashboardLayout(geofenceIds: string[]): Layout[] {
  const layout: Layout[] = [];

  if (geofenceIds.length === 0) {
    layout.push({
      i: DASHBOARD_ITEM_IDS.MAP,
      x: 0,
      y: 0,
      w: LEFT_WIDTH,
      h: LEFT_TOTAL_ROWS,
      minW: 3,
      minH: 4,
    });
  } else {
    const n = geofenceIds.length;
    const baseH = Math.floor(LEFT_TOTAL_ROWS / n);
    const remainder = LEFT_TOTAL_ROWS - baseH * n;
    let y = 0;
    geofenceIds.forEach((id, index) => {
      const h = index < remainder ? baseH + 1 : baseH;
      layout.push({
        i: getGuardMapItemId(id),
        x: 0,
        y,
        w: LEFT_WIDTH,
        h,
        minW: 3,
        minH: 2,
      });
      y += h;
    });
  }

  layout.push(
    { i: DASHBOARD_ITEM_IDS.LOCATION_STATUS, x: RIGHT_START_X, y: 0, w: 7, h: 7, minW: 3, minH: 2 },
    { i: DASHBOARD_ITEM_IDS.SECURITY_BREAKS, x: RIGHT_START_X, y: 7, w: 4, h: 3, minW: 2, minH: 1 },
    { i: DASHBOARD_ITEM_IDS.TASK_SUMMARY, x: 9, y: 7, w: 3, h: 3, minW: 2, minH: 2 }
  );

  return layout;
}

/** Default layout: 12 cols, one map left (5), Location top-right (7), Security + Task side-by-side below. Used when no geofences. */
export const DEFAULT_GUARD_DASHBOARD_LAYOUT: Layout[] = [
  { i: DASHBOARD_ITEM_IDS.MAP, x: 0, y: 0, w: 5, h: 10, minW: 3, minH: 4 },
  { i: DASHBOARD_ITEM_IDS.LOCATION_STATUS, x: 5, y: 0, w: 7, h: 7, minW: 3, minH: 2 },
  { i: DASHBOARD_ITEM_IDS.SECURITY_BREAKS, x: 5, y: 7, w: 4, h: 3, minW: 2, minH: 1 },
  { i: DASHBOARD_ITEM_IDS.TASK_SUMMARY, x: 9, y: 7, w: 3, h: 3, minW: 2, minH: 2 },
];

export const GUARD_DASHBOARD_STORAGE_KEY = "guard-locations-dashboard-layout";
