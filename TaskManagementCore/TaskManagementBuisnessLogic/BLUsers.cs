using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

		

		public  DataListMessage<Users> GetAll()
		{
			try
			{
				using(TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var usermodel = _context.Users.ToList();
					if(usermodel != null)
					{
						return new DataListMessage<Users>(ResponseType.Success, usermodel, "Model Found");
					}
					else
					{
						return new DataListMessage<Users>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Users>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<Users> GetById(int userId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var userid = _context.Users.Where(p => p.UserId == userId).FirstOrDefault();
					if (userid != null)
					{
						return new DataMessage<Users>(ResponseType.Success, userid, "Id Details Found");

					}
					else
					{

						return new DataMessage<Users>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<Users>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(Users item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var userdetail = _context.Users.Find(item.UserId);
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

		public DataMessage<int> Update(Users newuser)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updateduser = _context.Users.Where(c => c.UserId == newuser.UserId).FirstOrDefault();
					if (updateduser != null)
					{
						updateduser.first_name = newuser.first_name;
						updateduser.last_name = newuser.last_name;

						updateduser.email = newuser.email;
						updateduser.phone_no1 = newuser.phone_no1;
						updateduser.phone_no2 = newuser.phone_no2;
						updateduser.dept_id = newuser.dept_id;
						updateduser.corresponding_address = newuser.corresponding_address;
						updateduser.is_deleted = false;
						updateduser.hiring_date = updateduser.hiring_date;

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

		public  DataMessage<int> Save(Users newuser)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newuser != null)
					{
						Users SavedData = new Users();
						SavedData.first_name = newuser.first_name;
						SavedData.last_name = newuser.last_name;

						SavedData.email = newuser.email;
						SavedData.phone_no1 = newuser.phone_no1;
						SavedData.phone_no2 = newuser.phone_no2;
						SavedData.dept_id = newuser.dept_id;
						SavedData.corresponding_address = newuser.corresponding_address;
						SavedData.is_deleted = false;
						SavedData.hiring_date = SavedData.hiring_date;
						_context.Users.Add(newuser);

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
	}
	






}

