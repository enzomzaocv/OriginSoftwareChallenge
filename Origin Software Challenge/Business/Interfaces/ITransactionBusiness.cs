using Model.Dtos;

namespace Business.Interfaces
{
	public interface ITransactionBusiness
	{
		Task<DtoTransactionResponse> CreateTransactionAsync(DtoTransactionData transactionData);
	}
}
