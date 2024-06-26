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
    [Migration("20240604130641_DSRDetails")]
    partial class DSRDetails
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
#pragma warning restore 612, 618
        }
    }
}
