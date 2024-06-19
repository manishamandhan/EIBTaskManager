﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TaskManagementCore.Data;

#nullable disable

namespace TaskManagementModel.Migrations
{
    [DbContext(typeof(TaskManagementDbContext))]
    [Migration("20240614103551_TaskModelToDatabase")]
    partial class TaskModelToDatabase
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("TaskManagementCore.Models.DSRDetails", b =>
                {
                    b.Property<int>("DSRDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DSRDetailsId"));

                    b.Property<int?>("CreatedBy")
                        .HasColumnType("int");

                    b.Property<DateTime?>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateModified")
                        .HasColumnType("datetime2");

                    b.Property<int>("Estimated_Time")
                        .HasColumnType("int");

                    b.Property<bool?>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<int?>("ModifiedBy")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ticket_Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ticket_Link")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("Time_Completed")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Time_Started")
                        .HasColumnType("datetime2");

                    b.HasKey("DSRDetailsId");

                    b.ToTable("DSRDetails");
                });

            modelBuilder.Entity("TaskManagementModel.Models.DepartmentModel", b =>
                {
                    b.Property<int>("DepartmentModelId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DepartmentModelId"));

                    b.Property<string>("DepartmentName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Designation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("DepartmentModelId");

                    b.HasIndex("UserId");

                    b.ToTable("Department");
                });

            modelBuilder.Entity("TaskManagementModel.Models.TaskModel", b =>
                {
                    b.Property<int>("taskid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("taskid"));

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<DateTime>("created_at")
                        .HasColumnType("datetime2");

                    b.Property<string>("created_by")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("dev_complete_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("dev_estimate_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("dev_start_date")
                        .HasColumnType("datetime2");

                    b.Property<bool>("is_deleted")
                        .HasColumnType("bit");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("owner")
                        .HasColumnType("int");

                    b.Property<int>("projectid")
                        .HasColumnType("int");

                    b.Property<DateTime>("qa_complete_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("qa_estimate_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("qa_start_date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updated_at")
                        .HasColumnType("datetime2");

                    b.Property<string>("updated_by")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("taskid");

                    b.HasIndex("UserId");

                    b.ToTable("Task");
                });

            modelBuilder.Entity("TaskManagementModel.Models.Users", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("corresponding_address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("created_at")
                        .HasColumnType("datetime2");

                    b.Property<string>("created_by")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("date_Of_birth")
                        .HasColumnType("datetime2");

                    b.Property<int?>("dept_id")
                        .HasColumnType("int");

                    b.Property<string>("designation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("first_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("hiring_date")
                        .HasColumnType("datetime2");

                    b.Property<bool>("is_deleted")
                        .HasColumnType("bit");

                    b.Property<string>("last_name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("permanent_address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("phone_no1")
                        .HasColumnType("int");

                    b.Property<int?>("phone_no2")
                        .HasColumnType("int");

                    b.Property<byte[]>("picture")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<DateTime>("updated_at")
                        .HasColumnType("datetime2");

                    b.Property<string>("updated_by")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TaskManagementModel.Models.DepartmentModel", b =>
                {
                    b.HasOne("TaskManagementModel.Models.Users", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("TaskManagementModel.Models.TaskModel", b =>
                {
                    b.HasOne("TaskManagementModel.Models.Users", "Users")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
