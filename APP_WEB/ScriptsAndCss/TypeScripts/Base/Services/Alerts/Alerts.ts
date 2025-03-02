export class Alerts {
    /**
     * Функция для отображения уведомления
    */
    public AlertShow(notification: NotificationAlert): void {
        const container = document.getElementById('notification-container');
        if (!container) return;

        // Создаем новое уведомление
        const newNotification = document.createElement('div');
        newNotification.classList.add('notification');

        switch (notification.type) {
            case TypeAlert.Error: 
                newNotification.classList.add('error_alert_animate');
                break;
            case TypeAlert.Ok:
                newNotification.classList.add('ok_alert_animate');
                break;
            case TypeAlert.Warning:
                newNotification.classList.add('warning_alert_animate');
                break;
        }

        newNotification.textContent = notification.text;

        // Добавляем уведомление в контейнер
        container.appendChild(newNotification);
        newNotification.classList.add('puff-in-center');

        // Убираем уведомление после указанного времени
        setTimeout(() => {
            newNotification.remove();
        }, notification.duration * 1000);
    }
}

declare global {
    /**
     * Уведомление
    */
    interface NotificationAlert {
        text: string;       // текст сообщения уведомления
        duration: number;   // продолжительность отображения в секундах
        type: TypeAlert;    // тип уведомления (расцветка)
    }
}


/**
 * Тип оповещения
*/
export enum TypeAlert {
    Error = 'error',
    Warning = 'warning',
    Ok = 'ok'
}