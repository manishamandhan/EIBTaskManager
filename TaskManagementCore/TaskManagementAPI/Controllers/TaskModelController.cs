using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class TaskModelController : Controller
	{
		[HttpGet]
		public DataListMessage<TaskManagementModel.Models.Task> GetAll()
		{
			return BLTask.Instance().GetAll();
		}
		[HttpPost]
		public DataMessage<int> Update(TaskManagementModel.Models.Task model)
		{
			return BLTask.Instance().Update(model);
		}
		[HttpPost]
		public DataMessage<int> Save(TaskManagementModel.Models.Task model)
		{
			return BLTask.Instance().Save(model);
		}
		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLTask.Instance().Delete(new TaskManagementModel.Models.Task { taskid = id });
		}

	}
}
