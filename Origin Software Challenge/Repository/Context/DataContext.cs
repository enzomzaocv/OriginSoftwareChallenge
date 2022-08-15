using Microsoft.EntityFrameworkCore;
using Model.Entities;

namespace Repository.Context
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
		}

		public DbSet<Card> Card { get; set; }
		public DbSet<Transaction> Transaction { get; set; }
	}
}
