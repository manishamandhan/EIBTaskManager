using Microsoft.AspNetCore.Mvc;
using TaskManagementBuisnessLogic;
using TaskManagementCore.Data;
using TaskManagementCore.Models;

namespace TaskManagementCore.Controllers
{
	[ApiController]
	//[Route("[controller]")]
	[Route("api/[controller]/[action]")]
	public class DSRDetailsController : ControllerBase
	{
		private readonly TaskManagementDbContext _dbContext;

		public DSRDetailsController(TaskManagementDbContext _con) 
		{
			_dbContext = _con;
		}

		[HttpGet]
		public ActionResult<List<DSRDetails>> getAllDSRDetails()
		{
			
			var blDsr = new BLDSRData();
			var data = blDsr.GetAll();
			
			return data;
			

		}

		[HttpGet]

		public ActionResult<DSRDetails> GetByIdDSRDeatils(int id)
		{
			var blDsrId = new BLDSRData();

			DSRDetails Iddata = blDsrId.GetById(id);

			return Iddata;


		}
		[HttpPost]
		public ActionResult<List<int>> put(DSRDetails row)
		{
			
			if(row.DSRDetailsId == 0)
			{
				var dsrsave = new BLDSRData();
				var saveresponse = dsrsave.Save(row);
				return saveresponse;
 			}
			else
			{
				var dsrupdate = new BLDSRData();
				var updateresponse = dsrupdate.Update(row);
				return updateresponse;
			}
			
			


		}

		[HttpDelete]

		public int Delete(int id)
		{
			
			var deletedsr	= new BLDSRData();
			var deleteresponse = deletedsr.Delete(id);
			return deleteresponse;
		}


		




	}
}

