using Azure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagementCore.Data;
using TaskManagementModel.Models;
using static TaskManagementBuisnessLogic.BLCommon;

namespace TaskManagementBuisnessLogic
{
	public sealed class BLDepartment
	{
		private static readonly BLDepartment _instance;

		static BLDepartment()
		{
			_instance = new BLDepartment();
		}
		private BLDepartment()
		{
		}
		public static BLDepartment Instance()
		{ return _instance; }

		public DataListMessage<DepartmentModel> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var deptdata = _context.Department.ToList();
					if (deptdata != null)
					{
						return new DataListMessage<DepartmentModel>(ResponseType.Success, deptdata, "Model Found");
					}
					else
					{
						return new DataListMessage<DepartmentModel>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<DepartmentModel>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<DepartmentModel> GetById(int id)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var dept = _context.Department.Where(p => p.DepartmentModelId == id).FirstOrDefault();
					if (dept != null)
					{
						return new DataMessage<DepartmentModel>(ResponseType.Success, dept, "Id Details Found");

					}
					else
					{

						return new DataMessage<DepartmentModel>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<DepartmentModel>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(DepartmentModel item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var deptdetail = _context.Department.Find(item.DepartmentModelId);
					if (deptdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						deptdetail.is_deleted = !deptdetail.is_deleted;
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

		public DataMessage<int> Update(DepartmentModel newdata)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updateddata = _context.Department.Where(c => c.DepartmentModelId == newdata.DepartmentModelId).FirstOrDefault();
					if (updateddata != null)
					{
						updateddata.DepartmentName = newdata.DepartmentName;
						updateddata.UserId = newdata.UserId;
						updateddata.is_deleted = newdata.is_deleted;
						updateddata.created_by = newdata.created_by;
						updateddata.updated_by = newdata.updated_by;
						updateddata.created_at = newdata.created_at;
						updateddata.updated_at = newdata.updated_at;


						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updateddata.DepartmentModelId, "Data Saved");

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

		public DataMessage<int> Save(DepartmentModel newdata)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newdata != null)
					{
						DepartmentModel SavedData = new DepartmentModel();
						SavedData.DepartmentName = newdata.DepartmentName;
						SavedData.UserId = newdata.UserId;

						SavedData.created_by = newdata.created_by;
						SavedData.updated_by = newdata.updated_by;
						SavedData.created_at = newdata.created_at;
						SavedData.updated_at = newdata.updated_at;

						SavedData.is_deleted = false;

						_context.Department.Add(newdata);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.DepartmentModelId, "Data Saved");

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
