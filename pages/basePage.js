import { expect } from '@playwright/test';
export class BasePage{
    constructor(page) {
        this.page = page

    }


    async toSentenceCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async verifyAlertMessage(message){
        await expect(this.page.getByRole('status')).toContainText(message);
    }
}