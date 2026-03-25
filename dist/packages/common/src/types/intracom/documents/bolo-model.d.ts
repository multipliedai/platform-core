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
    dateTime: string;
    location: string;
    incidentDescription?: string;
}
export interface BoloPoliceInvolvement {
    department: string;
    officerName?: string;
    badgeNumber?: string;
    unitNumber?: string;
    incidentNumber?: string;
    arrivalTime?: string;
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
//# sourceMappingURL=bolo-model.d.ts.map