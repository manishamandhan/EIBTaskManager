using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class Userdetailstbl : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    First_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Last_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone_no1 = table.Column<int>(type: "int", nullable: true),
                    phone_no2 = table.Column<int>(type: "int", nullable: true),
                    Dept_Id = table.Column<int>(type: "int", nullable: true),
                    Hiring_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Permanent_Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Corresponding_Address = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
