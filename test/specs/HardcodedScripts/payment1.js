describe('ValidatingPaymentRecordInHomePage', async()=>
{
    
    it('EnteringTheURL', async () => 
    {
        await browser.url("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await expect(browser).toHaveUrlContaining("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
        await browser.maximizeWindow()
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

    })

    it('ValidateTheCountAfterAddingPayment',  async () => 
    {
        var beforPaymentAdding = await browser.$("//i[@class='fa fa-dollar fa-5x']/following-sibling::h5")
        var text1 = await beforPaymentAdding.getText();
        var actualValue = text1.split(":")
        console.log("before payment count is "+actualValue[1]);

        var payments=await browser.$("//a[text()='PAYMENTS']")
        await payments.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Payments")   
    
        var addPayment=await browser.$("//a[text()='Add Payment']")
        await addPayment.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Payment")  
  
        var clientid=await browser.$("//input[@name='client_id']")
        await clientid.setValue((100)+Math.round(Math.random()*1000))
        var month=await browser.$("//input[@name='month']")
        await month.setValue("october")
        var amount=await browser.$("//input[@name='amount']")
        await amount.setValue(Math.round(Math.random()*10000))
        var due=await browser.$("//input[@name='due']")
        await due.setValue(Math.round(Math.random()*1000))
        var fine=await browser.$("//input[@name='fine']")
        await fine.setValue(Math.round(Math.random()*1000))
        var submit=await browser.$("//input[@type='submit']")
        await submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Insert Payment") 
    
        var homepage=await browser.$("//a[text()='Aegon Life']")
        await homepage.click()
        var afterPaymentAdding = await browser.$("//i[@class='fa fa-dollar fa-5x']/following-sibling::h5")
        var text2=await afterPaymentAdding.getText()
        var increasedValue=text2.split(":")
        console.log("after payment count is "+increasedValue[1]);
        console.log("before payment count is "+actualValue[1]);
       
        if(actualValue[1]==(increasedValue[1]-1))
        {
           console.log("pass:payment Record incresed sucessfully");
        }
        else
        {
           console.log("fail:payment Record not incresed");
        }
    })
})
