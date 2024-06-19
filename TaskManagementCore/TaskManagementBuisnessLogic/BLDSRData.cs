using TaskManagementCore.Data;
using TaskManagementCore.Models;


namespace TaskManagementBuisnessLogic
{
	
	public class BLDSRData

	{
		


		public List<DSRDetails> GetAll()
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var dSRDetails = _context.DSRDetails.ToList();

					if (dSRDetails != null && dSRDetails.Count > 0)
					{
						return dSRDetails;
					}
					else
					{
						return null;
					}

				}


			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public DSRDetails GetById(int DSRDetailsId)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					var dsrid = _context.DSRDetails.Where(p => p.DSRDetailsId == DSRDetailsId).FirstOrDefault();

					if (dsrid != null)
					{
						return dsrid;



					}
				}
				return null;
			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public List<int> Save(DSRDetails NewdSRDetails)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					if (NewdSRDetails != null)
					{
						var dSRDetails = new DSRDetails();
						dSRDetails.Ticket_Link = NewdSRDetails.Ticket_Link;
						dSRDetails.Ticket_Description = NewdSRDetails.Ticket_Description;
						dSRDetails.Time_Started = DateTime.Now;
						dSRDetails.Estimated_Time = NewdSRDetails.Estimated_Time;
						dSRDetails.Time_Completed = DateTime.Now;
						dSRDetails.Status = NewdSRDetails.Status;
						dSRDetails.Notes = NewdSRDetails.Notes;
						dSRDetails.CreatedBy = NewdSRDetails.CreatedBy;
						dSRDetails.ModifiedBy = NewdSRDetails.ModifiedBy;
						dSRDetails.DateCreated = DateTime.Now;
						dSRDetails.DateModified = DateTime.Now;
						dSRDetails.IsDeleted = NewdSRDetails.IsDeleted;
						
						_context.DSRDetails.Add(NewdSRDetails);

						if (_context.SaveChanges() > 0)
						{
							return new List<int>();
						}
					}
					return new List<int> { 0 };



				}

			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public List<int> Update(DSRDetails NewdSRDetails)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					DSRDetails dSRDetails = _context.DSRDetails.Where(p => p.DSRDetailsId == NewdSRDetails.DSRDetailsId).FirstOrDefault();

					if (dSRDetails != null)
					{
						dSRDetails.Ticket_Link = NewdSRDetails.Ticket_Link;
						dSRDetails.Ticket_Description = NewdSRDetails.Ticket_Description;
						dSRDetails.Time_Started = DateTime.Now;
						dSRDetails.Estimated_Time = NewdSRDetails.Estimated_Time;
						dSRDetails.Time_Completed = DateTime.Now;
						dSRDetails.Status = NewdSRDetails.Status;
						dSRDetails.Notes = NewdSRDetails.Notes;
						dSRDetails.CreatedBy = NewdSRDetails.CreatedBy;
						dSRDetails.ModifiedBy = NewdSRDetails.ModifiedBy;
						dSRDetails.DateCreated = DateTime.Now;
						dSRDetails.DateModified = DateTime.Now;
						dSRDetails.IsDeleted = NewdSRDetails.IsDeleted;



						if (_context.SaveChanges() > 0)
						{
							return new List<int>();
						}

					}
					return new List<int> { 0 };

				}
			}
			catch (Exception ex)
			{
				return null;
			}
		}

		public int Delete(int dSRdetailID)
		{
			try
			{
				using (TaskManagementDbContext _context = new TaskManagementDbContext())
				{
					DSRDetails dSRDetails = _context.DSRDetails.Where(p => p.DSRDetailsId == dSRdetailID)?.FirstOrDefault();
					if (dSRDetails == null)
					{
						return 0;
					}
					else
					{
						dSRDetails.IsDeleted = true;
						_context.SaveChanges();
						return dSRDetails.DSRDetailsId;
					}
				}

			}
			catch (Exception ex)
			{
				return 404;
			}

		}

		
	}

}
