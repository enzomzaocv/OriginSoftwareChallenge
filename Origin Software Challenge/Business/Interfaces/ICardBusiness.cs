using Model.Dtos;
using Model.Entities;

namespace Business.Interfaces
{
	public interface ICardBusiness
	{
		Task<bool> GetCardAsync(DtoCardData cardData);
		Task<bool> ValidatePinAsync(DtoPinData cardData);
	}
}
