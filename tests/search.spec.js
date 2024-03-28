import { test, expect } from '@playwright/test';
import {searchPage} from '../pages/saerchPage'
import {Person} from '../pages/dataclasses/person'


test.beforeEach(async ({ page }) => {
    const search = new searchPage(page);

    await search.openUrl()
});

test.afterEach(async ({ page }) => {

    await page.close();
});



test('search people by full name', async ({ page }) => {

    const annHenry = new Person('Ann Henry', 'Product manager', 'Employee', 'Germany', 'EUR 120,000.00 €');

    const searchBarLocator = page.locator('#search-person');
    const peopleNameLocator = page.locator("//td[.='" + annHenry.name + "']");
    const jobTitleLocator = page.locator("//td[.='" + annHenry.jobTitle + "']");
    const employeeTypeLocator = page.locator("//td[.='" + annHenry.employment + "']");
    const countryLocator = page.locator("//td[.='" + annHenry.country + "']");
    const salaryLocator = page.locator("//td[.='" + annHenry.salary + "']");


    const search = new searchPage(page);



    expect(page.url()).toContain('/people')
    await expect(searchBarLocator).toBeVisible();
    await search.searchPeople(annHenry.name)
    await expect(peopleNameLocator).toContainText(annHenry.name)
    await expect(jobTitleLocator).toContainText(annHenry.jobTitle)
    await expect(employeeTypeLocator).toContainText(annHenry.employment)
    await expect(countryLocator).toContainText(annHenry.country)
    await expect(salaryLocator).toContainText(annHenry.salary)


});

test('search people by partial', async ({ page }) => {

    const partialAnnHenry = new Person('Hen', 'Product manager', 'Employee', 'Germany', 'EUR 120,000.00 €');

    const searchBarLocator = page.locator('#search-person');
    const peopleNameLocator = page.locator("tr.sc-fnGiBr>td");
    const jobTitleLocator = page.locator("//td[.='" + partialAnnHenry.jobTitle + "']");
    const employeeTypeLocator = page.locator("//td[.='" + partialAnnHenry.employment + "']");
    const countryLocator = page.locator("//td[.='" + partialAnnHenry.country + "']");
    const salaryLocator = page.locator("//td[.='" + partialAnnHenry.salary + "']");

    const search = new searchPage(page);



    expect(page.url()).toContain('/people')

    await search.searchPeople(partialAnnHenry.name)

    await expect(peopleNameLocator.first()).toContainText(partialAnnHenry.name)


    await expect(jobTitleLocator).toContainText(partialAnnHenry.jobTitle)

    await expect(employeeTypeLocator.first()).toContainText(partialAnnHenry.employment)

    await expect(countryLocator.first()).toContainText(partialAnnHenry.country)

    await expect(salaryLocator).toContainText(partialAnnHenry.salary)


});

test('filter people by Employment Type[Contractor]', async ({ page }) => {
    const search = new searchPage(page);


    await search.clickOnContractorButton()


    //verify the results contains Contract People
    await expect(page.locator('tbody')).toContainText('Contractor');

    //verify the results contains Employee People
    await expect(page.locator('tbody')).not.toContainText('Employee');

});


test('filter people by Employment Type[Employee]', async ({ page }) => {
    const search = new searchPage(page);


    await search.clickOnEmployeeButton()


    //verify the results contains Contract People
    await expect(page.locator('tbody')).toContainText('Employee');

    //verify the results contains Employee People
    await expect(page.locator('tbody')).not.toContainText('Contractor');

});
