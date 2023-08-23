using API.Data;
using API.Interface;
using API.Service;
using Microsoft.EntityFrameworkCore;

namespace API.Extentions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config){
            services.AddDbContext<DataContext>(opt => {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<ITokenService, TokenService>();
            services.AddCors();
            return services;
        }
    }
}