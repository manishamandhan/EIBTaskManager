using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class TaskToDatabase_3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Department_User_UserId",
                table: "Department");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_assignee",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_owner",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_projectid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_reportee",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment",
                column: "userid",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Department_User_UserId",
                table: "Department",
                column: "UserId",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_assignee",
                table: "Task",
                column: "assignee",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task",
                column: "created_by",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_owner",
                table: "Task",
                column: "owner",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_projectid",
                table: "Task",
                column: "projectid",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_reportee",
                table: "Task",
                column: "reportee",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task",
                column: "updated_by",
                principalTable: "User",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Department_User_UserId",
                table: "Department");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_assignee",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_owner",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_projectid",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_reportee",
                table: "Task");

            migrationBuilder.DropForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment",
                column: "userid",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Department_User_UserId",
                table: "Department",
                column: "UserId",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_assignee",
                table: "Task",
                column: "assignee",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task",
                column: "created_by",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_owner",
                table: "Task",
                column: "owner",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_projectid",
                table: "Task",
                column: "projectid",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_reportee",
                table: "Task",
                column: "reportee",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_updated_by",
                table: "Task",
                column: "updated_by",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}
