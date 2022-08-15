using Business.Interfaces;
using Business.Utils;
using Model.Dtos;
using Model.Entities;
using Repository.Interfaces;

namespace Business.Implementations
{
	public class CardBusiness : ICardBusiness
	{
		private readonly ICardRepository cardRepository;

		public CardBusiness(ICardRepository cardRepository)
		{
			this.cardRepository = cardRepository;
		}

		public async Task<bool> GetCardAsync(DtoCardData cardData)
		{
			if (cardData == null) return false;

			var card = await cardRepository.FindByConditionAsync(x => x.CardNumber == cardData.CardNumber && !x.Blocked);

			return card != null;
		}

		public async Task<bool> ValidatePinAsync(DtoPinData pinData)
		{
			var card = await cardRepository.FindByConditionAsync(x => x.CardNumber == pinData.CardNumber);

			if (card == null || card.Blocked) throw new Exception("Tarjeta Bloqueada.");

			if (card.Pin != pinData.Pin)
			{
				card.FailedAttemps++;

				if (card.FailedAttemps >= Constants.MAX_FAILED_ATTEMPS) card.Blocked = true;

				await cardRepository.SaveAsync();

				return false;
			}

			if (card.FailedAttemps > 0 && !card.Blocked)
			{
				card.FailedAttemps = 0;
				card.Blocked = false;
				await cardRepository.SaveAsync();
			}

			return true;
		}
	}
}
