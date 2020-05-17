using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Mark",
                    Email = "test@gmail.com",
                    UserName = "test@gmail.com",
                    Address = new Address
                    {
                        FirstName = "Mark",
                        LastName = "Nguyen",
                        Street = "Street",
                        City = "Hanoi",
                        State = "VN",
                        ZipCode = "100000"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}