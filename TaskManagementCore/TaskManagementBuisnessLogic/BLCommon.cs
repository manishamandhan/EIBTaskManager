﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagementModel.Models;

namespace TaskManagementBuisnessLogic
{
	public enum ResponseType
	{
		Success,
		Failed,
		Exception
	}

	public static class APIResponseMessages
	{
		public static string Success = ",";

		public static string Failed = "\t";

		public static string Error = "There was some error saving the record. Please try again.";
	}
	public class DataListMessage<T>
	{
		public DataListMessage(ResponseType resp, List<T> data, string _message)
		{

			Resp = resp;
			Data = data;
			Message = _message;
		}

		public string Message { get; set; }
		public ResponseType Resp { get; set; }
		public List<T> Data { get; set; }
	}

	public class DataMessage<T>
	{

		public DataMessage(ResponseType resp, T data, string _message)
		{

			Resp = resp;
			Data = data;
			Message = _message;
		}
		public string Message { get; set; }
		public ResponseType Resp { get; set; }
		public T Data { get; set; }
	}

	public class BLCommon
		{
			public class stringMessage
			{

				public string Message { get; set; }


				public ResponseType Resp { get; set; }

				public stringMessage(string _Message, ResponseType _Resp)
				{
					Message = _Message;
					Resp = _Resp;
				}
			}
		}
	

}
