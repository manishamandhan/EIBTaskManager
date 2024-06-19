using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class TaskModel
	{
		[Key]
		public int taskid { get; set; }
		public string name { get; set; }
		public string description { get; set; }
		public bool is_deleted { get; set; }
		public string created_by { get; set; }
		public string updated_by { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set; }

		public DateTime dev_start_date { get; set; }
		public DateTime dev_complete_date { get; set; }
		public DateTime dev_estimate_date { get; set; }
		public DateTime qa_start_date { get; set; }
		public DateTime qa_complete_date { get;set; }
		public DateTime qa_estimate_date { get; set; }
		public int owner {  get; set; }
		public int UserId { get; set; }


		[ForeignKey("UserId")]
		public Users Users { get; set; }

		public int projectid { get; set; }

		//[ForeignKey("projectid")]
		//public ProjectModel ProjectModel { get; set; }
		//public int task_status_id { get; set; }

		//[ForeignKey("task_status_id")]
		//public TaskStatusModel TaskStatusModel { get; set; }



	}
}
