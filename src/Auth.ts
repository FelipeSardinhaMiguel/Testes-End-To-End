import { Page } from "@playwright/test";

export class Auth{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async doLogin(username: string, password: string){
        await this.page.goto("https://sosfinance.joaoc.dev/wp-login.php");
        await this.page.fill("#user_login", username);
        await this.page.fill("#user_pass", password);
        await this.page.click("#wp-submit");
    }
}