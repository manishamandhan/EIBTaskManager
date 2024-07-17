using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagementModel.Models
{
	public class User
	{
		[Key]
		public int UserId { get; set; }

		public byte[]? Picture { get; set; }


		[Required(ErrorMessage = "First name is required.")]
		public string FirstName { get; set; }


		public string? LastName { get; set; }


		[EmailAddress(ErrorMessage = "Invalid email address.")]
		public string? Email { get; set; }


		[MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
		public string? Password { get; set; }


		[RegularExpression(@"^\d{10}$", ErrorMessage = "Phone number must be 10 digits.")]
		public string? PhoneNo1 { get; set; }

		[RegularExpression(@"^\d{10}$", ErrorMessage = "Phone number must be 10 digits.")]
		public string? PhoneNo2 { get; set; }


		//[Range(1, int.MaxValue, ErrorMessage = "Department ID must be a positive number.")]

		//public int? DeptId { get; set; }


		[DataType(DataType.Date, ErrorMessage = "Invalid date format.")]
		public DateTime DateOfBirth { get; set; }


		[Required(ErrorMessage = "Designation is required.")]
		public string Designation { get; set; }


		public DateTime? HiringDate { get; set; }


		[Required(ErrorMessage = "Permanent address is required.")]
		public string? PermanentAddress { get; set; }


		public string? CorrespondingAddress { get; set; }


		[Editable(false)]
		public bool IsDeleted { get; set; }


		[Required(ErrorMessage = "Created by is required.")]
		public string CreatedBy { get; set; }


		[Required(ErrorMessage = "Updated by is required.")]
		public string ModifiedBy { get; set; }


		[DataType(DataType.DateTime)]
		public DateTime DateCreated { get; set; }

		[DataType(DataType.DateTime)]
		public DateTime DateModified { get; set; }
		public int ? DepartmentID { get; set; }
		[ForeignKey("DepartmentID")]
		public Department? Department { get; set; }
		//public Guid? APIToken { get; set; }

	}

}
