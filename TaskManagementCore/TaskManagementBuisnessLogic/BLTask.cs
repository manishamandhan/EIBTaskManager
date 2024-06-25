using Microsoft.EntityFrameworkCore;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLTask
	{
		private static readonly BLTask _instance;
		static BLTask()
		{
			_instance = new BLTask();
		}
		public static BLTask Instance() { return _instance; }


		public DataListMessage<TaskManagementModel.Models.Task> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskmodel = _context.Task.Include(p => p.Owner).Include(p =>p.Project).ToList();
					if (taskmodel != null)
					{
						return new DataListMessage<TaskManagementModel.Models.Task>(ResponseType.Success, taskmodel, "Data Found");
					}
					else
					{
						return new DataListMessage<TaskManagementModel.Models.Task>(ResponseType.Exception, null, "No Data Found");
					}
				}

			}
			catch (Exception ex)
			{
				return new DataListMessage<TaskManagementModel.Models.Task>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}
		public DataMessage<TaskManagementModel.Models.Task> GetById(int TaskId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskid = _context.Task.Include(p => p.Owner).Include(p => p.Project).Where(p => p.TaskId == TaskId).FirstOrDefault();
					if (taskid != null)
					{
						return new DataMessage<TaskManagementModel.Models.Task>(ResponseType.Success, taskid, "Id Details Found");

					}
					else
					{

						return new DataMessage<TaskManagementModel.Models.Task>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<TaskManagementModel.Models.Task>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}
		public DataMessage<int> Update(TaskManagementModel.Models.Task newtask)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedtask = _context.Task.Where(c => c.TaskId == newtask.TaskId).FirstOrDefault();
					if (updatedtask != null)
					{
						updatedtask.Name = newtask.Name;
						updatedtask.Description = newtask.Description;
						updatedtask.IsDeleted = newtask.IsDeleted;
						updatedtask.CreatedBy = newtask.CreatedBy;
						updatedtask.ModifiedBy = newtask.ModifiedBy;
						updatedtask.CreatedBy = newtask.CreatedBy;
						updatedtask.DateCreated = newtask.DateCreated;
						updatedtask.DateModified = newtask.DateModified;
						updatedtask.DevStartDate = newtask.DevStartDate;
						updatedtask.DevCompleteDate = newtask.DevCompleteDate;
						updatedtask.DevEstimateDate = newtask.DevEstimateDate;
						updatedtask.QaStartDate = newtask.QaStartDate;
						updatedtask.QaCompleteDate = newtask.QaCompleteDate;
						updatedtask.QaEstimateDate = newtask.QaEstimateDate;
						updatedtask.OwnerId = newtask.OwnerId;
						updatedtask.ReporteeId = newtask.ReporteeId;
						updatedtask.AssigneeId = newtask.AssigneeId;
						updatedtask.ProjectId = newtask.ProjectId;
						updatedtask.Status = newtask.Status;

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedtask.TaskId, "Data Saved");
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
		public DataMessage<int> Save (TaskManagementModel.Models.Task newtask)
		{
			try
			{
				using(TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					
                    if (newtask != null)
                    {
						TaskManagementModel.Models.Task savedtask = new TaskManagementModel.Models.Task();
						newtask.Status = TaskStatus.ToDo.ToString();
						savedtask.Name = newtask.Name;
						savedtask.Description = newtask.Description;
						savedtask.Status = newtask.Status;
						savedtask.IsDeleted = newtask.IsDeleted;
						savedtask.CreatedBy = newtask.CreatedBy;
						savedtask.ModifiedBy = newtask.ModifiedBy;
						
						savedtask.DateCreated = newtask.DateCreated;
						savedtask.DateModified = newtask.DateModified;
						savedtask.DevStartDate = newtask.DevStartDate;
						savedtask.DevCompleteDate = newtask.DevCompleteDate;
						savedtask.DevEstimateDate = newtask.DevEstimateDate;
						savedtask.QaStartDate = newtask.QaStartDate;
						savedtask.QaCompleteDate = newtask.QaCompleteDate;
						savedtask.QaEstimateDate = newtask.QaEstimateDate;
						savedtask.OwnerId = newtask.OwnerId;
						savedtask.ReporteeId = newtask.ReporteeId;
						savedtask.AssigneeId = newtask.AssigneeId;
						savedtask.ProjectId = newtask.ProjectId;
						_context.Task.Add(newtask);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, savedtask.TaskId, "Data Saved");

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
		public stringMessage Delete(TaskManagementModel.Models.Task item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskdetails = _context.Task.Find(item.TaskId);
					if(taskdetails == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);


					}
					else
					{
						taskdetails.IsDeleted = !taskdetails.IsDeleted;
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


