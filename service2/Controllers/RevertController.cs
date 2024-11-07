// Importamos el espacio de nombres necesario para trabajar con API en ASP.NET Core.
using Microsoft.AspNetCore.Mvc;

namespace service2.Controllers
{
    // Definimos la clase del controlador, marcando que será un controlador de tipo API.
    [ApiController]
    // Establecemos la ruta base para las solicitudes HTTP que acceden a este controlador.
    // La ruta será "/RevertText" debido a la convención de usar el nombre del controlador sin el sufijo "Controller".
    [Route("[controller]")]
    public class RevertTextController : ControllerBase
    {
        // Acción HTTP que responde a las solicitudes POST.
        // Esta acción recibe un objeto de tipo TextModel y devuelve un string.
        [HttpPost]
        public string Revert(TextModel text)
        {
            // Usamos el método Reverse() para invertir el texto recibido y lo unimos en una cadena
            // con el método string.Join() (eliminando cualquier separación entre los caracteres).
            return string.Join("", text.Text.Reverse());
        }
    }

    // Definimos el modelo de datos que será utilizado para recibir el texto en el cuerpo de la solicitud.
    public class TextModel
    {
        // Propiedad que contiene el texto a ser invertido.
        public string Text { get; set; }
    }
}
