using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class ProjectToDatabase_6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "updated_by",
                table: "Project");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Project",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Project",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "projectid",
                table: "Project",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "Project",
                newName: "DateModified");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Project",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "Project",
                newName: "DateCreated");

            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "Project",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ModifiedBy",
                table: "Project",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Project_CreatedBy",
                table: "Project",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Project_ModifiedBy",
                table: "Project",
                column: "ModifiedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Project_User_CreatedBy",
                table: "Project",
                column: "CreatedBy",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Project_User_ModifiedBy",
                table: "Project",
                column: "ModifiedBy",
                principalTable: "User",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Project_User_CreatedBy",
                table: "Project");

            migrationBuilder.DropForeignKey(
                name: "FK_Project_User_ModifiedBy",
                table: "Project");

            migrationBuilder.DropIndex(
                name: "IX_Project_CreatedBy",
                table: "Project");

            migrationBuilder.DropIndex(
                name: "IX_Project_ModifiedBy",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Project");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Project",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Project",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "Project",
                newName: "projectid");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "Project",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "DateModified",
                table: "Project",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Project",
                newName: "created_at");

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Project",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "updated_by",
                table: "Project",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
