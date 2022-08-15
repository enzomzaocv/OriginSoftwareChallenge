using Business.Implementations;
using Business.Interfaces;
using Microsoft.EntityFrameworkCore;
using Repository.Context;
using Repository.Implementations;
using Repository.Interfaces;

var builder = WebApplication.CreateBuilder(args);
var allowedOrigin = "myAllowedOrigins";

// Add services to the container.
builder.Services.AddScoped<ICardRepository, CardRepository>();
builder.Services.AddScoped<ICardBusiness, CardBusiness>();
builder.Services.AddScoped<ITransactionBusiness, TransactionBusiness>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(options =>
{
	options.UseSqlServer(builder.Configuration.GetConnectionString("OriginSoftwareDataBase"));
});

// Enable CORS
builder.Services.AddCors(options =>
{
	options.AddPolicy(name: allowedOrigin,
		builder =>
		{
			builder.WithOrigins("http://localhost:4200").AllowAnyOrigin().AllowAnyHeader();
		});
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(allowedOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();
