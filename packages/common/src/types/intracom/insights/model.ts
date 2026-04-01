
export type IntracomInsightType = 
"security" | "catering" | "operational" | "safety" | "maintenance" | "compliance" | "guest-experience" | "parking" | "cleanliness" | "event-operations" | "reputation" | "communication" | "predictive" | "resource" | "knowledge" | "predictive" | "spatial";

export type InsightDataStatus = "active" | "resolved" | "monitoring" | "escalated";

export type ChartTimePeriod = "daily" | "weekly" | "monthly" | "yearly";

export type ChartDataSource = "activities" | "messages" | "documents" | "both";

// Stack data for stacked charts
export interface StackData {
  value: number;                 // Value for this stack segment
  valueIds: string[];            // Incident IDs for this stack segment
}

// Series data for line charts
export interface SeriesData {
  name: string;                   // Series name (e.g., location name)
  data: {                         // Data points for this series
    value: number;
    valueIds: string[];
    timestamp?: number;
  }[];
}

// Heatmap cell data structure
export interface HeatmapCell {
  location: string;
  timeZone?: string;        // For location-time heatmaps
  deskType?: string;        // For location-desk heatmaps
  value: number;
  valueIds: string[];
  intensity: number;
}

// Heatmap data structure for location vs time
export interface HeatmapData {
  y_axis: string[];
  x_axis: string[];
  data: { [key: string]: HeatmapCell };
}

// Funnel stage data structure
export interface FunnelStage {
  name: string;                   // Stage name (e.g., "Total Messages", "Activity Desk")
  value: number;                  // Count for this stage
  valueIds: string[];             // IDs associated with this stage
  percentage?: number;            // Percentage of total (calculated)
  dataSource?: ChartDataSource;  // Data source type: 'activities', 'messages', or 'both'
}

// Funnel data structure
export interface FunnelData {
  stages: FunnelStage[];
  totalValue: number;             // Total value across all stages
  conversionRates: {              // Conversion rates between stages
    [stageName: string]: number;  // Percentage conversion to next stage
  };
}

// Pie slice data structure
export interface PieSlice {
  name: string;                   // Location name
  value: number;                  // Count for this location
  valueIds: string[];             // Incident IDs for this location
  percentage?: number;            // Percentage of total (calculated)
}

// Pie chart data structure
export interface PieData {
  slices: PieSlice[];
  totalValue: number;             // Total value across all slices
}

// Chart metadata for different chart types
export interface ChartMetadata {
  // For stacked charts
  stacks?: { [stackName: string]: StackData };
  // For line charts with multiple series
  series?: SeriesData[];
  // For heatmap charts (both location-time and location-desk)
  // Chart-level heatmap: overall structure (y_axis, x_axis)
  heatmap?: HeatmapData;
  // Data point-level heatmap: actual data for specific date/period
  heatmapData?: { [key: string]: HeatmapCell };
  // For funnel charts
  funnel?: FunnelData;
  // For pie charts
  pie?: PieData;
  // For other chart types - flexible structure
  [key: string]: any;
}

// Unified chart data point structure
export interface ChartDataPoint {
  id: string;                    // Unique identifier for this data point
  label: string;                 // Display label (date, category, etc.)
  value: number;                 // Main value (count, percentage, etc.)
  valueIds: string[];         // Array of incident IDs associated with this data point
  timestamp?: number;            // When this data was added
  dataSource?: ChartDataSource;  // Data source type: 'activities', 'messages', or 'both'
  metadata?: ChartMetadata;      // Additional data specific to chart type
}

// Chart configuration
export interface ChartConfig {
  type: 'bar' | 'line' | 'multiLine' | 'pie' | 'donut' | 'histogram' | 'stackedBar' | 'sideBySide' | 'pareto' | 'heatmap' | 'trend' | 'funnel';
  title: string;
  xTitle?: string;
  yTitle?: string;
  description?: string;
  // Chart-specific configuration
  config?: {
    [key: string]: any;
  };
}

// Unified chart data structure
export interface UnifiedChartData {
  id: string;                    // Unique chart identifier
  config: ChartConfig;           // Chart configuration
  data: ChartDataPoint[];        // Array of data points
  lastUpdated: number;           // Last update timestamp
  metadata?: ChartMetadata;      // Chart-specific metadata (for series, etc.)
  // For time-series charts
  timeRange?: {
    start: number;
    end: number;
    interval: 'hourly' | 'daily' | 'weekly' | 'monthly';
  };
}

// Separate chart entity for better scalability
export interface IntracomInsightChart {
  organizationId: string; // Multi-tenant organization identifier
  id: string;                    // Format: "{insightId}-{chartName}" (e.g., "insight-123-daily-activities")
  solutionIds: string[];          // Array of solution IDs that use this chart (allows sharing)
  chartName: string;             // Human-readable chart name (e.g., "daily-activities", "location-trends")
  config: ChartConfig;           // Chart configuration
  data: ChartDataPoint[];        // Array of data points
  timePeriod: ChartTimePeriod;   // Time period for the chart data
  dataSource?: ChartDataSource;  // Primary data source type: 'activities', 'messages', or 'both'
  lastUpdated: number;           // Last update timestamp
  createdAt: number;             // Chart creation timestamp
  metadata?: ChartMetadata;      // Chart-specific metadata (for series, etc.)
  // For time-series charts
  timeRange?: {
    start: number;
    end: number;
    interval: ChartTimePeriod;
  };
}

export interface IntracomInsightAgentInfo {
  id: string;
  insight_id: string;
  name: string;
  description: string;
  prompt: string;
  tools: string[];
  frequency: string;
}

export interface IntracomInsight {
  id: string;
  title: string;
  description: string; // Detailed description from step 2
  solutionIds: string[]; // Tied to solution
  createdAt: number;
  userId: string;
  type: IntracomInsightType;
  overview: string; // Overview from step 1
  tags: string[];
  lastUpdated: number;
  // 
  status: InsightDataStatus;
  implication: string;
  agents?: IntracomInsightAgentInfo[];
  isPrimary?: boolean;
  organizationId: string; // Multi-tenant organization identifier
}

