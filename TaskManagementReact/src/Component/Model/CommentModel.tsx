export interface CommentModel {
    commentId: number;
    values: string;
    isDeleted: boolean;
    createdBy: number;
    modifiedBy: number;
    dateCreated: Date;
    dateModified: Date;
    tasksId: number;
}