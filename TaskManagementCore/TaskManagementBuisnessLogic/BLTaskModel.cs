using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLTaskModel
	{
		private static readonly BLTaskModel _instance;
		static BLTaskModel()
		{
			_instance = new BLTaskModel();
		}
		public static BLTaskModel Instance() { return _instance; }


		public DataListMessage<TaskModel> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskmodel = _context.TaskModel.ToList();
					if (taskmodel != null)
					{
						return new DataListMessage<TaskModel>(ResponseType.Success, taskmodel, "Data Found");
					}
					else
					{
						return new DataListMessage<TaskModel>(ResponseType.Exception, null, "No Data Found");
					}
				}

			}
			catch (Exception ex)
			{
				return new DataListMessage<TaskModel>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}
		public DataMessage<int> Update(TaskModel newtask)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedtask = _context.TaskModel.Where(c => c.taskid == newtask.taskid).FirstOrDefault();
					if (updatedtask != null)
					{
						updatedtask.name = newtask.name;
						updatedtask.description = newtask.description;
						updatedtask.is_deleted = newtask.is_deleted;
						updatedtask.created_by = newtask.created_by;
						updatedtask.updated_by = newtask.updated_by;
						updatedtask.created_by = newtask.created_by;
						updatedtask.created_at = newtask.created_at;
						updatedtask.updated_at = newtask.updated_at;
						updatedtask.dev_start_date = newtask.dev_start_date;
						updatedtask.dev_complete_date = newtask.dev_complete_date;
						updatedtask.dev_estimate_date = newtask.dev_estimate_date;
						updatedtask.qa_start_date = newtask.qa_start_date;
						updatedtask.qa_complete_date = newtask.qa_complete_date;
						updatedtask.qa_estimate_date = newtask.qa_estimate_date;
						updatedtask.owner = newtask.owner;

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedtask.UserId, "Data Saved");
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
		public DataMessage<int> Save (TaskModel newtask)
		{
			try
			{
				using(TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var savedtask = _context.TaskModel.Where(c => c.taskid == newtask.taskid).FirstOrDefault();
                    if ( savedtask != null)
                    {
						savedtask.name = newtask.name;
						savedtask.description = newtask.description;
						savedtask.is_deleted = newtask.is_deleted;
						savedtask.created_by = newtask.created_by;
						savedtask.updated_by = newtask.updated_by;
						savedtask.created_by = newtask.created_by;
						savedtask.created_at = newtask.created_at;
						savedtask.updated_at = newtask.updated_at;
						savedtask.dev_start_date = newtask.dev_start_date;
						savedtask.dev_complete_date = newtask.dev_complete_date;
						savedtask.dev_estimate_date = newtask.dev_estimate_date;
						savedtask.qa_start_date = newtask.qa_start_date;
						savedtask.qa_complete_date = newtask.qa_complete_date;
						savedtask.qa_estimate_date = newtask.qa_estimate_date;
						savedtask.owner = newtask.owner;
						_context.TaskModel.Add(newtask);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, savedtask.UserId, "Data Saved");

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
		public stringMessage Delete(TaskModel item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskdetails = _context.TaskModel.Find(item.taskid);
					if(taskdetails == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);


					}
					else
					{
						taskdetails.is_deleted = !taskdetails.is_deleted;
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

	} 
	
}


