export interface IncidentDetails{
    date:number;
    time:string;
    location:string;
}

export interface WitnessDetails{
    name:string;
    department?:string;
    contact?:string;
}
  
export interface IncidentReport{
    incident_details:IncidentDetails;
    description:string;
    witnesses:WitnessDetails[];
    immediate_actions_taken:string[];
    follow_up_actions:string[];
    additional_notes:string;
}