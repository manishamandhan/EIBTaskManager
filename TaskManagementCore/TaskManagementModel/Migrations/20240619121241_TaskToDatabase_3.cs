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
                name: "FK_Task_User_UserId",
                table: "Task");

            migrationBuilder.RenameColumn(
                name: "owner",
                table: "Task",
                newName: "reporteeid");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Task",
                newName: "ownerid");

            migrationBuilder.RenameIndex(
                name: "IX_Task_UserId",
                table: "Task",
                newName: "IX_Task_ownerid");

            migrationBuilder.AlterColumn<byte[]>(
                name: "picture",
                table: "User",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)");

            migrationBuilder.AlterColumn<string>(
                name: "phone_no2",
                table: "User",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "phone_no1",
                table: "User",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "permanent_address",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "first_name",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "updated_by",
                table: "Task",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "created_by",
                table: "Task",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "assigneeid",
                table: "Task",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "status",
                table: "Task",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Task_assigneeid",
                table: "Task",
                column: "assigneeid");

            migrationBuilder.CreateIndex(
                name: "IX_Task_created_by",
                table: "Task",
                column: "created_by");

            migrationBuilder.CreateIndex(
                name: "IX_Task_projectid",
                table: "Task",
                column: "projectid");

            migrationBuilder.CreateIndex(
                name: "IX_Task_reporteeid",
                table: "Task",
                column: "reporteeid");

            migrationBuilder.CreateIndex(
                name: "IX_Task_updated_by",
                table: "Task",
                column: "updated_by");

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
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_created_by",
                table: "Task",
                column: "created_by",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_ownerid",
                table: "Task",
                column: "ownerid",
                principalTable: "User",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_reporteeid",
                table: "Task",
                column: "reporteeid",
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

            migrationBuilder.DropIndex(
                name: "IX_Task_assigneeid",
                table: "Task");

            migrationBuilder.DropIndex(
                name: "IX_Task_created_by",
                table: "Task");

            migrationBuilder.DropIndex(
                name: "IX_Task_projectid",
                table: "Task");

            migrationBuilder.DropIndex(
                name: "IX_Task_reporteeid",
                table: "Task");

            migrationBuilder.DropIndex(
                name: "IX_Task_updated_by",
                table: "Task");

            migrationBuilder.DropColumn(
                name: "assigneeid",
                table: "Task");

            migrationBuilder.DropColumn(
                name: "status",
                table: "Task");

            migrationBuilder.RenameColumn(
                name: "reporteeid",
                table: "Task",
                newName: "owner");

            migrationBuilder.RenameColumn(
                name: "ownerid",
                table: "Task",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Task_ownerid",
                table: "Task",
                newName: "IX_Task_UserId");

            migrationBuilder.AlterColumn<byte[]>(
                name: "picture",
                table: "User",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0],
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "phone_no2",
                table: "User",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "phone_no1",
                table: "User",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "permanent_address",
                table: "User",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "first_name",
                table: "User",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "updated_by",
                table: "Task",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "created_by",
                table: "Task",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment",
                column: "userid",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Department_User_UserId",
                table: "Department",
                column: "UserId",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Task_User_UserId",
                table: "Task",
                column: "UserId",
                principalTable: "User",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
