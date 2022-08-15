using System.ComponentModel.DataAnnotations;

namespace Model.Entities
{
	public class Card
	{
		public Card()
		{
			Transactions = new List<Transaction>();
		}

		[Key]
		public int IdCard { get; set; }

		public string CardNumber { get; set; }
		public string Pin { get; set; }
		public double Balance { get; set; }
		public bool Blocked { get; set; }
		public int FailedAttemps { get; set; }
		public DateTime ExpiryDate { get; set; }

		public List<Transaction> Transactions { get; set; }
	}
}
