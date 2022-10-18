const fs=require('fs')

let loginCredentials=JSON.parse(fs.readFileSync('./test/specs/TestData/Login.json'))

describe('jsonPractice', async()=>
{
    
    it('EnteringTheURL', async () => 
    {
        await browser.url("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await browser.maximizeWindow()
    })  
    
    loginCredentials.forEach(({username,password}) => {
        
    it('LoginToTheApplication', async () => 
    {
        await browser.$("//input[@name='username']").setValue(username)
        
        await browser.$("//input[@name='password']").setValue(password)
       
        var login= await browser.$("//button[text()='login']")
        await login.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Home")

    })

});

})