var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Alerts } from "./Base/Services/Alerts/Alerts";
import { Cookies } from "./Base/Services/Cookies";
import { Utilities } from "./Base/Services/Utilities";
import { ContactPage } from "./Pages/Contacts";
import { IndexPage } from "./Pages/IndexPage";
(() => {
    window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
        const utilities = new Utilities();
        const cookies = new Cookies();
        const alerts = new Alerts();
        const currentUrl = new URL(document.location.href);
        const pathname = currentUrl.pathname.toLowerCase();
        const partsPath = pathname.split("/");
        let indexPageState = {
            ReadyState: undefined
        };
        window.addEventListener('pageStateChanged', function (event) {
            const stateName = event.detail.stateName;
            const stateValue = event.detail.stateValue;
            if (stateName === 'ReadyState') {
                indexPageState.ReadyState = stateValue;
            }
            CheckStatesAndProceed();
        });
        switch (partsPath[1]) {
            case "":
                {
                    const page = new IndexPage(utilities, cookies, alerts);
                    yield page.StartPage();
                }
                break;
            case "":
                {
                    const page = new ContactPage(utilities, cookies, alerts);
                    yield page.StartPage();
                }
                break;
            default:
                break;
        }
        function CheckStatesAndProceed() {
            if (indexPageState.ReadyState !== undefined) {
                if (indexPageState.ReadyState) {
                    console.log("Success Start Page");
                }
                else {
                    console.log("Wait Load Page");
                }
            }
        }
    }));
})();
//# sourceMappingURL=main_api.js.map