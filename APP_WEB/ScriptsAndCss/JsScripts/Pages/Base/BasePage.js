var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TypeAlert } from "../../Base/Services/Alerts/Alerts";
export class BasePage {
    constructor(utilities, cookies, alerts) {
        this.Utilities = utilities;
        this.Cookies = cookies;
        this.Alerts = alerts;
    }
    set PageReadyState(state) {
        if (this.readyState !== state) {
            this.readyState = state;
            const event = new CustomEvent('pageStateChanged', {
                detail: {
                    stateName: 'ReadyState',
                    stateValue: state
                }
            });
            window.dispatchEvent(event);
        }
    }
    get PageReadyState() {
        return this.readyState;
    }
    WaitForReadyState(conditions, actions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const intervalId = setInterval(() => {
                    const allConditionsMet = conditions.every(condition => condition === true);
                    if (allConditionsMet) {
                        clearInterval(intervalId);
                        if (allConditionsMet) {
                            this.PageReadyState = true;
                            actions.forEach(action => {
                                action();
                            });
                            const alert = {
                                text: "Страница успешно запущена",
                                type: TypeAlert.Ok,
                                duration: 2
                            };
                            this.Alerts.AlertShow(alert);
                            resolve({ states: conditions });
                        }
                        else {
                            console.log("Состояния еще не доступны или не достигнута готовность...");
                        }
                    }
                }, 100);
            });
        });
    }
}
//# sourceMappingURL=BasePage.js.map