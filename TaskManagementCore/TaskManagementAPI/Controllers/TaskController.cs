using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using TaskManagementModel.Models.StoredProcedureModels;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class TaskController : Controller
	{
		[Authorize]
		[HttpGet]
		public DataListMessage<getTasks> GetAll()
		{
			return BLTask.Instance().GetAll();
		}
		[HttpGet]
		[Authorize]
		public DataListMessage<getOwnerTasks> GetAllTasksByOwner(int ownerId)
		{
			return BLTask.Instance().GetAllTasksByOwner(ownerId);
		}
		[HttpGet]
		[Authorize]
		public DataMessage<TaskManagementModel.Models.Tasks> GetById(int TasksId)
		{
			return BLTask.Instance().GetById(TasksId);
		}

		//[HttpPost]
		//public DataMessage<int> Update(TaskManagementModel.Models.Task model)
		//{
		//	return BLTask.Instance().Update(model);
		//}
		//[HttpPost]
		//public DataMessage<int> Save(TaskManagementModel.Models.Task model)
		//{
		//	return BLTask.Instance().Save(model);
		//}

		[HttpPost]
		[Authorize]
		public ActionResult<DataMessage<int>> put(TaskManagementModel.Models.Tasks task) 
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			if (task.TasksId == 0)
			{
				var saveresponse = BLTask.Instance().Save(task);
				return saveresponse;
			}
			var updateresponse = BLTask.Instance().Update(task);
			return updateresponse;
		}

		[HttpDelete]
		[Authorize]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLTask.Instance().Delete(new TaskManagementModel.Models.Tasks { TasksId = id });
		}

		[HttpPut]
		[Authorize]
		public ActionResult<DataMessage<int>> updateStatus(TaskStatusModel taskStatusModel)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			var updateresponse = BLTask.Instance().UpdateStatus(taskStatusModel);
			return updateresponse;
		}

	}
}
