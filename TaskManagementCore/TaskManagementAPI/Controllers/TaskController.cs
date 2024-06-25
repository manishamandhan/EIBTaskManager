using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class TaskController : Controller
	{
		[HttpGet]
		public DataListMessage<TaskManagementModel.Models.Task> GetAll()
		{
			return BLTask.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<TaskManagementModel.Models.Task> GetById(int TaskId)
		{
			return BLTask.Instance().GetById(TaskId);
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
		public ActionResult<DataMessage<int>> put(TaskManagementModel.Models.Task task) 
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			if (task.TaskId == 0)
			{
				var saveresponse = BLTask.Instance().Save(task);
				return saveresponse;
			}
			var updateresponse = BLTask.Instance().Update(task);
			return updateresponse;
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLTask.Instance().Delete(new TaskManagementModel.Models.Task { TaskId = id });
		}

	}
}
