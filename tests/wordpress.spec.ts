import {test, expect } from "@playwright/test";

test.describe("E2E WordPress Playground", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://playground.wordpress.net/?language=pt_BR&mode=seamless", {
            timeout: 60000,
        })


        await expect(page.getByRole("heading", { name: 'Hello world!', exact: true }),
        ).toBeVisible({
            timeout: 30000,
        });
    });

    test("teste", async ({page}) => {
        test.beforeEach(async ({ page }) => {
        await page.goto("https://playground.wordpress.net/?language=pt_BR&mode=seamless", {
            timeout: 60000,
        })


        await expect(page.getByRole("heading", { name: 'Hello world!', exact: true }),
        ).toBeVisible({
            timeout: 30000,
        });
    });
    })
})