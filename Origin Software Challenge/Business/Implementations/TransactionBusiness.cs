using Business.Interfaces;
using Business.Utils;
using Model.Dtos;
using Model.Entities;
using Repository.Interfaces;

namespace Business.Implementations
{
	public class TransactionBusiness : ITransactionBusiness
	{
		private readonly ICardRepository cardRepository;

		public TransactionBusiness(ICardRepository cardRepository)
		{
			this.cardRepository = cardRepository;
		}

		public async Task<DtoTransactionResponse> CreateTransactionAsync(DtoTransactionData transactionData)
		{
			if (transactionData.TransactionType != (int)TransactionType.Withdraw
				&& transactionData.TransactionType != (int)TransactionType.Balance) throw new NotSupportedException();

			var card = await cardRepository.FindByConditionAsync(x => x.CardNumber == transactionData.CardNumber && x.Pin == transactionData.Pin);

			if (card == null) throw new Exception("Tarjeta no encontrada.");

			if (transactionData.TransactionType == (int)TransactionType.Withdraw
				&& card.Balance < transactionData.Amount) throw new Exception("El monto de retiro supera los fondos disponibles.");

			var transaction = new Transaction
			{
				CreationDate = DateTime.Now,
				TransactionType = transactionData.TransactionType,
				Code = Guid.NewGuid().ToString(),
				Withdraw = transactionData.TransactionType == (int)TransactionType.Withdraw ? transactionData.Amount : null
			};

			card.Transactions.Add(transaction);

			if (transactionData.TransactionType == (int)TransactionType.Withdraw)
			{
				card.Balance -= transactionData.Amount ?? default;
			}

			await cardRepository.SaveAsync();

			return new DtoTransactionResponse
			{
				CardNumber = card.CardNumber,
				Withdraw = transaction.Withdraw ?? default,
				Amount = card.Balance,
				TransactionDate = transaction.CreationDate,
				ExpiryDate = card.ExpiryDate
			};
		}
	}
}
