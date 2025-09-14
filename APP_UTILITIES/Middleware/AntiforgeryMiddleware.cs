﻿/*
 * Author: Nikolay Dvurechensky
 * Site: https://sites.google.com/view/dvurechensky
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 14 сентября 2025 06:53:03
 * Version: 1.0.24
 */

using APP_LOGGING.Accessories.LoggingAccessories;

using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;

namespace APP_UTILITIES.Middleware;

/// <summary>
/// Обработчик службы против подделки запросов
/// </summary>
public class AntiforgeryMiddleware
{
    /// <summary>
    /// Делегат на передачу действия следующему в роутере
    /// </summary>
    private RequestDelegate Next { get; }

    /// <summary>
    /// API для настройки функций против подделки
    /// </summary>
    private IAntiforgery Antiforgery { get; }

    /// <summary>
    /// Конструктор
    /// </summary>
    /// <param name="next">Делегат на передачу действия следующему в роутере</param>
    /// <param name="antiforgery">API для настройки функций против подделки</param>
    public AntiforgeryMiddleware(RequestDelegate next, IAntiforgery antiforgery)
    {
        Next = next;
        Antiforgery = antiforgery;
    }

    /// <summary>
    /// Асинхронный обработчик запроса
    /// </summary>
    /// <param name="context">Контекст запроса</param>
    /// <returns></returns>
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            //генерируем токен против подделки запросов
            var tokens = Antiforgery.GetAndStoreTokens(context);

            //устанавливаем токен в куку
            context.Response.Cookies.Append("CSRF-TOKEN", tokens.RequestToken ?? string.Empty, new CookieOptions { HttpOnly = false });
        }
        catch (Exception exception)
        {
            //логируем исключение
            exception.LogException();
        }
        finally
        {
            //передаем управление на следующий метод в роутере что бы был вывод/перенаправление ошибки 
            await Next.Invoke(context);
        }
    }
}
