using System.Reflection;
using System.Text.Json;

using APP_LOGGING.Accessories.LoggingAccessories;

using APP_UTILITIES.Middleware;

using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile($"{LoggingExtensions.AppDir}/app_configuration.json");

builder.WebHost.UseUrls($"https://{builder.Configuration["appSettings:appHost"]}");

builder.Services.AddControllersWithViews();

#region � ���� ������� ��������� ������� 

// ��������
// builder.Services.AddSingleton<ICashService, CashService>();

#endregion

builder.Services.Configure<JsonOptions>(options =>
{
    options.JsonSerializerOptions.WriteIndented = true; //��� ��������� ��������������
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

//��������� ������ ������ �������� ��������
builder.Services.AddAntiforgery(options =>
{
    options.HeaderName = "X-CSRF-TOKEN";
});

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "App API",
        Version = "1.0.0",
        Description = "���������� �� API",
        Contact = new OpenApiContact
        {
            Name = "Dvurechensky"
        }
    });
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

var appLifetime = app.Services.GetRequiredService<IHostApplicationLifetime>();

appLifetime.ApplicationStarted.Register(async () =>
{   //�������������� ������ �����������
    LoggingExtensions.Logging.InitializeLogging("API Reagent Project Control");
});

appLifetime.ApplicationStopping.Register(() =>
{
    LoggingExtensions.Logging.DeinitializeLogging(); //��������� ������ �����������
});

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "������������");
        c.RoutePrefix = "docs";
    });
    app.UseDeveloperExceptionPage(); //���������� �������� ����������
}

app.UseCookiePolicy(); //������������ �������� ����

// app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseRouting();

app.UseMiddleware<AntiforgeryMiddleware>(); //���������� ������ ������ �������� ��������
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
