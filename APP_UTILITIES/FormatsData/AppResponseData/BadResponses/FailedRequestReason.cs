/*
 * Author: Nikolay Dvurechensky
 * Site: https://dvurechensky.pro/
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 09 августа 2026 15:53:16
 * Version: 1.0.353
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