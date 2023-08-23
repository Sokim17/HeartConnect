using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using API.Entities;
using API.Interface;
using Microsoft.IdentityModel.Tokens;

namespace API.Service
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }
        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim> // claims are the data we want to store in the token
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };
            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature); // this is the key to sign the token
            var tokenDescriptor = new SecurityTokenDescriptor // this is the token descriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7), // token will expire in 7 days
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler(); // this is the token handler
            var token = tokenHandler.CreateToken(tokenDescriptor); // this is the token
            return tokenHandler.WriteToken(token); // this is the token string
        }
    }
}