using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagementModel.Models
{
	public class Project
	{
		[Key]
		public int ProjectId { get; set; }
		public string? Name { get; set; }
		public string? Description { get; set; }
		public bool IsDeleted { get; set; }
		public int CreatedBy { get; set; }

		[ForeignKey("CreatedBy")]
		//[JsonIgnore]
		public virtual User? CreatedByUser { get; set; }

		public int ModifiedBy { get; set; }
		[ForeignKey("ModifiedBy")]
		//[JsonIgnore]

		public virtual User? ModifiedByUser { get; set; }

		public DateTime DateCreated { get; set; }
		public DateTime DateModified { get; set; }
	}
}
