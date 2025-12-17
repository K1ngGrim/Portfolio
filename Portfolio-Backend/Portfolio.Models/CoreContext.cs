using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Portfolio.Models;

public partial class CoreContext(DbContextOptions options) : IdentityDbContext <
    IdentityUser<Guid>,
    IdentityRole<Guid>,
    Guid
>(options)
{
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.HasDefaultSchema("core");

        OnIdentityCreating(builder);
        // OnLernCreating(builder);
    }
}