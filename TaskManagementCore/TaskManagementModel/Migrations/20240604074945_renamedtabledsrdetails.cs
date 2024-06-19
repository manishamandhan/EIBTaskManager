using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class renamedtabledsrdetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DSRDataDetails",
                table: "DSRDataDetails");

            migrationBuilder.RenameTable(
                name: "DSRDataDetails",
                newName: "DSRDetails");

            migrationBuilder.RenameColumn(
                name: "Serial_No",
                table: "DSRDetails",
                newName: "DSRDetailsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DSRDetails",
                table: "DSRDetails",
                column: "DSRDetailsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DSRDetails",
                table: "DSRDetails");

            migrationBuilder.RenameTable(
                name: "DSRDetails",
                newName: "DSRDataDetails");

            migrationBuilder.RenameColumn(
                name: "DSRDetailsId",
                table: "DSRDataDetails",
                newName: "Serial_No");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DSRDataDetails",
                table: "DSRDataDetails",
                column: "Serial_No");
        }
    }
}
