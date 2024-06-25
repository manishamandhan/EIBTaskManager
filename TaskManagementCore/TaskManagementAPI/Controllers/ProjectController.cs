using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]

	public class ProjectController : ControllerBase
	{
		[HttpGet]
		public DataListMessage<Project> GetAll()
		{
			return BLProject.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<Project> GetById(int projectid)
		{
			return BLProject.Instance().GetById(projectid);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLProject.Instance().Delete(new Project { ProjectId = id });
		}
		[HttpPost]

		public DataMessage<int> Update(Project project)
		{
			return BLProject.Instance().Update(project);
		}
		[HttpPost]
		public DataMessage<int> Save(Project project)
		{
			return BLProject.Instance().Save(project);
		}
	}
}


