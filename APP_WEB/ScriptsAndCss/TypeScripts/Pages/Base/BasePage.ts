import { Alerts, TypeAlert } from "../../Base/Services/Alerts/Alerts";
import { PageReadyStateChangedEvent } from "../../Base/Components/BaseEvents";
import { Utilities } from "../../Base/Services/Utilities";
import { Cookies } from "../../Base/Services/Cookies";

export class BasePage {
    /**
     * Экземпляр класса утилит
     */
    public readonly Utilities: Utilities;

    /**
     * Экземпляр класса кук
     */
    public readonly Cookies: Cookies;

    /**
     * Экземпляр класса системы уведомлений
     */
    public readonly Alerts: Alerts;

    /**
     * Состояние готовности страницы
     */
    private readyState: boolean;

    /**
     * Конструктор
     * @param utilities - экземпляр класса утилит
     * @param cookies - экземпляр класса кук
     */
    constructor(utilities: Utilities, cookies: Cookies, alerts: Alerts) {
        //присваиваем экземпляр класса утилит
        this.Utilities = utilities;

        //присваиваем экземпляр класса кук
        this.Cookies = cookies;

        //присваиваем экземпляр класса кук
        this.Alerts = alerts;
    }

    /**
    * Метод изменяет состояние готовности страницы
    */
    public set PageReadyState(state) {
        if (this.readyState !== state) {
            this.readyState = state;
            // Создаем и отправляем CustomEvent
            const event = new CustomEvent<PageReadyStateChangedEvent>('pageStateChanged', {
                detail: {
                    stateName: 'ReadyState',
                    stateValue: state
                }
            });

            window.dispatchEvent(event);
        }
    }

    /**
     * Метод получает состояние готовности страницы
     */
    public get PageReadyState() {
        return this.readyState;
    }

    /**
     * Метод ждёт состояния готовности страницы к показу пользователю
     * P.s на ней могут работать разные сервисы или запускаться перед началом работы со страницей
     * @param conditions - массив булевых условий, которые должны быть истинными
     * @param actions - массив отложенных функций, которые будут выполнены по очереди после выполнения всех условий
     */
    public async WaitForReadyState(conditions: boolean[], actions: (() => void)[]) {
        return new Promise((resolve) => {
            const intervalId = setInterval(() => {
                // Проверяем все условия готовности
                const allConditionsMet = conditions.every(condition => condition === true);

                if (allConditionsMet) {
                    clearInterval(intervalId); // Останавливаем интервал

                    if (allConditionsMet) {
                        this.PageReadyState = true;

                        /*
                          После того как все условия выполнены, выполняем отложенные функции по очереди
                        */
                        actions.forEach(action => {
                            action(); // Выполняем каждую отложенную функцию
                        });

                        // Пример использования NotificationAlert и TypeAlert
                        const alert: NotificationAlert = {
                            text: "Страница успешно запущена",
                            type: TypeAlert.Ok,
                            duration: 2
                        };

                        this.Alerts.AlertShow(alert)

                        resolve({ states: conditions});
                    } else {
                        console.log("Состояния еще не доступны или не достигнута готовность...");
                    }
                }
            }, 100); // Проверяем каждые 100 мс
        });
    }
}