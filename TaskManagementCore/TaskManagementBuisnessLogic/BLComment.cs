

using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLComment
	{

		private static readonly BLComment _instance;

		static BLComment()
		{
			_instance = new BLComment();
		}
		//private BLUsers()
		//{
		//}
		public static BLComment Instance()
		{
			return _instance;
		}



		public DataListMessage<Comment> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var commentdata = _context.Comment.ToList();
					if (commentdata != null)
					{
						return new DataListMessage<Comment>(ResponseType.Success, commentdata, "Model Found");
					}
					else
					{
						return new DataListMessage<Comment>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Comment>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataListMessage<Comment> GetAllByTasksId(int tasksId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var commentdata = _context.Comment.Where(r => r.TasksId == tasksId).ToList();
					if (commentdata != null)
					{
						return new DataListMessage<Comment>(ResponseType.Success, commentdata, "Model Found");
					}
					else
					{
						return new DataListMessage<Comment>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Comment>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<Comment> GetById(int id)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var comment = _context.Comment.Where(p => p.CommentId == id).FirstOrDefault();
					if (comment != null)
					{
						return new DataMessage<Comment>(ResponseType.Success, comment, "Id Details Found");

					}
					else
					{

						return new DataMessage<Comment>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<Comment>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(Comment item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var commentdetail = _context.Project.Find(item.CommentId);
					if (commentdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						commentdetail.IsDeleted = !commentdetail.IsDeleted;
						_context.SaveChanges();
						return new stringMessage("", ResponseType.Success);
					}

				}
			}
			catch (Exception ex)
			{

				return new stringMessage(ex.Message, ResponseType.Exception);
			}
		}

		public DataMessage<int> Update(Comment newcomment)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedcomment = _context.Comment.Where(c => c.CommentId == newcomment.CommentId).FirstOrDefault();
					if (updatedcomment != null)
					{
						updatedcomment.values = newcomment.values;

						updatedcomment.IsDeleted = newcomment.IsDeleted;
						updatedcomment.CreatedBy = newcomment.CreatedBy;
						updatedcomment.ModifiedBy = newcomment.ModifiedBy;
						updatedcomment.DateCreated = newcomment.DateCreated;
						updatedcomment.DateModified = newcomment.DateModified;
						updatedcomment.TasksId = newcomment.TasksId;


						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedcomment.CommentId, "Data Saved");

						}

					}
					return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save the Data");

				}
			}
			catch (Exception ex)
			{
				return new DataMessage<int>(ResponseType.Exception, 0, ex.Message.ToString());

			}


		}

		public DataMessage<int> Save(Comment newcomment)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newcomment != null)
					{
						Comment SavedData = new Comment();
						SavedData.values = newcomment.values;

						SavedData.CreatedBy = newcomment.CreatedBy;
						SavedData.ModifiedBy = newcomment.ModifiedBy;
						SavedData.DateCreated = newcomment.DateCreated;
						SavedData.DateModified = newcomment.DateModified;
						SavedData.TasksId = newcomment.TasksId;

						SavedData.IsDeleted = false;

						_context.Comment.Add(newcomment);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.CommentId, "Data Saved");

						}



					}
					return new DataMessage<int>(ResponseType.Failed, 0, "Unable to save the Data");

				}

			}
			catch (Exception ex)
			{
				return new DataMessage<int>(ResponseType.Exception, 0, ex.Message.ToString());

			}


		}
	}
}