using TaskManagementBuisnessLogic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public static class AuthKeyGetter
{
	private const string ApiKeyHeaderName = "X-API-Key";
	public static string getKey(HttpContext context)
	{
		return Convert.ToString(context.Request.Headers[ApiKeyHeaderName]);
	}
}
public class ApiKeyAttribute : ServiceFilterAttribute
{
	public ApiKeyAttribute()
		: base(typeof(ApiKeyAuthorizationFilter))
	{
	}
}

public class ApiKeyAuthorizationFilter : IAuthorizationFilter
{
	private const string ApiKeyHeaderName = "X-API-Key";

	//private readonly IApiKeyValidator _apiKeyValidator;

	//public ApiKeyAuthorizationFilter(IApiKeyValidator apiKeyValidator)
	//{
	//	_apiKeyValidator = apiKeyValidator;
	//}

	public void OnAuthorization(AuthorizationFilterContext context)
	{
		string apiKey = context.HttpContext.Request.Headers[ApiKeyHeaderName];

		//if (!_apiKeyValidator.IsValid(apiKey))
		//{
		//	context.Result = new UnauthorizedResult();
		//}
	}
}

