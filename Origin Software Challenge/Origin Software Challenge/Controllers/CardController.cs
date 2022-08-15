using Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Model.Dtos;

namespace Origin_Software_Challenge.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CardController : ControllerBase
	{
		private readonly ICardBusiness cardBusiness;

		public CardController(ICardBusiness cardBusiness)
		{
			this.cardBusiness = cardBusiness;
		}

		[HttpPost]
		[Route("CardExists")]
		public async Task<IActionResult> CardExists(DtoCardData cardData)
		{
			var card = await cardBusiness.GetCardAsync(cardData);

			return Ok(card);
		}

		[HttpPost]
		[Route("ValidatePin")]
		public async Task<IActionResult> ValidatePin(DtoPinData pinData)
		{
			try
			{
				var isValid = await cardBusiness.ValidatePinAsync(pinData);

				return Ok(isValid);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
		}
	}
}
