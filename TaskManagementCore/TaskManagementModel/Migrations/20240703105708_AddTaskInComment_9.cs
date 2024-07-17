using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class AddTaskInComment_9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TaskId",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_TaskId",
                table: "Comment",
                column: "TaskId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_Task_TaskId",
                table: "Comment",
                column: "TaskId",
                principalTable: "Task",
                principalColumn: "TaskId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_Task_TaskId",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_TaskId",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "TaskId",
                table: "Comment");
        }
    }
}
