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
		public DataListMessage<ProjectModel> GetAll()
		{
			return BLProject.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<ProjectModel> GetById(int projectid)
		{
			return BLProject.Instance().GetById(projectid);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLProject.Instance().Delete(new ProjectModel { projectid = id });
		}
		[HttpPost]

		public DataMessage<int> Update(ProjectModel project)
		{
			return BLProject.Instance().Update(project);
		}
		[HttpPost]
		public DataMessage<int> Save(ProjectModel project)
		{
			return BLProject.Instance().Save(project);
		}
	}
}


