using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class TaskModelToDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Salary");

            migrationBuilder.RenameColumn(
                name: "Phone_no1",
                table: "Users",
                newName: "phone_no1");

            migrationBuilder.RenameColumn(
                name: "Permanent_Address",
                table: "Users",
                newName: "permanent_address");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Users",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Last_name",
                table: "Users",
                newName: "last_name");

            migrationBuilder.RenameColumn(
                name: "Hiring_date",
                table: "Users",
                newName: "hiring_date");

            migrationBuilder.RenameColumn(
                name: "First_name",
                table: "Users",
                newName: "first_name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "Dept_Id",
                table: "Users",
                newName: "dept_id");

            migrationBuilder.RenameColumn(
                name: "Corresponding_Address",
                table: "Users",
                newName: "corresponding_address");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "Users",
                newName: "is_deleted");

            migrationBuilder.AddColumn<DateTime>(
                name: "created_at",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "date_Of_birth",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "designation",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<byte[]>(
                name: "picture",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);

            migrationBuilder.AddColumn<DateTime>(
                name: "updated_at",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "updated_by",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Task",
                columns: table => new
                {
                    taskid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    is_deleted = table.Column<bool>(type: "bit", nullable: false),
                    created_by = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    updated_by = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false),
                    updated_at = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dev_start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dev_complete_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    dev_estimate_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    qa_start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    qa_complete_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    qa_estimate_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    owner = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    projectid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Task", x => x.taskid);
                    table.ForeignKey(
                        name: "FK_Task_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Task_UserId",
                table: "Task",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Task");

            migrationBuilder.DropColumn(
                name: "created_at",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "date_Of_birth",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "designation",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "picture",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "updated_at",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "updated_by",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "phone_no1",
                table: "Users",
                newName: "Phone_no1");

            migrationBuilder.RenameColumn(
                name: "permanent_address",
                table: "Users",
                newName: "Permanent_Address");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Users",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "last_name",
                table: "Users",
                newName: "Last_name");

            migrationBuilder.RenameColumn(
                name: "hiring_date",
                table: "Users",
                newName: "Hiring_date");

            migrationBuilder.RenameColumn(
                name: "first_name",
                table: "Users",
                newName: "First_name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Users",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "dept_id",
                table: "Users",
                newName: "Dept_Id");

            migrationBuilder.RenameColumn(
                name: "corresponding_address",
                table: "Users",
                newName: "Corresponding_Address");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Users",
                newName: "IsDeleted");

            migrationBuilder.CreateTable(
                name: "Salary",
                columns: table => new
                {
                    SalaryModelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    salary = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Salary", x => x.SalaryModelId);
                    table.ForeignKey(
                        name: "FK_Salary_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Salary_UserId",
                table: "Salary",
                column: "UserId");
        }
    }
}
