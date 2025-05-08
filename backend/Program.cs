var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  // Allow CORS for the frontend application, loose policy for starting
  // development, tighten up later
  options.AddPolicy("AllowFrontend", policy =>
  {
    policy.WithOrigins("https://localhost:5001", "https://localhost:5002", "https://localhost:4173") // Vite dev and preview app ports
            .AllowAnyHeader()
            .AllowAnyMethod();
  });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.Run();
