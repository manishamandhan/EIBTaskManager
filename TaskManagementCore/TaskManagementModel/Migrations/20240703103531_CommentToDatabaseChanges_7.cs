using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagementModel.Migrations
{
    /// <inheritdoc />
    public partial class CommentToDatabaseChanges_7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "updated_by",
                table: "Comment");

            migrationBuilder.RenameColumn(
                name: "userid",
                table: "Comment",
                newName: "ModifiedBy");

            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "Comment",
                newName: "DateModified");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Comment",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "Comment",
                newName: "DateCreated");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_userid",
                table: "Comment",
                newName: "IX_Comment_ModifiedBy");

            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "Comment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comment_CreatedBy",
                table: "Comment",
                column: "CreatedBy");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_CreatedBy",
                table: "Comment",
                column: "CreatedBy",
                principalTable: "User",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_ModifiedBy",
                table: "Comment",
                column: "ModifiedBy",
                principalTable: "User",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comment_User_CreatedBy",
                table: "Comment");

            migrationBuilder.DropForeignKey(
                name: "FK_Comment_User_ModifiedBy",
                table: "Comment");

            migrationBuilder.DropIndex(
                name: "IX_Comment_CreatedBy",
                table: "Comment");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Comment");

            migrationBuilder.RenameColumn(
                name: "ModifiedBy",
                table: "Comment",
                newName: "userid");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "Comment",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "DateModified",
                table: "Comment",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Comment",
                newName: "created_at");

            migrationBuilder.RenameIndex(
                name: "IX_Comment_ModifiedBy",
                table: "Comment",
                newName: "IX_Comment_userid");

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Comment",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "updated_by",
                table: "Comment",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Comment_User_userid",
                table: "Comment",
                column: "userid",
                principalTable: "User",
                principalColumn: "UserId");
        }
    }
}
