//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace TaskManagementModel.Models
//{
//	public class TaskStatusModel
//	{
//		public int task_status_id {  get; set; }
//		public int taskid { get; set; }


//		[ForeignKey("taskid")]
//		public TaskModel TaskModel { get; set; }

//		public string todo {  get; set; }
//		public string in_dev { get; set; }
//		public string dev_complete { get; set; }
//		public string in_qa { get; set; }
//		public string qa_complete { get; set; }
//		public string in_uat { get; set; }
//		public string uat_complete { get; set; }
//		public string deployment_ready { get; set; }
//		public string done { get; set; }


//	}
//}
