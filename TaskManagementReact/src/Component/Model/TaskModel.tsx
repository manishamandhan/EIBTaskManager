import { ProjectModel } from "./ProjectModel";
import { UserModel } from "./UserModel";


export interface TaskModel {
  taskId: number;
  name: string;
  description: string;
  status : string;
  isDeleted: boolean;
  createdBy: number;
  modifiedBy: number;
  dateCreated: Date;
  dateModified: Date;
  devStartDate: Date;
  devCompleteDate: Date;
  devEstimateDate: Date;
  qaStartDate: Date;
  qaCompleteDate: Date;
  qaEstimateDate: Date;
  ownerId: number;
  // owner : UserModel;
  reporteeId: number;
  // reportee : UserModel;
  assigneeId: number;
  // assignee : UserModel;
  projectId : number;
  // project : ProjectModel
}