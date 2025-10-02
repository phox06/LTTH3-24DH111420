using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LTTH3_24DH111420.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult B1()
        {


            return View();
        }
        public ActionResult B2()
        {
            return View();
        }
        public ActionResult B3()
        {
            return View();
        }
        public ActionResult B4()
        {
            return View();
        }
        public ActionResult B5()
        {
            return View();
        }
        public ActionResult B6()
        {
            return View();
        }
        public ActionResult B7()
        {
            return View();
        }
        public ActionResult B8()
        {
            return View();
        }
        public ActionResult B9()
        {
            return View();
        }
    }
}