namespace Model.Dtos
{
	public class DtoTransactionData
	{
		public double? Amount { get; set; }
		public int TransactionType { get; set; }
		public string CardNumber { get; set; }
		public string Pin { get; set; }
	}
}
