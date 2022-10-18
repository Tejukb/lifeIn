var Excel = require('xlsx')
var wb = Excel.readFile('./test/specs/TestData/data-Excel.xlsx')
var sheet = wb.Sheets['Sheet1']

var ExcelData =Excel.utils.sheet_to_json(sheet)


const fs=require('fs')

describe('ExcelPractice', async()=>
{
    
    it('EnteringTheURL', async () => 
    {
        await browser.url(ExcelData[0].url)
        await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await browser.maximizeWindow()
    })  
    
        
    it('LoginToTheApplication', async () => 
    {
        await browser.$("//input[@name='username']").setValue(ExcelData[0].username)
        
        await browser.$("//input[@name='password']").setValue(ExcelData[0].password)
       
        var login= await browser.$("//button[text()='login']")
        await login.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Home")


});

})