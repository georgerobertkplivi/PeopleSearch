import {expect, test} from '@playwright/test';
import {faker} from '@faker-js/faker';
import {searchPage} from '../pages/saerchPage'
import {AddMemberModal} from "../pages/modals/addMemberModal";
import {AddMember} from "../pages/dataclasses/addMember";

const CurrencyEnum = require('../pages/enums/currencyEnum');
const CountryEnum = require('../pages/enums/countryEnum');
const EmployeeTypeEnum = require('../pages/enums/employmentTypeEnum');
const TechJobEnum = require('../pages/enums/jobsEnum');


test.beforeEach(async ({ page }) => {
    const search = new searchPage(page);

    await search.openUrl()
});

test.afterEach(async ({ page }) => {

    await page.close();
});



test('create a new person', async ({ page }) => {

    const newMember = new AddMember(faker.person.fullName(), TechJobEnum.QA_ENGINEER,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()
    await page.waitForTimeout(3000)

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMember)
    await addMember.selectEmploymentType(newMember.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await search.verifyAlertMessage('You’ve successfully added a member.')


    // Search for the newly created Person
    await search.searchPeople(newMember.name)

    // Verify the data of the newly created Person
    await addMember.verifyExpectPerson(newMember.name)
    await addMember.verifyExpectJobTitle(newMember.jobTitle)
    await addMember.verifyExpectFrance(newMember.country)



});


test('edit a person', async ({ page }) => {

    const newMemberData = new AddMember(faker.person.fullName(), TechJobEnum.QA_ENGINEER,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()
    await page.waitForTimeout(3000)

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberData)
    await addMember.selectEmploymentType(newMemberData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await search.verifyAlertMessage('You’ve successfully added a member.')


    // Search for the newly created Person
    await search.searchPeople(newMemberData.name)

    // Verify the data of the newly created Person
    await addMember.verifyExpectPerson(newMemberData.name)
    await addMember.verifyExpectJobTitle(newMemberData.jobTitle)
    await addMember.verifyExpectFrance(newMemberData.country)

    // Edit the person
    const editMemberData = new AddMember(faker.person.fullName(), TechJobEnum.QA_ENGINEER,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);

    await search.clickEditPerson(newMemberData.name)

    await addMember.fillAddMemberForm(editMemberData)

    await addMember.clickModalSaveButton()


    // Verify the data of the Edited  Person
    await addMember.verifyExpectPerson(editMemberData.name)
    await addMember.verifyExpectJobTitle(editMemberData.jobTitle)
    await addMember.verifyExpectFrance(editMemberData.country)



});

test('create a new person without name', async ({ page }) => {

    const newMemberWithoutNameData = new AddMember("", TechJobEnum.QA_ENGINEER,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberWithoutNameData)
    await addMember.selectEmploymentType(newMemberWithoutNameData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await addMember.verifyNameIsEmpty()

    await addMember.clickModalCancelButton()

});
test('create a new person without job title', async ({ page }) => {

    const newMemberWithoutJobTitleData = new AddMember(faker.person.fullName(), "",
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberWithoutJobTitleData)
    await addMember.selectEmploymentType(newMemberWithoutJobTitleData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await addMember.verifyJobTitleIsEmpty()

    await addMember.clickModalCancelButton()

});
test('create a new person without country', async ({ page }) => {

    const newMemberWithoutJobTitleData = new AddMember(faker.person.fullName(), TechJobEnum.DATA_ANALYST,
        "", CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberWithoutJobTitleData)
    await addMember.selectEmploymentType(newMemberWithoutJobTitleData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await addMember.verifyCountryIsEmpty()

    await addMember.clickModalCancelButton()

});
test('create a new person without salary', async ({ page }) => {

    const newMemberWithoutJobTitleData = new AddMember(faker.person.fullName(), TechJobEnum.DATA_ANALYST,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        "",EmployeeTypeEnum.EMPLOYEE);




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberWithoutJobTitleData)
    await addMember.selectEmploymentType(newMemberWithoutJobTitleData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await addMember.verifySalaryIsEmpty()

    await addMember.clickModalCancelButton()

});
test('create a new person without employee type', async ({ page }) => {

    const newMemberWithoutJobTitleData = new AddMember(faker.person.fullName(), TechJobEnum.DATA_ANALYST,
        CountryEnum.GERMANY, CurrencyEnum.EUR,
        faker.number.int({ min: 50000, max: 300000 }).toString(),"");




    const search = new searchPage(page);
    const addMember = new AddMemberModal(page);



    expect(page.url()).toContain('/people')

    // Go to Add Member Modal
    await search.clickOnAddMemberButton()

    // Fill in the Add Member Form
    await addMember.fillAddMemberForm(newMemberWithoutJobTitleData)
    await addMember.selectEmploymentType(newMemberWithoutJobTitleData.employment)

    // Save the Form
    await addMember.clickModalSaveButton()

    // Verify Success Message
    await addMember.verifyEmploymentTypeIsEmpty()

    await addMember.clickModalCancelButton()

});