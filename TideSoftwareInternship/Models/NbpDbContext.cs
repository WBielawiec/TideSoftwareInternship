using Microsoft.EntityFrameworkCore;

namespace TideSoftwareInternship.Models
{
    public class AppDbContext: DbContext
    {
        public DbSet<ExpenseList> Expenses { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

    }
}
