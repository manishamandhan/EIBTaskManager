using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class UserToDatabase_4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "picture",
                table: "User",
                newName: "Picture");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "User",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "User",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "designation",
                table: "User",
                newName: "Designation");

            migrationBuilder.RenameColumn(
                name: "updated_by",
                table: "User",
                newName: "PermanentAddress");

            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "User",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "phone_no2",
                table: "User",
                newName: "PhoneNo2");

            migrationBuilder.RenameColumn(
                name: "phone_no1",
                table: "User",
                newName: "PhoneNo1");

            migrationBuilder.RenameColumn(
                name: "permanent_address",
                table: "User",
                newName: "ModifiedBy");

            migrationBuilder.RenameColumn(
                name: "last_name",
                table: "User",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "User",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "hiring_date",
                table: "User",
                newName: "HiringDate");

            migrationBuilder.RenameColumn(
                name: "first_name",
                table: "User",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "dept_id",
                table: "User",
                newName: "DeptId");

            migrationBuilder.RenameColumn(
                name: "date_of_birth",
                table: "User",
                newName: "DateModified");

            migrationBuilder.RenameColumn(
                name: "created_by",
                table: "User",
                newName: "CreatedBy");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "User",
                newName: "DateCreated");

            migrationBuilder.RenameColumn(
                name: "corresponding_address",
                table: "User",
                newName: "CorrespondingAddress");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "User",
                newName: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Picture",
                table: "User",
                newName: "picture");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "User",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "User",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "Designation",
                table: "User",
                newName: "designation");

            migrationBuilder.RenameColumn(
                name: "PhoneNo2",
                table: "User",
                newName: "phone_no2");

            migrationBuilder.RenameColumn(
                name: "PhoneNo1",
                table: "User",
                newName: "phone_no1");

            migrationBuilder.RenameColumn(
                name: "PermanentAddress",
                table: "User",
                newName: "updated_by");

            migrationBuilder.RenameColumn(
                name: "ModifiedBy",
                table: "User",
                newName: "permanent_address");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "User",
                newName: "last_name");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "User",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "HiringDate",
                table: "User",
                newName: "hiring_date");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "User",
                newName: "first_name");

            migrationBuilder.RenameColumn(
                name: "DeptId",
                table: "User",
                newName: "dept_id");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "User",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "DateModified",
                table: "User",
                newName: "date_of_birth");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "User",
                newName: "created_at");

            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "User",
                newName: "created_by");

            migrationBuilder.RenameColumn(
                name: "CorrespondingAddress",
                table: "User",
                newName: "corresponding_address");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "User",
                newName: "id");
        }
    }
}
