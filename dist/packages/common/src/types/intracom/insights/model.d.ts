export type IntracomInsightType = "security" | "catering" | "operational" | "safety" | "maintenance" | "compliance" | "guest-experience" | "parking" | "cleanliness" | "event-operations" | "reputation" | "communication" | "predictive" | "resource" | "knowledge" | "predictive" | "spatial";
export type InsightDataStatus = "active" | "resolved" | "monitoring" | "escalated";
export type ChartTimePeriod = "daily" | "weekly" | "monthly" | "yearly";
export type ChartDataSource = "activities" | "messages" | "both";
export interface StackData {
    value: number;
    valueIds: string[];
}
export interface SeriesData {
    name: string;
    data: {
        value: number;
        valueIds: string[];
        timestamp?: number;
    }[];
}
export interface HeatmapCell {
    location: string;
    timeZone?: string;
    deskType?: string;
    value: number;
    valueIds: string[];
    intensity: number;
}
export interface HeatmapData {
    y_axis: string[];
    x_axis: string[];
    data: {
        [key: string]: HeatmapCell;
    };
}
export interface FunnelStage {
    name: string;
    value: number;
    valueIds: string[];
    percentage?: number;
    dataSource?: ChartDataSource;
}
export interface FunnelData {
    stages: FunnelStage[];
    totalValue: number;
    conversionRates: {
        [stageName: string]: number;
    };
}
export interface PieSlice {
    name: string;
    value: number;
    valueIds: string[];
    percentage?: number;
}
export interface PieData {
    slices: PieSlice[];
    totalValue: number;
}
export interface ChartMetadata {
    stacks?: {
        [stackName: string]: StackData;
    };
    series?: SeriesData[];
    heatmap?: HeatmapData;
    heatmapData?: {
        [key: string]: HeatmapCell;
    };
    funnel?: FunnelData;
    pie?: PieData;
    [key: string]: any;
}
export interface ChartDataPoint {
    id: string;
    label: string;
    value: number;
    valueIds: string[];
    timestamp?: number;
    dataSource?: ChartDataSource;
    metadata?: ChartMetadata;
}
export interface ChartConfig {
    type: 'bar' | 'line' | 'multiLine' | 'pie' | 'donut' | 'histogram' | 'stackedBar' | 'sideBySide' | 'pareto' | 'heatmap' | 'trend' | 'funnel';
    title: string;
    xTitle?: string;
    yTitle?: string;
    description?: string;
    config?: {
        [key: string]: any;
    };
}
export interface UnifiedChartData {
    id: string;
    config: ChartConfig;
    data: ChartDataPoint[];
    lastUpdated: number;
    metadata?: ChartMetadata;
    timeRange?: {
        start: number;
        end: number;
        interval: 'hourly' | 'daily' | 'weekly' | 'monthly';
    };
}
export interface IntracomInsightChart {
    organizationId: string;
    id: string;
    solutionIds: string[];
    chartName: string;
    config: ChartConfig;
    data: ChartDataPoint[];
    timePeriod: ChartTimePeriod;
    dataSource?: ChartDataSource;
    lastUpdated: number;
    createdAt: number;
    metadata?: ChartMetadata;
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
    description: string;
    solutionIds: string[];
    createdAt: number;
    userId: string;
    type: IntracomInsightType;
    overview: string;
    tags: string[];
    lastUpdated: number;
    status: InsightDataStatus;
    implication: string;
    agents?: IntracomInsightAgentInfo[];
    isPrimary?: boolean;
    organizationId: string;
}
//# sourceMappingURL=model.d.ts.map