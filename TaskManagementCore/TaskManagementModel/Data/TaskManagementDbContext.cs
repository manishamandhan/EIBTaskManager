using Microsoft.EntityFrameworkCore;
using TaskManagementCore.Models;
using Microsoft.Extensions.Configuration;
using TaskManagementModel.Models;
using TaskManagementModel.Models.StoredProcedureModels;

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
		public DbSet<Comment> Comment { get; set; }
		public DbSet<Project> Project { get; set; }
		public DbSet<Tasks> Task { get; set; }
		public DbSet<Department> Department { get; set; }
		public DbSet<getOwnerTasks> getOwnerTasks { get; set; } = null!;
		public DbSet<getTasks> getTasks { get; set; } = null!;
		public virtual DbSet<UserRole> UserRoles { get; set; } = null!;
		public virtual DbSet<Role> Roles { get; set; } = null!;
		public DbSet<getUserdetailByUserId> getUserdetailByUserId { get; set; } = null!;

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
				entityType.GetForeignKeys().Where(fk => !fk.IsOwnership && fk.DeleteBehavior == DeleteBehavior.Cascade).ToList().ForEach(fk => fk.DeleteBehavior = DeleteBehavior.NoAction);
			}
			modelBuilder.Entity<getOwnerTasks>(entity =>
			{
				entity.ToTable("MyDummygetOwnerTasks", t => t.ExcludeFromMigrations())
					.HasNoKey();
			});
			modelBuilder.Entity<getTasks>(entity =>
			{
				entity.ToTable("MyDummygetTasks", t => t.ExcludeFromMigrations())
					.HasNoKey();
			});
			modelBuilder.Entity<getUserdetailByUserId>(entity =>
			{
				entity.ToTable("MyDummygetUserdetailByUserId", t => t.ExcludeFromMigrations())
					.HasNoKey();
			});

		}

		
	}
}
