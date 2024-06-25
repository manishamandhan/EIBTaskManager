using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagementModel.Models
{
	public class Task
	{
		[Key]
		public int TaskId { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string Status { get; set; }
		public bool IsDeleted { get; set; } = false;
		public int CreatedBy { get; set; }

		[ForeignKey("CreatedBy")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User? CreatedByUser { get; set; }
		
		public int ModifiedBy { get; set; }
		[ForeignKey("ModifiedBy")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User? ModifiedByUser { get; set; }

		public DateTime DateCreated { get; set; }
		public DateTime DateModified { get; set; }

		public DateTime DevStartDate { get; set; }
		public DateTime DevCompleteDate { get; set; }
		public DateTime DevEstimateDate { get; set; }
		public DateTime QaStartDate { get; set; }
		public DateTime QaCompleteDate { get;set; }
		public DateTime QaEstimateDate { get; set; }
		public int OwnerId {  get; set; }
		[ForeignKey("OwnerId")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User? Owner { get; set; }

		public int ReporteeId { get; set; }
		[ForeignKey("ReporteeId")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User? Reportee { get; set; }

		public int AssigneeId { get; set; }
		[ForeignKey("AssigneeId")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User? Assignee{ get; set; }

		public int ProjectId { get; set; }
		[ForeignKey("ProjectId")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual Project? Project { get; set; }

		



	}
}
