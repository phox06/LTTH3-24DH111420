﻿using System.Web;
using System.Web.Mvc;

namespace LTTH3_24DH111420
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
