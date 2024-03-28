import { expect } from '@playwright/test';

exports.AddMemberModal =  class AddMemberModal{
    constructor(page) {
        this.page = page
        this.formValidationError = page.locator("#editPerson")


    }

    async fillName(name) {
        await this.page.getByPlaceholder('Name').fill(name);
    }

    async fillJobTitle(jobTitle) {
        await this.page.getByPlaceholder('Job title').fill(jobTitle);
    }

    async selectCountry(country) {
        await this.page.locator('[data-test-id="country-input"]').selectOption(country);
    }

    async selectCurrency(currency) {
        await this.page.locator('[data-test-id="currency-input"]').selectOption(currency);
    }

    async fillSalary(salary) {
        await this.page.getByPlaceholder('Salary').fill(salary);
    }

    async selectEmploymentType(employmentType) {
        await this.page.locator('[data-test-id="employment-input"]').selectOption(employmentType);
    }

    async clickModalSaveButton() {
        await this.page.getByTestId('modal-save-button').click();
    }

    async clickModalCancelButton() {
        await this.page.getByTestId('modal-close-button').click();
    }

    async expectTextInTbody(text) {
        await expect(this.page.locator('tbody')).toContainText(text);
    }

    async verifyExpectPerson(personName) {
        await this.expectTextInTbody(personName);
    }

    async verifyExpectJobTitle(jobTitle) {
        await this.expectTextInTbody(jobTitle);
    }

    async verifyExpectEmployee(employeeType) {
        await this.expectTextInTbody(employeeType);
    }

    async verifyExpectFrance(country) {
        await this.expectTextInTbody(country);
    }

    async verifyExpectSalary(salary) {
        await this.expectTextInTbody(salary);
    }

    async expectFormValidationError(text) {
        await expect(this.page.locator('#editPerson')).toContainText(text);
    }

    async verifyNameIsEmpty() {
        await this.expectFormValidationError('Required field - Their first and last name.');
    }

    async verifyJobTitleIsEmpty() {
        await this.expectFormValidationError('Required field - What is their role?');
    }

    async verifySalaryIsEmpty() {
        await this.expectFormValidationError('Required field - Their gross yearly salary.');
    }

    async verifyCountryIsEmpty() {
        await this.expectFormValidationError('Required field - Where they live most of the time.');
    }

    async verifyCurrencyIsEmpty() {
        await this.expectFormValidationError('Required field - What currency will they be paid in?');
    }

    async verifyEmploymentTypeIsEmpty() {
        await this.expectFormValidationError('Required field - Full-time employee or contractor.');
    }

    async verifyNoTableRowIsPresent(){
        await expect(this.page.locator("//h1[contains(text(),'People')]/following-sibling::span")).toContainText("0 member")
    }



    async fillAddMemberForm({ name, jobTitle, country, currency, salary, employmentType }) {
        if (name) {
            await this.fillName(name)
        }
        if (jobTitle) {
            await this.fillJobTitle(jobTitle)
        }
        if (country) {
            await this.selectCountry(country);
        }
        if (currency) {
            await this.selectCurrency(currency);
        }
        if (salary) {
            await this.fillSalary(salary)
        }

    }


}