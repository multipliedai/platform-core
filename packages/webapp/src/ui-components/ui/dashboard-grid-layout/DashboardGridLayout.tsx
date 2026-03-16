import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactGridLayout from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./dashboard-grid-layout.css";
import {
  DEFAULT_GUARD_DASHBOARD_LAYOUT,
  GUARD_DASHBOARD_STORAGE_KEY,
  type DashboardItemId,
} from "./types";
import { GripHorizontal } from "lucide-react";
import { toTitleCase } from "@/util/util";

const GridLayout = ReactGridLayout.WidthProvider(ReactGridLayout);

const COLS = 12;
/** Fallback when container height is not yet measured. */
const FALLBACK_ROW_HEIGHT_PX = 40;
const MARGIN: [number, number] = [8, 8];
const CONTAINER_PADDING: [number, number] = [8, 8];

function getTotalRows(layout: Layout[]): number {
  if (layout.length === 0) return 1;
  let max = 0;
  for (const item of layout) {
    const bottom = item.y + item.h;
    if (bottom > max) max = bottom;
  }
  return max > 0 ? max : 1;
}

/** Resize from all corners and edges. */
const RESIZE_HANDLES: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne"> = [
  "nw",
  "n",
  "ne",
  "e",
  "se",
  "s",
  "sw",
  "w",
];

export interface DashboardGridLayoutProps {
  /** Unique key for persisting this dashboard's layout (e.g. used as localStorage key suffix). */
  storageKey: string;
  /** Default layout when no saved layout exists. */
  defaultLayout: Layout[];
  /** Map of item id -> content to render in each grid item. */
  items: Record<string, React.ReactNode>;
  /** Optional map of item id -> display label for panel header (falls back to title-cased id). */
  itemLabels?: Record<string, string>;
  /** Optional map of item id -> header actions (e.g. icon button) rendered next to the title. */
  itemHeaderActions?: Record<string, React.ReactNode>;
  /** Optional class name for the container. */
  className?: string;
  /** Optional height for the grid container (e.g. "calc(100vh - 65px)"). */
  style?: React.CSSProperties;
}

function loadLayoutFromStorage(
  storageKey: string,
  defaultLayout: Layout[],
  validIds: Set<string>
): Layout[] {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw == null || raw === "") return defaultLayout;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return defaultLayout;
    const layout: Layout[] = [];
    for (const item of parsed) {
      if (
        item != null &&
        typeof item === "object" &&
        typeof (item as Layout).i === "string" &&
        validIds.has((item as Layout).i) &&
        typeof (item as Layout).x === "number" &&
        typeof (item as Layout).y === "number" &&
        typeof (item as Layout).w === "number" &&
        typeof (item as Layout).h === "number"
      ) {
        layout.push(item as Layout);
      }
    }
    if (layout.length !== validIds.size) return defaultLayout;
    return layout;
  } catch {
    return defaultLayout;
  }
}

function saveLayoutToStorage(storageKey: string, layout: Layout[]): void {
  try {
    localStorage.setItem(storageKey, JSON.stringify(layout));
  } catch {
    // Ignore storage errors (e.g. quota, private mode)
  }
}

/**
 * A resizable and draggable grid layout for dashboards.
 * Layout is persisted to localStorage and restored on mount.
 */
export function DashboardGridLayout({
  storageKey,
  defaultLayout,
  items,
  itemLabels,
  itemHeaderActions,
  className,
  style,
}: DashboardGridLayoutProps) {
  const validIds = useMemo(
    () => new Set<string>(defaultLayout.map((item) => item.i)),
    [defaultLayout]
  );

  const [layout, setLayout] = useState<Layout[]>(() =>
    loadLayoutFromStorage(storageKey, defaultLayout, validIds)
  );

  const onLayoutChange = useCallback(
    (newLayout: Layout[]) => {
      setLayout(newLayout);
      saveLayoutToStorage(storageKey, newLayout);
    },
    [storageKey]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeightPx, setContainerHeightPx] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (el == null) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry == null) return;
      const h = entry.contentRect.height;
      setContainerHeightPx(h);
    });
    ro.observe(el);
    setContainerHeightPx(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  const totalRows = useMemo(() => getTotalRows(layout), [layout]);
  const rowHeightPx = useMemo(() => {
    if (containerHeightPx <= 0 || totalRows <= 0) return FALLBACK_ROW_HEIGHT_PX;
    const paddingVertical = 2 * CONTAINER_PADDING[1];
    const gapsVertical = (totalRows - 1) * MARGIN[1];
    const availableForRows = containerHeightPx - paddingVertical - gapsVertical;
    if (availableForRows <= 0) return FALLBACK_ROW_HEIGHT_PX;
    return Math.max(1, availableForRows / totalRows);
  }, [containerHeightPx, totalRows]);

  const containerStyle = useMemo(
    (): React.CSSProperties => ({
      height: "100%",
      minHeight: 0,
      ...style,
    }),
    [style]
  );

  return (
    <div ref={containerRef} className={className} style={containerStyle}>
      <GridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
        cols={COLS}
        rowHeight={rowHeightPx}
        margin={MARGIN}
        containerPadding={CONTAINER_PADDING}
        draggableHandle="[data-dashboard-drag-handle]"
        isDraggable={true}
        isResizable={true}
        resizeHandles={RESIZE_HANDLES}
        preventCollision={false}
        compactType="vertical"
        useCSSTransforms={true}
        className="dashboard-grid-layout"
      >
        {layout.map((item) => {
          const content = items[item.i as DashboardItemId];
          if (content == null) return null;
          return (
            <div
              key={item.i}
              className="overflow-hidden rounded-lg border border-border bg-background flex flex-col min-h-0"
            >
              <div
                className="shrink-0 bg-gray-50 p-2 w-full flex items-center justify-between rounded-t-lg"
                aria-hidden
              >
                <div
                  data-dashboard-drag-handle
                  className="flex-1 min-w-0 flex items-center cursor-grab active:cursor-grabbing hover:bg-muted/50 rounded transition-colors px-1 -mx-1"
                >
                  <p className="font-semibold truncate">
                    {itemLabels?.[item.i] ?? toTitleCase(item.i as string)}
                  </p>
                </div>
                {itemHeaderActions?.[item.i] != null && (
                  <div className="shrink-0 pl-2" onClick={(e) => e.stopPropagation()}>
                    {itemHeaderActions[item.i]}
                  </div>
                )}
              </div>
            <div className="flex-1 min-h-0 overflow-auto flex flex-col">{content}</div>
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
}
