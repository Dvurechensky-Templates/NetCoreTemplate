/*
 * Author: Nikolay Dvurechensky
 * Site: https://dvurechensky.pro/
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 11 мая 2026 10:58:26
 * Version: 1.0.265
 */

using System.Text.Json.Serialization;

namespace APP_UTILITIES.FormatsData.AppResponseData.BadResponses;

/// <summary>
/// Объект данных о причине неудачного запроса
/// </summary>
public class FailedRequestReason
{
    /// <summary>
    /// Причина неудачного запроса
    /// </summary>
    [JsonPropertyName("reason")]
    public string Reason { get; init; }
}