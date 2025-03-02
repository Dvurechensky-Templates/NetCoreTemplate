import { PageReadyStateChangedEvent } from "./Base/Components/BaseEvents";
import { Alerts } from "./Base/Services/Alerts/Alerts";
import { Cookies } from "./Base/Services/Cookies";
import { Utilities } from "./Base/Services/Utilities";
import { ContactPage } from "./Pages/Contacts";
import { IndexPage } from "./Pages/IndexPage";

(() => {
    //по загрузке окна
    window.addEventListener("load", async () => {
        //создаем экземпляр класса утилит
        const utilities = new Utilities();

        //создаем экземпляр класса кук
        const cookies = new Cookies();

        //создаем экземпляр класса уведомлений
        const alerts = new Alerts();

        //получаем текущий URL
        const currentUrl = new URL(document.location.href);

        //получаем путь из URL
        const pathname = currentUrl.pathname.toLowerCase();

        //разбиваем пути URL на части
        const partsPath = pathname.split("/");

        // Состояние IndexPage, изначально неопределенное
        let indexPageState = { 
            ReadyState: undefined
        };

        window.addEventListener('pageStateChanged', function (event:
            CustomEvent<PageReadyStateChangedEvent>) {
            const stateName = event.detail.stateName;
            const stateValue = event.detail.stateValue;

            if (stateName === 'ReadyState') {
                indexPageState.ReadyState = stateValue;
            }

            CheckStatesAndProceed();
        });

        //смотрим путь
        switch (partsPath[1]) {
            case "": 
                {
                    // создаем экземпляр страницы
                    const page = new IndexPage(utilities, cookies, alerts);
                    // запускаем 
                    await page.StartPage();
                }
                break;
            case "contacts": 
                {
                    // создаем экземпляр страницы
                    const page = new ContactPage(utilities, cookies, alerts);
                    // запускаем 
                    await page.StartPage();
                }
                break;
            default:
                break;
        }

        function CheckStatesAndProceed() {
            if (indexPageState.ReadyState !== undefined) {
                // Все необходимые состояния получены
                if (indexPageState.ReadyState) {
                    console.log("Success Start Page");
                } else {
                    console.log("Wait Load Page");
                }
            }
        }
    });
})();