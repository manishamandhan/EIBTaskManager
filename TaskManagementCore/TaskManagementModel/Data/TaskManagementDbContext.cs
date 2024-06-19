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
		public DbSet<User> User { get; set; }
		public DbSet<Department> Department { get; set; }
		//public DbSet<SalaryModel> Salary { get; set; }
		public DbSet<Comment> Comment { get; set; }

		public DbSet<Project> Project { get; set; }
		public DbSet<TaskManagementModel.Models.Task> Task { get; set; }
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
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			if (modelBuilder == null)
				throw new ArgumentNullException("modelBuilder");

			// for the other conventions, we do a metadata model loop
			foreach (var entityType in modelBuilder.Model.GetEntityTypes())
			{
				// equivalent of modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
				entityType.SetTableName(entityType.DisplayName());

				// equivalent of modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
				entityType.GetForeignKeys()
					.Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade)
					.ToList()
					.ForEach(fk => fk.DeleteBehavior = DeleteBehavior.NoAction);
			}

		}
	}
}
