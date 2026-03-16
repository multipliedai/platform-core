
export interface WeatherLocation {
  name?: string;
  region?: string;
  country?: string;
}

export interface WeatherCurrent {
  condition?: string;
  temp_c?: number;
  temp_f?: number;
  feelslike_c?: number;
  feelslike_f?: number;
  humidity?: number;
  wind_kph?: number;
  wind_mph?: number;
  uv?: number;
  air_quality?: Record<string, any>;
}

export interface WeatherForecastDay {
  date?: string;
  condition?: string;
  max_temp_c?: number;
  min_temp_c?: number;
  max_temp_f?: number;
  min_temp_f?: number;
  daily_chance_of_rain?: number | string;
  daily_chance_of_snow?: number | string;
}

export interface WeatherAlert {
  headline?: string;
  severity?: string;
  effective?: string;
  expires?: string;
  description?: string;
  areas?: string;
  event?: string;
  category?: string;
}

export interface WeatherReport {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: WeatherForecastDay[];
  alerts: WeatherAlert[];
}

export interface IntracomPreShiftSummary {
  id: string;
  shiftConfig?:{
    shiftType: "shift_1" | "shift_2" | "shift_3"; //Shift 1: 7am-3pm, Shift 2: 3pm-11pm, Shift 3: 11pm-7am
    startTime: number; 
    endTime: number;   
  }
  solutionId: string;
  date: number;
  createdAt: number;
  lastUpdated: number;
  userId?: string;
  organizationId: string; // Multi-tenant organization identifier
  publishingStatus?: "published" | "unpublished" | "reviewed";
  highlights?: string[];
  previous_shift_activity_highlights?: {
    highlight?: string;
    incidentIds?: string[];
  }[];
  weather_report?: WeatherReport;
  events?: {
    id?: string;
    name?: string;
    description?: string;
    location?: string;
    place?: string;
    time?: string;
    duration?: string;
    relatedEventId?: string;
    relatedEventPlanIds?: string[];
  }[];
  securityPostOrders?: {
    postName?: string;
    description?: string;
    location?: string;
    relatedSecurityPostOrderIds?: string[];
  }[];
  audio: {
    formal: {
      url: string;
      duration_sec: number;
      text: string;
    };
    rap: {
      url: string;
      duration_sec: number;
      text?: string;
    };
    spanish?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
    spanish_rap?: {
      url: string;
      duration_sec: number;
      text?: string;
    };
  };
  shared?: boolean;
  relatedEventIds?: string[];     // intracom calendar ids
  relatedIncidentIds?: string[];  
  relatedSignalIds?: string[];    // intracom signal ids
  relatedEventPlanIds?: string[];  // intracom document ids
  relatedSecurityPostOrderIds?: string[];  // intracom document ids
}
