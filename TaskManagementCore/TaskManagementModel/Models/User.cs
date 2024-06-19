using System.ComponentModel.DataAnnotations;

namespace TaskManagementModel.Models
{
	public class User
	{
		[Key]
		public int id { get; set; }
		
		public byte[]? picture { get; set; } 

		
		[Required(ErrorMessage = "First name is required.")]
		public string first_name { get; set; }

		
		public string? last_name { get; set; }

		
		[EmailAddress(ErrorMessage = "Invalid email address.")]
		public string? email { get; set; }

		
		[MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
		public string? password { get; set; }

		
		[RegularExpression(@"^\d{10}$", ErrorMessage = "Phone number must be 10 digits.")]
		public string? phone_no1 { get; set; }

		[RegularExpression(@"^\d{10}$", ErrorMessage = "Phone number must be 10 digits.")]
		public string? phone_no2 { get; set; }

		
		[Range(1, int.MaxValue, ErrorMessage = "Department ID must be a positive number.")]
		public int? dept_id { get; set; }

	
		[DataType(DataType.Date, ErrorMessage = "Invalid date format.")]
		public DateTime date_of_birth { get; set; }

		
		[Required(ErrorMessage = "Designation is required.")]
		public string designation { get; set; }

	
		public DateTime? hiring_date { get; set; }

		
		[Required(ErrorMessage = "Permanent address is required.")]
		public string? permanent_address { get; set; }

		
		public string? corresponding_address { get; set; }

		
		[Editable(false)]
		public bool is_deleted { get; set; }

		
		[Required(ErrorMessage = "Created by is required.")]
		public string created_by { get; set; }

		
		[Required(ErrorMessage = "Updated by is required.")]
		public string updated_by { get; set; }

		
		[DataType(DataType.DateTime)]
		public DateTime created_at { get; set; }

		[DataType(DataType.DateTime)]
		public DateTime updated_at { get; set; }
		
	}

}
