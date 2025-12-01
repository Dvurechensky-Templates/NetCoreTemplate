/*
 * Author: Nikolay Dvurechensky
 * Site: https://sites.google.com/view/dvurechensky
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 01 декабря 2025 12:50:13
 * Version: 1.0.102
 */

namespace APP_LOGGING.Services.AppLoggingService;

/// <summary>
/// Интерфейс логирования
/// </summary>
public interface ILoggingService
{
    /// <summary>
    /// Метод инициализирует сервис логирования
    /// </summary>
    /// <param name="nameProject">Название проекта</param>
    void InitializeLogging(string nameProject);

    /// <summary>
    /// Метод выключает сервис логирования
    /// </summary>
    void DeinitializeLogging();

    /// <summary>
    /// Метод сохраняет сообщения
    /// </summary>
    /// <param name="textMessage">Текст сообщения</param>
    void LogMessageAsync(string textMessage);

    /// <summary>
    /// Метод сохраняет исключения
    /// </summary>
    /// <param name="exception">Исключение</param>
    /// <param name="notice">Дополнительная метка для исключения</param>
    void LogExceptionAsync(Exception exception, string notice = null!);
}
