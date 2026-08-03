import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM - Tests', () => {

 it('User info update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({ min: 100, max: 999 }), chance.natural({ min: 1000, max: 9999 }), chance.natural({ min: 10000, max: 99999 }), '23-07-2028')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  
  })

  
})
