import { BasePage } from "./Base/BasePage";

export class ContactPage extends BasePage {
    /**
      * Метод запускает страницу
      */
    public async StartPage(): Promise<void> {
        await this.WaitForReadyState([true], [this.PostEventLoad]);
    }

    private PostEventLoad(): void {
        console.log("Contact post event...")
    }
}