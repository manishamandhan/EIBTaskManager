using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class departmentcreatedmodifieddeleted_10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Department_User_ModifiedBy",
                table: "Department");

            migrationBuilder.DropIndex(
                name: "IX_Department_ModifiedBy",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Department");

            migrationBuilder.DropColumn(
                name: "ModifiedBy",
                table: "Department");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "Department",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ModifiedBy",
                table: "Department",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Department_ModifiedBy",
                table: "Department",
                column: "ModifiedBy",
                unique: true,
                filter: "[ModifiedBy] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Department_User_ModifiedBy",
                table: "Department",
                column: "ModifiedBy",
                principalTable: "User",
                principalColumn: "UserId");
        }
    }
}
