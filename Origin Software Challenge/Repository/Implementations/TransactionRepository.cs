using Model.Entities;
using Repository.Context;
using Repository.Interfaces;

namespace Repository.Implementations
{
	public class TransactionRepository : BaseRepository<Transaction>, ITransactionRepository
	{
		public TransactionRepository(DataContext dataContext) : base(dataContext)
		{
		}
	}
}
