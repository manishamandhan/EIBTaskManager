using TaskManagementCore.Data;
using TaskManagementModel.Models;
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
					var usermodel = _context.User.ToList();
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
					var userid = _context.User.Where(p => p.id == userId).FirstOrDefault();
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
					var userdetail = _context.User.Find(item.id);
					if (userdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						userdetail.is_deleted = !userdetail.is_deleted;
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
					var updateduser = _context.User.Where(c => c.id == newuser.id).FirstOrDefault();
					if (updateduser != null)
					{
						updateduser.first_name = newuser.first_name;
						updateduser.last_name = newuser.last_name;
						updateduser.email = newuser.email;
						updateduser.phone_no1 = newuser.phone_no1;
						updateduser.phone_no2 = newuser.phone_no2;
						updateduser.dept_id = newuser.dept_id;
						updateduser.corresponding_address = newuser.corresponding_address;
						updateduser.date_of_birth = newuser.date_of_birth;
						updateduser.designation = newuser.designation;
						updateduser.hiring_date = newuser.hiring_date;
						updateduser.permanent_address = newuser.permanent_address;
						updateduser.created_by = newuser.created_by;
						updateduser.updated_by = newuser.updated_by;
						updateduser.created_at = newuser.created_at;
						updateduser.updated_at = newuser.updated_at;

						updateduser.is_deleted = false;
						

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updateduser.id, "Data Saved");

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
						SavedData.first_name = newuser.first_name;
						SavedData.last_name = newuser.last_name;
						SavedData.email = newuser.email;
						SavedData.phone_no1 = newuser.phone_no1;
						SavedData.phone_no2 = newuser.phone_no2;
						SavedData.dept_id = newuser.dept_id;
						SavedData.corresponding_address = newuser.corresponding_address;
						SavedData.date_of_birth = newuser.date_of_birth;
						SavedData.designation = newuser.designation;
						SavedData.hiring_date = newuser.hiring_date;
						SavedData.permanent_address = newuser.permanent_address;
						SavedData.created_by = newuser.created_by;
						SavedData.updated_by = newuser.updated_by;
						SavedData.created_at = newuser.created_at;
						SavedData.updated_at = newuser.updated_at;
						_context.User.Add(newuser);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.id, "Data Saved");

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
	}
	






}

