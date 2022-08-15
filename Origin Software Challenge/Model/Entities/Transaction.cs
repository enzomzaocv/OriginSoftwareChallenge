using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Model.Entities
{
	public class Transaction
	{
		[Key]
		public int IdTransaction { get; set; }

		public string Code { get; set; }
		public DateTime CreationDate { get; set; }
		public double? Withdraw { get; set; }
		public int TransactionType { get; set; }
		public int IdCard { get; set; }

		#region Relationships

		[ForeignKey(nameof(IdCard))]
		public Card Card { get; set; }

		#endregion
	}
}
