
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementCore.Models
{
	public class DSRDetails
	{
		[Key]
		public int DSRDetailsId {  get; set; }

		public string ? Ticket_Link { get; set; }
		public string ? Ticket_Description { get; set; }
		public DateTime Time_Started { get; set; }
		public int Estimated_Time { get; set;}

		public DateTime ? Time_Completed { get; set; }

		public string? Status { get; set; }
		public string? Notes { get; set; }
        

        public int? CreatedBy { get; set; }
		public int? ModifiedBy { get; set; }
		public DateTime? DateCreated { get; set; }
		public DateTime? DateModified { get; set; }
		public bool? IsDeleted { get; set; }


	}
}
