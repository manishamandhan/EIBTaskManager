using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class Comment
	{
		[Key]
		public int CommentId { get; set; }
		public int CreatedBy { get; set; }
		[ForeignKey("CreatedBy")]
		//[JsonIgnore]
		public virtual User? CreatedByUser { get; set; }
		public int ModifiedBy { get; set; }
		[ForeignKey("ModifiedBy")]
		//[JsonIgnore]

		public virtual User? ModifiedByUser { get; set; }
		public bool IsDeleted { get; set; }
		public DateTime DateCreated { get; set; }
		public DateTime DateModified { get; set; }
		public string values { get; set; }

		public int TasksId { get; set; }
		[ForeignKey("TasksId")]
		//[JsonIgnore]

		public virtual Tasks? Task { get; set; }
	}
}
