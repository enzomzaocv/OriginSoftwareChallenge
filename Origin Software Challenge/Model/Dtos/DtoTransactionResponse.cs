namespace Model.Dtos
{
	public class DtoTransactionResponse
	{
		public double Withdraw { get; set; }
		public double Amount { get; set; }
		public DateTime TransactionDate { get; set; }
		public string TransactionDateStr => TransactionDate.ToString("G");
		public string CardNumber { get; set; }
		public DateTime ExpiryDate { get; set; }
		public string ExpiryDateStr => $"{ExpiryDate.Month}-{ExpiryDate.Year}";
	}
}
