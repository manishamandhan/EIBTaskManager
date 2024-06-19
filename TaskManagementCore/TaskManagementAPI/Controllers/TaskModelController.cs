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
		public DataListMessage<TaskModel> GetAll()
		{
			return BLTaskModel.Instance().GetAll();
		}
		[HttpPost]
		public DataMessage<int> Update(TaskModel model)
		{
			return BLTaskModel.Instance().Update(model);
		}
		[HttpPost]
		public DataMessage<int> Save(TaskModel model)
		{
			return BLTaskModel.Instance().Save(model);
		}
		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLTaskModel.Instance().Delete(new TaskModel { taskid = id });
		}

	}
}
