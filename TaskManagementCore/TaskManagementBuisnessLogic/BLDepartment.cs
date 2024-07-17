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

		public DataListMessage<Department> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var deptdata = _context.Department.ToList();
					
					if (deptdata != null)
					{
						return new DataListMessage<Department>(ResponseType.Success, deptdata, "Model Found");
					}
					else
					{
						return new DataListMessage<Department>(ResponseType.Exception, null, "No Model Found");
					}
				}
			}
			catch (Exception ex)
			{
				return new DataListMessage<Department>(ResponseType.Exception, null, ex.Message.ToString());
			}
		}

		public DataMessage<Department> GetById(int id)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var dept = _context.Department.Where(p => p.DepartmentId == id).FirstOrDefault();
					
					if (dept != null)
					{
						return new DataMessage<Department>(ResponseType.Success, dept, "Id Details Found");

					}
					else
					{

						return new DataMessage<Department>(ResponseType.Exception, null, "No Details found");

					}
				}
			}
			catch (Exception ex)
			{
				return new DataMessage<Department>(ResponseType.Exception, null, ex.Message.ToString());

			}
		}

		public stringMessage Delete(Department item)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var deptdetail = _context.Department.Find(item.DepartmentId);
					
					if (deptdetail == null)
					{
						return new stringMessage("cannot find the Entry", ResponseType.Exception);

					}
					else
					{
						deptdetail.IsDeleted = !deptdetail.IsDeleted;
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

		public DataMessage<int> Update(Department newdata)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var updateddata = _context.Department.Where(c => c.DepartmentId == newdata.DepartmentId).FirstOrDefault();
					
					if (updateddata != null)
					{
						updateddata.DeptName = newdata.DeptName;
						
						updateddata.IsDeleted = newdata.IsDeleted;
						//updateddata.CreatedBy = newdata.CreatedBy;
						//updateddata.DateModified = newdata.DateModified;
						updateddata.DateCreated = newdata.DateCreated;
						updateddata.DateModified = newdata.DateModified;


						if (_context.SaveChanges() > 0)
						{
							return new DataMessage<int>(ResponseType.Success, updateddata.DepartmentId, "Data Saved");

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

		public DataMessage<int> Save(Department newdata)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (newdata != null)
					{
						Department SavedData = new Department();
						SavedData.DeptName = newdata.DeptName;
						

						//SavedData.CreatedBy = newdata.CreatedBy;
						//SavedData.DateModified = newdata.DateModified;
						SavedData.DateCreated = newdata.DateCreated;
						SavedData.DateModified = newdata.DateModified;

						SavedData.IsDeleted = false;

						_context.Department.Add(newdata);

						if (_context.SaveChanges() > 0)
						{

							return new DataMessage<int>(ResponseType.Success, SavedData.DepartmentId, "Data Saved");

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
