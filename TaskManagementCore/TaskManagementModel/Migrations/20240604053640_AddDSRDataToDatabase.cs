using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class AddDSRDataToDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DSRDataDetails",
                columns: table => new
                {
                    Serial_No = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ticket_Link = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ticket_Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Time_Started = table.Column<TimeSpan>(type: "time", nullable: false),
                    Estimated_Time = table.Column<int>(type: "int", nullable: false),
                    Time_Completed = table.Column<TimeSpan>(type: "time", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DSRDataDetails", x => x.Serial_No);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DSRDataDetails");
        }
    }
}
