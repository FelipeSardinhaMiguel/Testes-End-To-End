import { test, expect } from "@playwright/test";
import { Auth } from "../src/Auth";

test.describe("E2E WordPress Playground", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://sosfinance.joaoc.dev", {
            timeout: 60000,
        })
    });

    test("abrir uma matéria", async ({ page }) => {

        const menuButton = page.getByRole("link", { name: "Educação Financeira" });

        await menuButton.click();
        const articleLink = page.locator('h2').getByRole('link', {
            name: 'Por que é importante guardar'
        });

        await articleLink.click();


        await page.goto("https://playground.wordpress.net/?language=pt_BR&mode=seamless", {
            timeout: 60000,
        })

        await expect(
            await page.innerText("article h1")
        ).toBe("Por que é importante guardar dinheiro?");
    });



    test("fazer um comentário dentro de uma matéria", async ({ page }) => {
        const menuButton = page.getByRole("link", { name: "Educação Financeira" });

        await menuButton.click();
        const articleLink = page.locator('h2').getByRole('link', {
            name: 'Por que é importante guardar'
        });

        await articleLink.click();


        await page.goto("https://playground.wordpress.net/?language=pt_BR&mode=seamless", {
            timeout: 60000,
        })

        page.getByRole("link", { name: "login" }).click();

        await page.fill("#user_login", "etec");
        await page.fill("#user_pass", "etec123@@");
        await page.click("#wp-submit");

        //campo de ccomentários

        await page.fill("#comment", "Você sabe o que é caviar?");
        await page.click("#submit");
    });

    test("fazer teste e acessa o painel do admin", async ({ page }) => {
        const auth = new Auth(page);
        await auth.doLogin("etec", "etec123@@");

        await expect(
            page.getByRole("heading", {
                name: "Painel",
            }),
        ).toBeVisible();
    });
});