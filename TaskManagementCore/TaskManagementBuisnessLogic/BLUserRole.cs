using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagementCore.Data;
using TaskManagementModel.Models;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLUserRole
	{
		private static readonly BLUserRole _instance;
		
		static BLUserRole()
		{
			_instance = new BLUserRole();
		}


		public static BLUserRole Instance()
		{
			
			return _instance;
		}
		public DataListMessage<UserRole> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var UserRoles = _context.UserRoles.ToList();

					if (UserRoles != null)
					{
						return new DataListMessage<UserRole>(ResponseType.Success, UserRoles, "UserRole Found");

					}
					else
					{
						return new DataListMessage<UserRole>(ResponseType.Success, UserRoles, "No UserRole Found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<UserRole>(ResponseType.Success, null, ex.StackTrace);

			}
		}


		public DataListMessage<UserRole> GetByUserId(int userid)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var UserRole = _context.UserRoles.Where(p => p.UserId == userid).ToList();

					if (UserRole != null)
					{
						return new DataListMessage<UserRole>(ResponseType.Success, UserRole, "User Roles Found");

					}

					return new DataListMessage<UserRole>(ResponseType.Exception, UserRole, "No Roles Found");

				}
			}
			catch (Exception ex)
			{

				return new DataListMessage<UserRole>(ResponseType.Exception, null, ex.StackTrace);

			}

		}

		public DataListMessage<UserRole> GetById(int UserRoleID)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var UserRole = _context.UserRoles.Where(p => p.UserRoleId == UserRoleID).ToList();

					if (UserRole != null)
					{
						return new DataListMessage<UserRole>(ResponseType.Success, UserRole, "User Roles Found");

					}

					return new DataListMessage<UserRole>(ResponseType.Exception, UserRole, "No Roles Found");

				}
			}
			catch (Exception ex)
			{

				return new DataListMessage<UserRole>(ResponseType.Exception, null, ex.StackTrace);

			}

		}



		public DataMessage<int> Save(UserRole NewuserRole)
		{

			try
			{

				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (NewuserRole != null)
					{
						UserRole userRole = new UserRole();

						userRole.UserId = NewuserRole.UserId;
						userRole.RoleId = NewuserRole.RoleId;
						userRole.AddedBy = NewuserRole.ModifiedBy;
						userRole.DateCreated = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time"));
						userRole.DateModified = null;
						userRole.ModifiedBy = NewuserRole.ModifiedBy;

						_context.UserRoles.Add(userRole);

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, userRole.UserRoleId, "User Roles Saved");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save User Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "User Roles are Empty ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}

		public DataMessage<int> SaveById(int userid, int roleid, int LoggedInUserid)
		{

			try
			{

				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (userid != 0)
					{
						UserRole userRole = new UserRole();
						userRole.UserId = userid;
						userRole.RoleId = roleid;
						userRole.AddedBy = LoggedInUserid;
						userRole.DateCreated = null;

						_context.UserRoles.Add(userRole);

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, userRole.UserRoleId, "User Roles Saved");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save User Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "User Roles are Empty ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}

		public DataMessage<int> Update(UserRole NewuserRole)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					UserRole userRole = _context.UserRoles.Where(p => p.UserRoleId == NewuserRole.UserRoleId).FirstOrDefault();

					if (NewuserRole != null)
					{

						userRole.UserId = NewuserRole.UserId;
						userRole.RoleId = NewuserRole.RoleId;
						userRole.ModifiedBy = NewuserRole.ModifiedBy;
						userRole.DateModified = NewuserRole.DateModified;

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, userRole.UserRoleId, "User Roles updated");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to update User Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "No User Role updated ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}

		public DataMessage<int> UpdateById(int userid, int roleid, int LoggedInUserid)
		{

			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					UserRole userRole = _context.UserRoles.Where(p => p.RoleId == roleid).FirstOrDefault();

					if (roleid != 0)
					{

						userRole.UserId = userid;
						userRole.RoleId = roleid;
						userRole.ModifiedBy = LoggedInUserid;
						userRole.DateModified = TimeZoneInfo.ConvertTime(DateTime.Now, TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time"));

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, userRole.UserRoleId, "User Roles updated");

						}
						else
						{
							return new DataMessage<int>(ResponseType.Failed, 0, "Unable to update User Role");

						}

					}

					return new DataMessage<int>(ResponseType.Failed, 0, "No User Role updated ");

				}
			}
			catch (Exception ex)
			{

				return new DataMessage<int>(ResponseType.Exception, 0, ex.StackTrace);

			}

		}

	}
}
