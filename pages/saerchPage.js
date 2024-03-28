import {BasePage} from './basePage'

exports.searchPage = class SearchPage extends BasePage{
    constructor(page) {
        super(BasePage);
        this.page = page
        this.searchBar = page.getByPlaceholder('Search people...')
        this.contractorButton = page.getByTestId('contractor-filter')
        this.employeeButton = page.getByTestId('employee-filter')
        this.addMemberButton = page.getByRole('button', { name: 'Add member' })


    }


    async openUrl() {
        await this.page.goto('http://localhost:3002/people');
    }


    async searchPeople(searchTerm) {
        await this.searchBar.fill(searchTerm)
    }
    async clickOnContractorButton(){
        await this.contractorButton.click()
    }

    async clickOnEmployeeButton(){
        await this.employeeButton.click()
    }

    async clickOnAddMemberButton(){
        await this.addMemberButton.click()
    }

    async clickEditPerson(personName) {
        await this.page.locator("//tr//td[contains(text(),'" + personName + "')]/following-sibling::td[last()]").click();
    }


}