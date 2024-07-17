using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementBuisnessLogic
{
	public class LoginDTO
	{
		public string username { get; set; }
		public string password { get; set; }

	}
	public class AuthResponseDTO
	{
		public int userId { get; set; }
		public string? userFirstName { get; set; }
		public string? userlastName { get; set; }
		public string? userRoles { get; set; }

		public string? token { get; set; }
	}
}
