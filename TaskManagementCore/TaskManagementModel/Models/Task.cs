using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagementModel.Models
{
	public class Task
	{
		[Key]
		public int taskid { get; set; }
		public string name { get; set; }
		public string description { get; set; }
		public string status { get; set; }
		public bool is_deleted { get; set; }
		public int created_by { get; set; }

		[ForeignKey("created_by")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User created_by_fk { get; set; }
		
		public int updated_by { get; set; }
		[ForeignKey("updated_by")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User updated_by_fk { get; set; }

		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }

		public DateTime dev_start_date { get; set; }
		public DateTime dev_complete_date { get; set; }
		public DateTime dev_estimate_date { get; set; }
		public DateTime qa_start_date { get; set; }
		public DateTime qa_complete_date { get;set; }
		public DateTime qa_estimate_date { get; set; }
		public int owner {  get; set; }
		[ForeignKey("owner")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User owner_fk { get; set; }

		public int reportee { get; set; }
		[ForeignKey("reportee")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User reportee_fk { get; set; }

		public int assignee { get; set; }
		[ForeignKey("assignee")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User assignee_fk { get; set; }

		public int projectid { get; set; }
		[ForeignKey("projectid")]
		//[DeleteBehavior(DeleteBehavior.Cascade)]
		public virtual User project_id_fk { get; set; }

		



	}
}
