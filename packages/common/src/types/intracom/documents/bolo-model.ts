export interface MediaFile {
  id: string;
  type: 'video' | 'audio' | 'image';
  url: string;
  thumbnail?: string;
  duration?: number;
  timestamp?: string;
  filename?: string;
  size?: number;
}


export interface BoloSubjectInfo {
  name?: string;
  gender: 'Male' | 'Female' | 'Other';
  race?: string;
  hair?: string;
  facialHair?: string;
  clothing?: string;
  scarsOrMarks?: string;
  disabilities?: string;
  modeOfTransportation?: string;
}

export interface BoloIncidentInfo {
  dateTime: string; // ISO 8601
  location: string;
  incidentDescription?: string;
}

export interface BoloPoliceInvolvement {
  department: string; // e.g. Houston Police Department
  officerName?: string;
  badgeNumber?: string;
  unitNumber?: string;
  incidentNumber?: string;
  arrivalTime?: string; // ISO timestamp
}

export interface BoloRiskProfile {
  boloType: 'Person' | 'Vehicle' | 'Other';
  weaponsInvolved: 'None' | 'Unknown' | 'Firearm' | 'Knife' | 'Other';
  trespassWarningIssued: boolean;
}

export interface IntracomDocumentBolo {
  subject: BoloSubjectInfo;
  incident: BoloIncidentInfo;
  actionsTaken?: string[];
  policeInvolvement?: BoloPoliceInvolvement;
  riskProfile: BoloRiskProfile;
  mediaFiles?: MediaFile[];
}
