/*
 * Author: Nikolay Dvurechensky
 * Site: https://sites.google.com/view/dvurechensky
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 01 января 2026 16:25:19
 * Version: 1.0.133
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