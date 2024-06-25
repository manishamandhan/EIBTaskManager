namespace TaskManagementBuisnessLogic
{
	public enum ResponseType
	{
		Success,
		Failed,
		Exception
	}
	public enum TaskStatus
	{
		ToDo,
		InDev,
		DevComplete,
		InQA,
		QAComplete,
		InUAT,
		UATComplete,
		DeploymentReady,
		Done

	}

	public static class APIResponseMessages
	{
		public static string Success = ",";

		public static string Failed = "\t";

		public static string Error = "There was some error saving the record. Please try again.";
	}
	public class DataListMessage<T>
	{
		
		public ResponseType Resp { get; set; }
		public List<T> Data { get; set; }
		public string Message { get; set; }
		public DataListMessage(ResponseType resp, List<T> data, string _message)
		{

			Resp = resp;
			Data = data;
			Message = _message;
		}

		
	}

	public class DataMessage<T>
	{
		public ResponseType Resp { get; set; }
		public T Data { get; set; }
		public string Message { get; set; }

		public DataMessage(ResponseType resp, T data, string _message)
		{

			Resp = resp;
			Data = data;
			Message = _message;
		}
		
		
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
