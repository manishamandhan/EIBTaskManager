export interface ProjectModel {
    projectId: number;
    name: string;
    description: string;
    isDeleted: boolean;
    createdBy: number;
     modifiedBy: number;
    dateCreated: Date;
    dateModified: Date;
}