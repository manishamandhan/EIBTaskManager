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



		public DataListMessage<ProjectModel> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var projectdata = _context.ProjectModel.ToList();
					if (projectdata != null)
					{
						return new DataListMessage<ProjectModel>(ResponseType.Success, projectdata, "Model Found");
					}
					else
					{
						return new DataListMessage<ProjectModel>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<ProjectModel>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<ProjectModel> GetById(int id)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var project = _context.ProjectModel.Where(p => p.projectid == id).FirstOrDefault();
					if (project != null)
					{
						return new DataMessage<ProjectModel>(ResponseType.Success, project, "Id Details Found");

					}
					else
					{

						return new DataMessage<ProjectModel>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<ProjectModel>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(ProjectModel item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var projectdetail = _context.ProjectModel.Find(item.projectid);
					if (projectdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						projectdetail.is_deleted = !projectdetail.is_deleted;
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

		public DataMessage<int> Update(ProjectModel newproject)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updatedproject = _context.ProjectModel.Where(c => c.projectid == newproject.projectid).FirstOrDefault();
					if (updatedproject != null)
					{
						updatedproject.name = newproject.name;
						updatedproject.description = newproject.description;

						updatedproject.is_deleted = newproject.is_deleted;
						updatedproject.created_by = newproject.created_by;
						updatedproject.updated_by = newproject.updated_by;
						updatedproject.created_at = newproject.created_at;
						updatedproject.updated_at = newproject.updated_at;
						

						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updatedproject.projectid, "Data Saved");

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

		public DataMessage<int> Save(ProjectModel newproject)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newproject != null)
					{
						ProjectModel SavedData = new ProjectModel();
						SavedData.name = newproject.name;
						SavedData.description = newproject.description;

						SavedData.created_by = newproject.created_by;
						SavedData.updated_by = newproject.updated_by;
						SavedData.created_at = newproject.created_at;
						SavedData.updated_at = newproject.updated_at;
						
						SavedData.is_deleted = false;
					
						_context.ProjectModel.Add(newproject);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.projectid, "Data Saved");

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