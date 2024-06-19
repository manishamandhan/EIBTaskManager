

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
		public DataListMessage<Department> GetAll()
		{
			return BLDepartment.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<Department> GetById(int deptid)
		{
			return BLDepartment.Instance().GetById(deptid);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLDepartment.Instance().Delete(new Department { DepartmentModelId = id });
		}
		[HttpPost]

		public DataMessage<int> Update(Department department)
		{
			return BLDepartment.Instance().Update(department);
		}
		[HttpPost]
		public DataMessage<int> Save(Department department)
		{
			return BLDepartment.Instance().Save(department);
		}
	}
}


