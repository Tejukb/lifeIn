const lpage=require('../pageobjects/loginpage')
const hpage=require('../pageobjects/home.page')
const pinfopage=require('../pageobjects/paymentinformation.page')
const addppage=require('../pageobjects/addpayment.page')
const fs=require('fs')
let loginCredentials=JSON.parse(fs.readFileSync('./test/specs/TestData/script1.json'))

describe('ValidatingPaymentRecordInHomePage', async()=>
{
    
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
       await expect(browser).toHaveTitleContaining("Home")
    })
    })

    loginCredentials.forEach(({clientid,month,amount,due,fine}) => {
    it('ValidateTheCountAfterAddingPayment',  async () => 
    {
        var text1 = await hpage.beforPaymentAdding.getText()
        var actualValue = text1.split(":")
        console.log("before payment count is "+actualValue[1]);

        await hpage.payments.click()
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Payments")   
    
        await pinfopage.addPayment.click()
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Add Payment")  
  
        await addppage.clientid.setValue(clientid)
        await addppage.month.setValue(month)
        await addppage.amount.setValue(amount)
        await addppage.due.setValue(due)
        await addppage.fine.setValue(fine)
        await addppage.submit.click()
        console.log(await browser.getTitle());  
        await expect(browser).toHaveTitleContaining("Insert Payment") 

        await hpage.home.click()
        var text2= await hpage.afterPaymentAdding.getText()
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
})
