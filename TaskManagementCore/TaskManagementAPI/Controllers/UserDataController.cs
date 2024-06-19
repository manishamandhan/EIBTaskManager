using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]

	public class UserDataController : ControllerBase
	{
		[HttpGet]
		public DataListMessage<User> GetAll()
		{
			return BLUsers.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<User> GetById(int userId) {
			return BLUsers.Instance().GetById(userId);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLUsers.Instance().Delete(new User { id = id });
		}
		[HttpPost]

		public DataMessage<int> Update( User user)
		{
			return BLUsers.Instance().Update(user );
		}
		[HttpPost]
		public DataMessage<int> Save( User user)
		{
			return BLUsers.Instance().Save(user );
		}
	}
}


