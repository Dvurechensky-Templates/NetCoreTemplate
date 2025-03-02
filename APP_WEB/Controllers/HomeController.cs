using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using AppWeb.Models;

namespace AppWeb.Controllers
{
    /// <summary>
    /// ������� ����������
    /// </summary>
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        /// <summary>
        /// �����������
        /// </summary>
        /// <param name="logger">����������� MVC</param>
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// �������
        /// </summary>
        [HttpGet]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// ��������
        /// </summary>
        [HttpGet]
        [Route("/contacts")]
        public IActionResult Contacts()
        {
            return View();
        }

        /// <summary>
        /// ������
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
