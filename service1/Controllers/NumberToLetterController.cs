using Microsoft.AspNetCore.Mvc;  // Importa los componentes necesarios para crear el controlador API.
using Humanizer;                  // Importa la biblioteca Humanizer que facilita la conversión de números a texto.
namespace service1.Controllers;    // Define el espacio de nombres de este controlador.

[Route("[controller]")]  // Define la ruta para este controlador, de forma dinámica el nombre del controlador es usado (en este caso, "NumberToLetter").
[ApiController]         // Indica que este controlador es una API y utiliza convenciones específicas de las APIs en ASP.NET Core.
public class NumberToLetterController : ControllerBase
{
    // La acción del controlador para convertir un número a su forma en letras.
    [HttpGet("{number}")]  // Define que la acción será llamada a través de un GET HTTP, con el parámetro "number" en la ruta de la URL.
    public async Task<ActionResult<string>> ConvertToLetter(int number)
    {
        // Llama al método 'ToWords' de Humanizer para convertir el número a texto en español.
        // El parámetro 'false' significa que no se incluirá la palabra "y" (por ejemplo, "veinte y uno").
        // Se especifica la cultura en español (ES-es) para asegurar que la conversión se haga en ese idioma.
        string result = number.ToWords(false, new System.Globalization.CultureInfo("ES-es"));

        // Devuelve la respuesta en formato OK (200) con el texto convertido.
        return Ok(result);
    }
}
