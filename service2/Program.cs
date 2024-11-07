// Creamos el builder para configurar la aplicación de ASP.NET Core.
var builder = WebApplication.CreateBuilder(args);

// Añadimos servicios al contenedor de dependencias de la aplicación.

// Se agrega el servicio para que la aplicación pueda manejar controladores.
builder.Services.AddControllers();

// Configuración de Swagger/OpenAPI para documentación de la API.
// "AddEndpointsApiExplorer" habilita la exploración de los endpoints de la API.
builder.Services.AddEndpointsApiExplorer();
// "AddSwaggerGen" permite generar la documentación Swagger automáticamente.
builder.Services.AddSwaggerGen();

// Creamos la aplicación con la configuración del builder.
var app = builder.Build();

// Configuración del pipeline de solicitudes HTTP de la aplicación.

// Si la aplicación está en el entorno de desarrollo, habilitamos Swagger para documentar la API.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();         // Activa Swagger en el pipeline.
    app.UseSwaggerUI();      // Activa la interfaz gráfica de Swagger para explorar la API.
}

// Activamos la redirección de HTTP a HTTPS para asegurar las comunicaciones.
app.UseHttpsRedirection();

// Configuramos CORS (Cross-Origin Resource Sharing) para permitir solicitudes de cualquier origen,
// con cualquier método HTTP y cabecera.
app.UseCors(p => {
    p.AllowAnyHeader();      // Permite cualquier encabezado.
    p.AllowAnyMethod();      // Permite cualquier método HTTP.
    p.AllowAnyOrigin();      // Permite solicitudes de cualquier origen.
});

// Activamos la autorización, aunque no se ha configurado ningún esquema específico.
app.UseAuthorization();

// Mapear los controladores (por defecto se usa el atributo [Route] en los controladores).
app.MapControllers();

// Iniciamos la aplicación para que comience a recibir solicitudes.
app.Run();
