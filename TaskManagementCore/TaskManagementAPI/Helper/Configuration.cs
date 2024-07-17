namespace TaskManagementAPI.Helper
{
	public class ApplicationConfiguration
	{
		public string ApplicationName { get; set; } = "West Wind AlbumViewer";
		public int MaxListItems { get; set; } = 10;


		public TokenConfiguration JwtToken { get; set; } = new TokenConfiguration();
	}



	public class TokenConfiguration
	{
		public string Issuer { get; set; } = "http://localhost:5175";
		public string Audience { get; set; } = "http://localhost:5175";

		public string SigningKey { get; set; } = "4xmic4e1YCEIjZ8UC4lcXrOk51mshWEN8U4UtAVkQ9KGOtgH2Ih8StZfHihFAGQtu4EVtDF3vepnooKlhzuRH";

		public int TokenTimeoutMinutes { get; set; } = 45;
	}
	public class App
	{
		/// <summary>
		/// Global static Configuration instance
		/// -- Note this has to be set if read from configuration settings
		/// -- in application startup
		/// </summary>
		public static ApplicationConfiguration Configuration;

		/// <summary>
		/// Empty date
		/// </summary>
		public static DateTime MIN_DATE_VALUE = new DateTime(1900, 1, 1);


		static App()
		{
			// always assign but this may be reassigned during application configuration
			Configuration = new ApplicationConfiguration();
		}

	}
}
