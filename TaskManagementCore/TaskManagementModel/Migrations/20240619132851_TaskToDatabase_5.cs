using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class TaskToDatabase_5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Task_Project_projectid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_assigneeid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_ownerid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_reporteeid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Task",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "reporteeid",
                table: "Task",
                newName: "ReporteeId");

            migrationBuilder.RenameColumn(
                name: "projectid",
                table: "Task",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "ownerid",
                table: "Task",
                newName: "OwnerId");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Task",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Task",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "assigneeid",
                table: "Task",
                newName: "AssigneeId");

            migrationBuilder.RenameColumn(
                name: "taskid",
                table: "Task",
                newName: "TaskId");

            migrationBuilder.RenameColumn(
                name: "updated_by",
                table: "Task",
                newName: "ModifiedBy");

            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "Task",
                newName: "QaStartDate");

            migrationBuilder.RenameColumn(
                name: "qa_start_date",
                table: "Task",
                newName: "QaEstimateDate");

            migrationBuilder.RenameColumn(
                name: "qa_estimate_date",
                table: "Task",
                newName: "QaCompleteDate");

            migrationBuilder.RenameColumn(
                name: "qa_complete_date",
                table: "Task",
                newName: "DevStartDate");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Task",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "dev_start_date",
                table: "Task",
                newName: "DevEstimateDate");

            migrationBuilder.RenameColumn(
                name: "dev_estimate_date",
                table: "Task",
                newName: "DevCompleteDate");

            migrationBuilder.RenameColumn(
                name: "dev_complete_date",
                table: "Task",
                newName: "DateModified");

            migrationBuilder.RenameColumn(
                name: "created_by",
                table: "Task",
                newName: "CreatedBy");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "Task",
                newName: "DateCreated");

            migrationBuilder.RenameIndex(
                name: "IX_Task_reporteeid",
                table: "Task",
                newName: "IX_Task_ReporteeId");

            migrationBuilder.RenameIndex(
                name: "IX_Task_projectid",
                table: "Task",
                newName: "IX_Task_ProjectId");

            migrationBuilder.RenameIndex(
                name: "IX_Task_ownerid",
                table: "Task",
                newName: "IX_Task_OwnerId");

            migrationBuilder.RenameIndex(
                name: "IX_Task_assigneeid",
                table: "Task",
                newName: "IX_Task_AssigneeId");

            migrationBuilder.RenameIndex(
                name: "IX_Task_updated_by",
                table: "Task",
                newName: "IX_Task_ModifiedBy");

            migrationBuilder.RenameIndex(
                name: "IX_Task_created_by",
                table: "Task",
                newName: "IX_Task_CreatedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_Project_ProjectId",
                table: "Task",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "projectid");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_AssigneeId",
                table: "Task",
                column: "AssigneeId",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_CreatedBy",
                table: "Task",
                column: "CreatedBy",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_ModifiedBy",
                table: "Task",
                column: "ModifiedBy",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_OwnerId",
                table: "Task",
                column: "OwnerId",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_ReporteeId",
                table: "Task",
                column: "ReporteeId",
                principalTable: "User",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Task_Project_ProjectId",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_AssigneeId",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_CreatedBy",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_ModifiedBy",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_OwnerId",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_ReporteeId",
                table: "Task");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Task",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "ReporteeId",
                table: "Task",
                newName: "reporteeid");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "Task",
                newName: "projectid");

            migrationBuilder.RenameColumn(
                name: "OwnerId",
                table: "Task",
                newName: "ownerid");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Task",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Task",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "AssigneeId",
                table: "Task",
                newName: "assigneeid");

            migrationBuilder.RenameColumn(
                name: "TaskId",
                table: "Task",
                newName: "taskid");

            migrationBuilder.RenameColumn(
                name: "QaStartDate",
                table: "Task",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "QaEstimateDate",
                table: "Task",
                newName: "qa_start_date");

            migrationBuilder.RenameColumn(
                name: "QaCompleteDate",
                table: "Task",
                newName: "qa_estimate_date");

            migrationBuilder.RenameColumn(
                name: "ModifiedBy",
                table: "Task",
                newName: "updated_by");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "Task",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "DevStartDate",
                table: "Task",
                newName: "qa_complete_date");

            migrationBuilder.RenameColumn(
                name: "DevEstimateDate",
                table: "Task",
                newName: "dev_start_date");

            migrationBuilder.RenameColumn(
                name: "DevCompleteDate",
                table: "Task",
                newName: "dev_estimate_date");

            migrationBuilder.RenameColumn(
                name: "DateModified",
                table: "Task",
                newName: "dev_complete_date");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Task",
                newName: "created_at");

            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "Task",
                newName: "created_by");

            migrationBuilder.RenameIndex(
                name: "IX_Task_ReporteeId",
                table: "Task",
                newName: "IX_Task_reporteeid");

            migrationBuilder.RenameIndex(
                name: "IX_Task_ProjectId",
                table: "Task",
                newName: "IX_Task_projectid");

            migrationBuilder.RenameIndex(
                name: "IX_Task_OwnerId",
                table: "Task",
                newName: "IX_Task_ownerid");

            migrationBuilder.RenameIndex(
                name: "IX_Task_AssigneeId",
                table: "Task",
                newName: "IX_Task_assigneeid");

            migrationBuilder.RenameIndex(
                name: "IX_Task_ModifiedBy",
                table: "Task",
                newName: "IX_Task_updated_by");

            migrationBuilder.RenameIndex(
                name: "IX_Task_CreatedBy",
                table: "Task",
                newName: "IX_Task_created_by");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_Project_projectid",
                table: "Task",
                column: "projectid",
                principalTable: "Project",
                principalColumn: "projectid");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_assigneeid",
                table: "Task",
                column: "assigneeid",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task",
                column: "created_by",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_ownerid",
                table: "Task",
                column: "ownerid",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_reporteeid",
                table: "Task",
                column: "reporteeid",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task",
                column: "updated_by",
                principalTable: "User",
                principalColumn: "UserId");
        }
    }
}
