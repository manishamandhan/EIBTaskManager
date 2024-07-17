using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public partial class UserRole
	{
		public int UserRoleId { get; set; }
		public int UserId { get; set; }
		public int RoleId { get; set; }
		public DateTime? DateCreated { get; set; }
		public int? AddedBy { get; set; }
		public int? ModifiedBy { get; set; }
		public DateTime? DateModified { get; set; }
		public virtual Role Role { get; set; } = null!;
		public virtual User User { get; set; } = null!;
	}
}
