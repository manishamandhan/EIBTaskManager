using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class CommentModel
	{
		public int Id { get; set; }
		public string created_by { get; set; }
		public string updated_by { get; set; }
		public bool is_deleted { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }
		public string values { get; set; }
		public int userid { get; set; }


		[ForeignKey("userid")]
		public Users Users { get; set; }
	}
}
