const lpage=require('../pageobjects/loginpage')
const hpage=require('../pageobjects/home.page')
const cinfopage=require('../pageobjects/clientinformation.page')
const cstatuspage=require('../pageobjects/clientstatus.page')
const addppage=require('../pageobjects/addpayment.page')
const pinfopage=require('../pageobjects/paymentinformation.page')
const fs=require('fs')
let loginCredentials=JSON.parse(fs.readFileSync('./test/specs/TestData/script2.json'))

describe('VerifingAddedPaymentInPaymentModule', async()=>
{
    var actualValue
    loginCredentials.forEach(({urlpath}) => {
        it('EnteringTheURL', async () => 
        {
            await browser.url(urlpath)
            await expect(browser).toHaveUrlContaining(urlpath)
            await browser.maximizeWindow()
        })
        })  
        
        loginCredentials.forEach(({username,password}) => {
        it('LoginToTheApplication', async () => 
        {
           await lpage.username.setValue(username)
           await lpage.password.setValue(password)
           await lpage.loginButton.click()
           console.log(await browser.getTitle());
           expect(browser).toHaveTitleContaining("Home")
        })
        })
  
    it('Click on client',  async () => 
    {
       await hpage.clients.click()
       console.log(await browser.getTitle());
       expect(browser).toHaveTitleContaining("Home")
    })

    it('Click on required client status',  async () => 
    {
        await cinfopage.clientstatus.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Client's Status")
    })

    it('Click on addPayment link',  async () => 
    {
        await cstatuspage.addpayment.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Payment")
    })

    loginCredentials.forEach(({month,amount1,due,fine}) => {
    it('Enter the req fields on addPayment link and verify in payments',  async () => 
    {
        await addppage.month.setValue(month)

        var amount=(amount1)
        await addppage.amount.setValue(amount)
        console.log("The x value is "+amount);

        await addppage.due.setValue(due)
        await addppage.fine.setValue(fine)
        await addppage.submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Insert Payment")
 
        await hpage.payments.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Payments")
        var y=await pinfopage.y1.getText()
     
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
})
