describe('VerifingAddedPaymentInPaymentModule', async()=>
{
    var actualValue
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
  
    it('Click on client',  async () => 
    {
      var clients=await browser.$("//a[text()='CLIENTS']")
      await clients.click()
      console.log(await browser.getTitle());
      expect(browser).toHaveTitleContaining("Home")
    })

    it('Click on required client status',  async () => 
    {
        var clientstatus=await browser.$("//tbody//td[.='Gareth Walker']/following-sibling::td//a[.='Client Status']")
        await clientstatus.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Client's Status")
    })

    it('Click on addPayment link',  async () => 
    {
        var addpayment=await browser.$("//a[text()='Add Payment']")
        await addpayment.click() 
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Payment")
    })

    it('Enter the req fields on addPayment link and verify in payments',  async () => 
    {
        var month=await browser.$("//input[@name='month']")
        await month.setValue("october")

        var amount=Math.round(Math.random()*10000)
        var addedamount=await browser.$("//input[@name='amount']")
        await addedamount.setValue(amount)
        console.log("The x value is "+amount);

        var due=await browser.$("//input[@name='due']")
        await due.setValue(50)
        var fine=await browser.$("//input[@name='fine']")
        await fine.setValue(100)
        var submit=await browser.$("//input[@type='submit']")
        await submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Insert Payment")
   
        var payments=await browser.$("//a[text()='PAYMENTS']")
        await payments.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Payments")
        var  y1 = await $(`//tr[last()]//td[4]`)
        var  y   = await y1.getText()
     
        console.log("The added payment is "+y);
        console.log("amount reflecting in paymentpage "+y);

       if(amount == y)
       {
           console.log("pass: Payment added sucesfully");
       }
       else
       {
           console.log("fail: Payment not added");
       }
   
    })
})