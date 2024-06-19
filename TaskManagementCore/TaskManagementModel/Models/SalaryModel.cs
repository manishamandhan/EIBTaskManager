//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace TaskManagementModel.Models
//{
//	public class SalaryModel
//	{
//		[Key]
//		public int SalaryModelId { get; set; }

//		public int UserId { get; set; }


//		[ForeignKey("UserId")]
//		public Users User { get; set; }

//		public string? salary {  get; set; }
//		public DateTime? StartDate { get; set; }
//		public DateTime? EndDate { get; set; }

//	}
//}
