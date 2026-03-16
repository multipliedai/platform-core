export type InspectionStatus = "Pass" | "Fail" | "N/A";

export interface InspectionItem {
  status: InspectionStatus;     
  notes?: string;              
}

export interface GolfCartModel {
  driverName: string;
  cartAssignment: string;       
  shiftType: "shift_1" | "shift_2" | "shift_3";           
  date: number;                

  inspectionChecklist: {
    fuelLevel: InspectionItem;
    tirePressure: InspectionItem;
    conditionOfTires: InspectionItem;
    conditionOfSeatsRoofBody: InspectionItem;
    steeringCondition: InspectionItem;
    conditionOfBrakes: InspectionItem;
    lightsAndSignals: InspectionItem; 
    hornCondition: InspectionItem;
    keys: InspectionItem;
    overallCondition: InspectionItem;
  };

  additionalNotes?: string;
}