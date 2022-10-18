describe('Payment4', async()=>
{
    var reciptNUmber = Math.ceil(Math.random()*100000000)
    it('EnteringTheURL', async () => 
    {
        await browser.url("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
    })  
    
    it('LoginToTheApplication', async () => 
    {
       var username= await browser.$("//input[@name='username']")
       await username.setValue(555)
       var password =await browser.$("//input[@name='password']")
       await password.setValue(666)
       var login= await browser.$("//button[text()='login']")
       await login.click()
       console.log(await browser.getTitle());
       expect(browser).toHaveTitleContaining("Home")

       it('Click on client',  async () => 
       {
         await browser.$("//a[text()='CLIENTS']").click()
         console.log(await browser.getTitle());
         expect(browser).toHaveTitleContaining("Home")
       })

       xit('click on edit button',  async () => 
       {
         var edit= await browser.$("//tbody//td[.='Gareth Walker']/following-sibling::td//a[.='Edit']")
         await edit.click()
         console.log(await browser.getTitle());
         //expect(browser).toHaveTitleContaining("Payments")  

       })
   
       
   })
    })