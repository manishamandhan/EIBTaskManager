using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public partial class Role
	{
		public Role()
		{
			UserRoles = new HashSet<UserRole>();
		}

		public int RoleId { get; set; }
		public string? RoleName { get; set; }
		public DateTime? DateCreated { get; set; }

		public virtual ICollection<UserRole> UserRoles { get; set; }
	}
}
