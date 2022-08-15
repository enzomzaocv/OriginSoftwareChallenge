using Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Model.Dtos;

namespace Origin_Software_Challenge.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TransactionController : ControllerBase
	{
		private readonly ITransactionBusiness transactionBusiness;

		public TransactionController(ITransactionBusiness transactionBusiness)
		{
			this.transactionBusiness = transactionBusiness;
		}

		[HttpPost]
		[Route("CreateTransaction")]
		public async Task<IActionResult> CreateTransaction(DtoTransactionData transactionData)
		{
			try
			{
				var transaction = await transactionBusiness.CreateTransactionAsync(transactionData);

				return Ok(transaction);
			}
			catch (Exception e)
			{
				return BadRequest(e.Message);
			}
			
		}

	}
}
