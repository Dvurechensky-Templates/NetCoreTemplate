/*
 * Author: Nikolay Dvurechensky
 * Site: https://dvurechensky.pro/
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 14 августа 2026 08:38:24
 * Version: 1.0.358
 */

namespace APP_UTILITIES.FormatsData.AppEnumsData;

/// <summary>
/// Перечисление на чьей стороне возникла ошибка
/// </summary>
public enum SideError
{
    UserSide = 1, //ошибка на стороне пользователя
    ServerSide = 2 //ошибка на стороне сервера
}