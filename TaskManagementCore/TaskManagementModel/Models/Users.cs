using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagementModel.Models
{
	public class Users
	{
		[Key]
		public int UserId { get; set; }
		public byte[] picture { get; set; }
		public string? first_name { get; set; }		
		public string? last_name { get; set;}
		public string? email { get; set;}
		public	string? password { get; set;}
		public int? phone_no1 { get; set;}
		public int? phone_no2 { get; set;}	
		public int? dept_id { get; set;}
		public DateTime date_Of_birth { get; set; }

		public string designation {  get; set; }
		public DateTime? hiring_date { get; set;}

		public string? permanent_address { get;set;}
		public string? corresponding_address { get; set;}
		public bool is_deleted { get; set; }
		public string created_by { get; set; }
		public string updated_by { get; set; }
		public DateTime created_at { get; set; }
		public DateTime updated_at { get; set;}


	}

}
