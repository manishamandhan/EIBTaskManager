

using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementAPI.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]

	public class CommentController : ControllerBase
	{
		[HttpGet]
		public DataListMessage<Comment> GetAll()
		{
			return BLComment.Instance().GetAll();
		}
		[HttpGet]
		public DataMessage<Comment> GetById(int Id)
		{
			return BLComment.Instance().GetById(Id);
		}

		[HttpDelete]
		public ActionResult<stringMessage> Delete(int id)
		{
			TaskManagementDbContext context = new TaskManagementDbContext();
			return BLComment.Instance().Delete(new Comment { Id = id });
		}
		[HttpPost]

		public DataMessage<int> Update(Comment comment)
		{
			return BLComment.Instance().Update(comment);
		}
		[HttpPost]
		public DataMessage<int> Save(Comment comment)
		{
			return BLComment.Instance().Save(comment);
		}
	}
}


