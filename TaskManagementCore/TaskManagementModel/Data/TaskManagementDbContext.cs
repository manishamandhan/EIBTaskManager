using TaskManagementCore.Data;
using Microsoft.EntityFrameworkCore;
using TaskManagementCore.Models;
using Microsoft.Extensions.Configuration;
using TaskManagementModel.Models;

namespace TaskManagementCore.Data
{
	public class TaskManagementDbContext : DbContext
	{
		public TaskManagementDbContext(DbContextOptions<TaskManagementDbContext> options) : base(options)
		{
		}

		public TaskManagementDbContext() 
		{
		}

		public DbSet<DSRDetails> DSRDetails { get; set; }
		public DbSet<Users> Users { get; set; }
		public DbSet<DepartmentModel> Department { get; set; }
		//public DbSet<SalaryModel> Salary { get; set; }
		public DbSet<CommentModel> Comment { get; set; }
		//public DbSet<ProjectModel> ProjectModel { get; set; }
		public DbSet<TaskModel> TaskModel { get; set; }
		//public DbSet<TaskStatusModel> TaskStatus { get; set; }



		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			if (!optionsBuilder.IsConfigured)
			{
				var configuration = new ConfigurationBuilder()
				.SetBasePath(Directory.GetCurrentDirectory())
				.AddJsonFile("appsettings.json")
				.Build();

				var connectionString = configuration.GetConnectionString("DefaultConnection");
				optionsBuilder.UseSqlServer(connectionString);
			}
		}

	}
}
