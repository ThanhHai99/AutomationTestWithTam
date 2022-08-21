const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const loginTestcaseConst = require('../testcase/login.testcase.const');
// const LoginTestCase = require('../testcase/login.testcase.const')

describe('My Login application', () => {
    it('should not login with valid credentials', async () => { // expect fail
        await LoginPage.open();
        await LoginPage.login(loginTestcaseConst.TestCase1.username, loginTestcaseConst.TestCase1.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    it('should login with valid credentials', async () => { // expect success
        await LoginPage.open();
        await LoginPage.login(loginTestcaseConst.TeseCase2.username, loginTestcaseConst.TeseCase2.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});
