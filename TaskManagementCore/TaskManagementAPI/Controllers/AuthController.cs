using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Westwind.AspNetCore.Security;
using System.IdentityModel.Tokens.Jwt;
using TaskManagementAPI.Helper;
using TaskManagementCore.Data;
using TaskManagementBuisnessLogic;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]

	
	public class AuthController : ControllerBase
    {
        public ApplicationConfiguration Configuration { get; }
        public AuthController(ApplicationConfiguration configuration)
        {
            Configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<object> Login(LoginDTO login)
        {
            using (TaskManagementDbContext context = new TaskManagementDbContext())
            {
                var user = BLUsers.Instance().Authenticate(login.username, login.password);
                if (user.Resp != ResponseType.Success)
                {
                    return BadRequest(new DataMessage<String>(ResponseType.Failed, "", "Authenication failed"));
                }

                //jwt generation


                // create a state object we can serialize as a single claim
                var UserState = new UserState();

                // track user state through our claim
                UserState.UserIdInt = user.Data.userId;
                UserState.Name = user.Data.FirstName + ' ' + user.Data.LastName;
                UserState.Email = "";
                bool isAdmin = false;

                var claims = new List<Claim>();
                claims.Add(new Claim("username", user.Data.userId.ToString()));
                claims.Add(new Claim("displayname", user.Data.FirstName + ' ' + user.Data.LastName));

                // Add roles as multiple claims
                foreach (var role in user.Data.userRoles.Split(","))
                {
                    if (role == "Super Admin")
                    {
                        UserState.IsAdmin = true;
                    }
                    claims.Add(new Claim(ClaimTypes.Role, role));
                }
                // Optionally add other app specific claims as needed
                claims.Add(new Claim("UserState", UserState.ToString()));


                var token = JwtHelper.GetJwtToken(
               user.Data.userId.ToString(),
               Configuration.JwtToken.SigningKey,
               Configuration.JwtToken.Issuer,
               Configuration.JwtToken.Audience,
               TimeSpan.FromMinutes(Configuration.JwtToken.TokenTimeoutMinutes),
               claims.ToArray());




                return Ok(new DataMessage<AuthResponseDTO>(ResponseType.Success, new AuthResponseDTO
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    userFirstName = user.Data.FirstName,
                    userRoles = user.Data.userRoles,
                    userlastName = user.Data.LastName,
                    userId = user.Data.userId



                }, "Success"));

            }
        }



        [AllowAnonymous]
        [HttpGet]

        public bool IsAuthenthenticated()
        {
            if (!User.Identity.IsAuthenticated)
                return false;

            return true;
        }
        private bool IsTokenExpired()
        {
            string id = ((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(s => s.Type == "jti")?.Value;
            if (id == null) return true;

            return false;
        }

        [HttpGet]
        public IActionResult LogOut()
        {
            HttpContext.Items["User"] = null;
            Response.Cookies.Delete("fmUt");

            return Ok(new DataMessage<string>(ResponseType.Success, "Logged out successfully.", "Success"));
        }



    }
}
