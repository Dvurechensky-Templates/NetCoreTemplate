/*
 * Author: Nikolay Dvurechensky
 * Site: https://sites.google.com/view/dvurechensky
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 18 октября 2025 06:52:52
 * Version: 1.0.58
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