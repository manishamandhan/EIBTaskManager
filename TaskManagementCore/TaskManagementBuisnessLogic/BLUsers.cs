using Microsoft.EntityFrameworkCore;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using TaskManagementModel.Models.StoredProcedureModels;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLUsers
	{
				
		private static readonly BLUsers _instance;

		static BLUsers()
		{
			_instance = new BLUsers();
		}
		//private BLUsers()
		//{
		//}
		public static BLUsers Instance()
		{
			return _instance;
		}

		

		public  DataListMessage<User> GetAll()
		{
			try
			{
				using(TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var usermodel = _context.User.Include(d => d.Department).ToList();
					if(usermodel != null)
					{
						return new DataListMessage<User>(ResponseType.Success, usermodel, "Model Found");
					}
					else
					{
						return new DataListMessage<User>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<User>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<User> GetById(int userId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					//var userid = _context.User.Where(p => p.UserId == userId).FirstOrDefault();
					var userid = _context.User.Include(d => d.Department).Where(p => p.UserId == userId).FirstOrDefault();
					if (userid != null)
					{
						return new DataMessage<User>(ResponseType.Success, userid, "Id Details Found");

					}
					else
					{

						return new DataMessage<User>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<User>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(User item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var userdetail = _context.User.Find(item.UserId);
					if (userdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						userdetail.IsDeleted = !userdetail.IsDeleted;
						_context.SaveChanges();
						return new stringMessage("", ResponseType.Success);
					}

				}
			}
			catch (Exception ex)
			{

				return new stringMessage(ex.Message, ResponseType.Exception);
			}
		}

		public DataMessage<int> Update(User newuser)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updateduser = _context.User.Where(c => c.UserId == newuser.UserId).FirstOrDefault();
					if (updateduser != null)
					{
						updateduser.Picture = newuser.Picture;
						updateduser.FirstName = newuser.FirstName;
						updateduser.LastName = newuser.LastName;
						updateduser.Email = newuser.Email;
						updateduser.Password = newuser.Password;
						updateduser.PhoneNo1 = newuser.PhoneNo1;
						updateduser.PhoneNo2 = newuser.PhoneNo2;
						updateduser.DepartmentID = newuser.DepartmentID;
						updateduser.CorrespondingAddress = newuser.CorrespondingAddress;
						updateduser.DateOfBirth = newuser.DateOfBirth;
						updateduser.Designation = newuser.Designation;
						updateduser.HiringDate = newuser.HiringDate;
						updateduser.PermanentAddress = newuser.PermanentAddress;
						updateduser.CreatedBy = newuser.CreatedBy;
						updateduser.ModifiedBy = newuser.ModifiedBy;
						updateduser.DateCreated = newuser.DateCreated;
						updateduser.DateModified = newuser.DateModified;

						updateduser.IsDeleted = false;
						

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updateduser.UserId, "Data Saved");

						}

					} 
					return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save the Data");

				}
			}
			catch (Exception ex)
			{
				return new DataMessage<int>(ResponseType.Exception, 0, ex.Message.ToString());

			}


		}

		public  DataMessage<int> Save(User newuser)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newuser != null)
					{
						User SavedData = new User();
						SavedData.Picture = newuser.Picture;
						SavedData.FirstName = newuser.FirstName;
						SavedData.LastName = newuser.LastName;
						SavedData.Email = newuser.Email;
						SavedData.Password = newuser.Password;
						SavedData.PhoneNo1 = newuser.PhoneNo1;
						SavedData.PhoneNo2 = newuser.PhoneNo2;
						SavedData.DepartmentID = newuser.DepartmentID;
						SavedData.CorrespondingAddress = newuser.CorrespondingAddress;
						SavedData.DateOfBirth = newuser.DateOfBirth;
						SavedData.Designation = newuser.Designation;
						SavedData.HiringDate = newuser.HiringDate;
						SavedData.PermanentAddress = newuser.PermanentAddress;
						SavedData.CreatedBy = newuser.CreatedBy;
						SavedData.ModifiedBy = newuser.ModifiedBy;
						SavedData.DateCreated = newuser.DateCreated;
						SavedData.DateModified = newuser.DateModified;
						_context.User.Add(SavedData);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.UserId, "Data Saved");

						}
						
						

					}
                    return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save the Data");

                }

            }
			catch (Exception ex)
			{
				return new DataMessage<int>(ResponseType.Exception, 0, ex.Message.ToString());

			}


		}
		public DataMessage<getUserdetailByUserId> Authenticate(string UserName, string password)
		{

			// var User = _context.Users.Where(p => p.Username == UserName && p.Userpassword == password).FirstOrDefault();
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var User = _context.User.Where(p => (p.FirstName == UserName || p.Email == UserName) && p.IsDeleted == false).FirstOrDefault();
					// var User = _context.GetUserRoles(UserName, password).FirstOrDefault();

					//if (User != null && BCrypt.Net.BCrypt.Verify(password, User.Password))
					if (User != null && password.Equals(User.Password))
					{

						var userDetails = GetUserDetails(User.UserId);
						if (userDetails.Resp == ResponseType.Success)
						{
							return new DataMessage<getUserdetailByUserId>(ResponseType.Success, userDetails.Data, "User Found");
						}
						return new DataMessage<getUserdetailByUserId>(ResponseType.Failed, null, "no user found");


					}
					else
					{

						return new DataMessage<getUserdetailByUserId>(ResponseType.Failed, null, "no user found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<getUserdetailByUserId>(ResponseType.Failed, null, ex.StackTrace);
			}

		}
		public DataMessage<getUserdetailByUserId> GetUserDetails(int userid)
		{

			try
			{

				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{


					var userRoles = _context.getUserdetailByUserId.FromSqlRaw("Exec getUserdetailByUserId {0}", userid).ToList().FirstOrDefault();

					if (userRoles != null)
					{
						return new DataMessage<getUserdetailByUserId>(ResponseType.Success, userRoles, "Users Found");

					}

					return new DataMessage<getUserdetailByUserId>(ResponseType.Exception, null, "No Data Found");

				}
			}
			catch (Exception ex)
			{
				return new DataMessage<getUserdetailByUserId>(ResponseType.Exception, null, ex.StackTrace);

			}

		}
		//public DataMessage<User> getByAPIToken(string APIToken)
		//{
		//	try
		//	{
		//		using (TaskManagementDbContext _context = new TaskManagementDbContext())
		//		{
		//			var partnerinformation = _context.User.Where(p => p.APIToken.ToString() == APIToken).FirstOrDefault();

		//			if (partnerinformation != null)
		//			{
		//				return new DataMessage<User>(ResponseType.Success, partnerinformation, "Data Found");

		//			}
		//			else
		//			{

		//				return new DataMessage<User>(ResponseType.Exception, null, "No Data found");

		//			}
		//		}
		//	}
		//	catch (Exception ex)
		//	{
		//		return new DataMessage<User>(ResponseType.Exception, null, ex.Message.ToString());

		//	}
		//}
	}
	






}

