/*
 * Author: Nikolay Dvurechensky
 * Site: https://sites.google.com/view/dvurechensky
 * Gmail: dvurechenskysoft@gmail.com
 * Last Updated: 02 января 2026 11:07:02
 * Version: 1.0.134
 */

using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using AppWeb.Models;

namespace AppWeb.Controllers
{
    /// <summary>
    /// Главный контроллер
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="logger">Логирование MVC</param>
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Главная
        /// </summary>
        [HttpGet]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Контакты
        /// </summary>
        [HttpGet]
        [Route("/contacts")]
        public IActionResult Contacts()
        {
            return View();
        }

        /// <summary>
        /// Ошибка
        /// </summary>
        [HttpGet]
        [Route("/error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
