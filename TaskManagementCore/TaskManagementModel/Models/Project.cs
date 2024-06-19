using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class Project
	{
		[Key]
		public int projectid { get; set; }
		public string? name { get; set; }
		public string? description { get; set; }
		public bool is_deleted { get; set; }
		public string? created_by { get; set; }
		public string? updated_by { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }
	}
}
