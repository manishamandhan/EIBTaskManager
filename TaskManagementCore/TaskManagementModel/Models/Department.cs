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
		public int DepartmentModelId { get; set; }
		[Required]
		public string DepartmentName { get; set;}
		
		public bool is_deleted { get; set; }
		public string? created_by { get; set; }

		public string? updated_by { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }

		public int UserId { get; set; }

		
		[ForeignKey("UserId")]
		public User User { get; set; }
	}
	
}
