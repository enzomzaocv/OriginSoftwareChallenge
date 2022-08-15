using Model.Entities;
using Repository.Context;
using Repository.Interfaces;

namespace Repository.Implementations
{
	public class CardRepository : BaseRepository<Card>, ICardRepository
	{
		public CardRepository(DataContext dataContext) : base(dataContext)
		{
		}
	}
}
