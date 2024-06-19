

using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]

	public class DepartmentController : ControllerBase
	{
		[HttpGet]
		public DataListMessage<DepartmentModel> GetAll()
		{
			return BLDepartment.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<DepartmentModel> GetById(int deptid)
		{
			return BLDepartment.Instance().GetById(deptid);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLDepartment.Instance().Delete(new DepartmentModel { DepartmentModelId = id });
		}
		[HttpPost]

		public DataMessage<int> Update(DepartmentModel department)
		{
			return BLDepartment.Instance().Update(department);
		}
		[HttpPost]
		public DataMessage<int> Save(DepartmentModel department)
		{
			return BLDepartment.Instance().Save(department);
		}
	}
}


