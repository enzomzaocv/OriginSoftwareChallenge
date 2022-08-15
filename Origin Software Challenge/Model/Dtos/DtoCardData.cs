namespace Model.Dtos
{
	public class DtoCardData
	{
		public string CardNumber { get; set; }
	}

	public class DtoPinData : DtoCardData
	{
		public string Pin { get; set; }
	}
}
