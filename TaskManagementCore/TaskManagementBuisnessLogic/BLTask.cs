using Microsoft.EntityFrameworkCore;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using TaskManagementModel.Models.StoredProcedureModels;
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


		public DataListMessage<getTasks> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					//var taskmodel = _context.Task.Include(p => p.Owner).Include(p =>p.Project).ToList();
					//var taskmodel = _context.Task.Where(x=>x.IsDeleted == false).ToList();
					//var taskmodel = _context.getTasks.FromSqlRaw("Exec getTasks").ToList();
					var taskmodel = _context.getTasks.FromSql($"SELECT  TasksId, Name, Description, Status, u.FirstName Reportee FROM Tasks t INNER JOIN [User] u ON t.ReporteeId = u.UserId ").ToList();
					if (taskmodel != null)
					{
						return new DataListMessage<getTasks>(ResponseType.Success, taskmodel, "Data Found");
					}
					else
					{
						return new DataListMessage<getTasks>(ResponseType.Exception, null, "No Data Found");
					}
				}

			}
			catch (Exception ex)
			{
				return new DataListMessage<getTasks>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataListMessage<getOwnerTasks> GetAllTasksByOwner(int ownerId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					//var taskmodel = _context.Task.Include(p => p.Owner).Include(p =>p.Project).ToList();
					//var taskmodel = _context.Task.Where(t => t.OwnerId == ownerId).ToList();
					var taskmodel = _context.getOwnerTasks.FromSqlRaw("Exec getOwnerTasks {0}", ownerId).ToList();
					if (taskmodel != null)
					{
						return new DataListMessage<getOwnerTasks>(ResponseType.Success, taskmodel, "Data Found");
					}
					else
					{
						return new DataListMessage<getOwnerTasks>(ResponseType.Exception, null, "No Data Found");
					}
				}

			}
			catch (Exception ex)
			{
				return new DataListMessage<getOwnerTasks>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<TaskManagementModel.Models.Tasks> GetById(int TasksId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					//var taskid = _context.Task.Include(p => p.Owner).Include(p => p.Project).Where(p => p.TaskId == TaskId).FirstOrDefault();
					var taskid = _context.Task.Where(p => p.TasksId == TasksId).FirstOrDefault();
					if (taskid != null)
					{
						return new DataMessage<TaskManagementModel.Models.Tasks>(ResponseType.Success, taskid, "Id Details Found");

					}
					else
					{

						return new DataMessage<TaskManagementModel.Models.Tasks>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<TaskManagementModel.Models.Tasks>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}
		public DataMessage<int> Update(TaskManagementModel.Models.Tasks newtask)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedtask = _context.Task.Where(c => c.TasksId == newtask.TasksId).FirstOrDefault();
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
							return new DataMessage<int>(ResponseType.Success, updatedtask.TasksId, "Data Saved");
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
		public DataMessage<int> Save (TaskManagementModel.Models.Tasks newtask)
		{
			try
			{
				using(TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					
                    if (newtask != null)
                    {
						TaskManagementModel.Models.Tasks savedtask = new TaskManagementModel.Models.Tasks();
						newtask.Status = TaskStatus.ToDo.ToString();
						savedtask.Name = newtask.Name;
						savedtask.Description = newtask.Description;
						savedtask.Status = newtask.Status;
						savedtask.IsDeleted = newtask.IsDeleted;
						savedtask.CreatedBy = newtask.CreatedBy == 0 ? null : newtask.CreatedBy;
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
						_context.Task.Add(savedtask);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, savedtask.TasksId, "Data Saved");

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
		public stringMessage Delete(TaskManagementModel.Models.Tasks item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var taskdetails = _context.Task.Find(item.TasksId);
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

		public DataMessage<int> UpdateStatus(TaskStatusModel taskStatusModel)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedtask = _context.Task.Where(c => c.TasksId == taskStatusModel.TasksId).FirstOrDefault();
					if (updatedtask != null)
					{
						
						updatedtask.Status = taskStatusModel.Status;

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedtask.TasksId, "Data Saved");
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


