using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLProject
	{

		private static readonly BLProject _instance;

		static BLProject()
		{
			_instance = new BLProject();
		}
		//private BLUsers()
		//{
		//}
		public static BLProject Instance()
		{
			return _instance;
		}



		public DataListMessage<Project> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var projectdata = _context.Project.ToList();
					if (projectdata != null)
					{
						return new DataListMessage<Project>(ResponseType.Success, projectdata, "Model Found");
					}
					else
					{
						return new DataListMessage<Project>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Project>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<Project> GetById(int id)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var project = _context.Project.Where(p => p.ProjectId == id).FirstOrDefault();
					if (project != null)
					{
						return new DataMessage<Project>(ResponseType.Success, project, "Id Details Found");

					}
					else
					{

						return new DataMessage<Project>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<Project>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(Project item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var projectdetail = _context.Project.Find(item.ProjectId);
					if (projectdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						projectdetail.IsDeleted = !projectdetail.IsDeleted;
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

		public DataMessage<int> Update(Project newproject)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedproject = _context.Project.Where(c => c.ProjectId == newproject.ProjectId).FirstOrDefault();
					if (updatedproject != null)
					{
						updatedproject.Name = newproject.Name;
						updatedproject.Description = newproject.Description;
						updatedproject.IsDeleted = newproject.IsDeleted;
						updatedproject.CreatedBy = newproject.CreatedBy;
						updatedproject.ModifiedBy = newproject.ModifiedBy;
						updatedproject.DateCreated = newproject.DateCreated;
						updatedproject.DateModified = newproject.DateModified;
						

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedproject.ProjectId, "Data Saved");

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

		public DataMessage<int> Save(Project newproject)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newproject != null)
					{
						Project SavedData = new Project();
						SavedData.Name = newproject.Name;
						SavedData.Description = newproject.Description;
						SavedData.CreatedBy = newproject.CreatedBy;
						SavedData.ModifiedBy = newproject.ModifiedBy;
						SavedData.DateCreated = newproject.DateCreated;
						SavedData.DateModified = newproject.DateModified;
						SavedData.IsDeleted = false;
					
						_context.Project.Add(newproject);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.ProjectId, "Data Saved");

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