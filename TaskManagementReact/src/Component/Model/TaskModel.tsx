import * as Yup from "yup";

export interface TaskModel {
  tasksId: number;
  name: string;
  description: string;
  status: string;
  isDeleted: boolean;
  createdBy? : number;
  modifiedBy?: number;
  dateCreated: Date;
  dateModified: Date;
  devStartDate: Date;
  devCompleteDate: Date;
  devEstimateDate: Date;
  qaStartDate: Date;
  qaCompleteDate: Date;
  qaEstimateDate: Date;
  ownerId?: number;
  reporteeId?: number;
  assigneeId?: number;
  projectId?: number;
}

export const TaskValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().required("Status is required"),
  isDeleted: Yup.boolean().required("Is Deleted is required"),
  createdBy: Yup.number().required("Created By is required"),
  modifiedBy: Yup.number().required("Modified By is required"),
  dateCreated: Yup.date().required("Date Created is required"),
  dateModified: Yup.date().required("Date Modified is required"),
  devStartDate: Yup.date().required("Development Start Date is required"),
  devCompleteDate: Yup.date().required("Development Complete Date is required"),
  devEstimateDate: Yup.date().required("Development Estimate Date is required"),
  qaStartDate: Yup.date().required("QA Start Date is required"),
  qaCompleteDate: Yup.date().required("QA Complete Date is required"),
  qaEstimateDate: Yup.date().required("QA Estimate Date is required"),
  ownerId: Yup.number().required("Owner ID is required"),
  reporteeId: Yup.number().required("Reportee ID is required"),
  assigneeId: Yup.number().required("Assignee ID is required"),
  projectId: Yup.number().required("Project ID is required"),
});

