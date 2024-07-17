using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models.StoredProcedureModels
{
	public class getOwnerTasks
	{
		public int TasksId { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Status { get; set; }
		public string Reportee { get; set; }
	}
}
