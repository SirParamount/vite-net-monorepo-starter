using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
  [HttpGet]
  public IActionResult Get() => Ok(new { message = "Hello from .NET Core backend!" });
}