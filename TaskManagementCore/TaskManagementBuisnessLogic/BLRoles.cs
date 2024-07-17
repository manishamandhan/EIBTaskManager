using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagementCore.Data;
using TaskManagementModel.Models;

namespace TaskManagementBuisnessLogic
{
	
	public sealed class BLRoles
	{
		private static readonly BLRoles _instance;
		//private static TaskManagementDbContext _context;

		// Explicit static constructor to tell C# compiler
		// not to mark type as beforefieldinit
		static BLRoles()
		{
			_instance = new BLRoles();
		}

		private BLRoles()
		{
		}

		public static BLRoles Instance()
		{
			//_context = context;
			return _instance;
		}


		public DataListMessage<Role> GetAllRoles()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var Roles = _context.Roles.ToList();

					if (Roles != null)
					{
						return new DataListMessage<Role>(ResponseType.Success, Roles, "Role Found");

					}
					else
					{
						return new DataListMessage<Role>(ResponseType.Success, Roles, "No UserRole Found");


					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Role>(ResponseType.Success, null, ex.StackTrace);

			}
		}

		public DataListMessage<Role> GetSelectedAllRoles()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var Roles = _context.Roles.Where(x => x.RoleId != 2).ToList();

					if (Roles != null)
					{
						return new DataListMessage<Role>(ResponseType.Success, Roles, "Role Found");

					}
					else
					{
						return new DataListMessage<Role>(ResponseType.Success, Roles, "No UserRole Found");


					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Role>(ResponseType.Success, null, ex.StackTrace);

			}
		}

		public DataListMessage<Role> GetById(int RoleID)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var Role = _context.Roles.Where(p => p.RoleId == RoleID).ToList();

					if (Role != null)
					{
						return new DataListMessage<Role>(ResponseType.Success, Role, "Roles Found");

					}

					return new DataListMessage<Role>(ResponseType.Exception, Role, "No Roles Found");

				}
			}
			catch (Exception ex)
			{

				return new DataListMessage<Role>(ResponseType.Exception, null, ex.StackTrace);

			}

		}



		public DataMessage<int> Save(Role NewRole)
		{

			try
			{

				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (NewRole != null)
					{
						Role Role = new Role();
						Role.RoleId = NewRole.RoleId;
						Role.RoleName = NewRole.RoleName;

						Role.DateCreated = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time"));

						_context.Roles.Add(Role);

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, Role.RoleId, "Roles Saved");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "No Roles saved ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}

		public DataMessage<int> Update(Role NewRole)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					Role Role = _context.Roles.Where(p => p.RoleId == NewRole.RoleId).FirstOrDefault();

					if (Role != null)
					{

						Role.RoleId = NewRole.RoleId;
						Role.RoleName = NewRole.RoleName;

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, Role.RoleId, "Roles updated");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to update Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "No Role updated ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}
	}
}
