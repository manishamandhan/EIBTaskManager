using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models.StoredProcedureModels
{
	public class getUserdetailByUserId
	{
		public int userId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string userRoles { get; set; }
	}
}
