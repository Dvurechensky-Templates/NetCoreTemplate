import { Cookies } from "./cookies";
import { Utilities } from "./utilities";

(() => {
    //по загрузке окна
    window.addEventListener("load", async () => {
        //создаем экземпляр класса утилит
        const utilities = new Utilities();

        //создаем экземпляр класса кук
        const cookies = new Cookies();

        //получаем текущий URL
        const currentUrl = new URL(document.location.href);

        //получаем путь из URL
        const pathname = currentUrl.pathname.toLowerCase();

        //разбиваем пути URL на части
        const partsPath = pathname.split("/");

        //смотрим путь
        switch (partsPath[1]) {
            case "": //страница авторизации
                {
                    //создаем экземпляр класса авторизации
                    //const auth = new IndexPage(utilities, cookies);
                    ////запускаем авторизацию
                    //await auth.startPage();
                }
                break;
            default:
                break;
        }
    });
})();