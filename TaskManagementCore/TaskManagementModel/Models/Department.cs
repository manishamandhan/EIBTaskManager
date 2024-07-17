using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class Department
	{
		[Key]
		public int DepartmentId { get; set; }

		[Required]
		public string? DeptName { get; set; }

		public bool IsDeleted { get; set; }

		//public int? ModifiedBy { get; set; }
		//[ForeignKey("ModifiedBy")]
		//public virtual User? ModifiedByUser { get; set; }

		public DateTime? DateCreated { get; set; }
		public DateTime? DateModified { get; set; }

	
		//public int? CreatedBy { get; set; }


	}


}
