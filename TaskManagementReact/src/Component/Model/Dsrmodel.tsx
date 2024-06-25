export interface Dsrmodel {

  dsrDetailsId: number;
  ticket_Link?: string;
  ticket_Description?: string;
  time_Started: Date;
  estimated_Time: number;
  time_Completed?: Date;
  status?: string;
  notes?: string;
  createdBy?: number;
  modifiedBy?: number;
  dateCreated?: string;
  dateModified?: string;
  isDeleted?: boolean;
}