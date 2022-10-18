const lpage=require('../pageobjects/loginpage')
const hpage=require('../pageobjects/home.page')
const pinfopage=require('../pageobjects/paymentinformation.page')
const cinfopage=require('../pageobjects/clientinformation.page')
const acpage=require('../pageobjects/addclient.page')
const fs=require('fs')
let loginCredentials=JSON.parse(fs.readFileSync('./test/specs/TestData/script3.json'))

describe('VerifyingAddedClientInHomePage', async()=>
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
       expect(browser).toHaveTitleContaining("Home")
    })
    })

    loginCredentials.forEach(({clientPassword,name,filePath,gender,birthdate,status,nid,phone,address,pid,nname,ngender,nbirthdate,nnid,nrelationship,priority,nphone}) => {
    it('ValidateTheCountAfterAddingClient',  async () => 
    {
        var text1=await hpage.beforAddingClient.getText()
        var actualValue=text1.split(":")
        console.log("before adding client the count is "+actualValue[1]);

        await hpage.clients.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Home")

        await cinfopage.addClient.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Client")  
  
        await acpage.clientPassword.setValue(clientPassword)
        await acpage.name.setValue(name)

       // var filePath = await browser.uploadFile(filePath)
        await acpage.fileupload.setValue(filePath)
        await acpage.gender.setValue(gender)
        await acpage.birthdate.setValue(birthdate)
        await acpage.status.setValue(status)
        await acpage.nid.setValue(nid)
        await acpage.phone.setValue(phone)
        await acpage.address.setValue(address)
        await acpage.pid.setValue(pid)
        await acpage.nname.setValue(nname)
        await acpage.ngender.setValue(ngender)
        await acpage.nbirthdate.setValue(nbirthdate)
        await acpage.nnid.setValue(nnid)
        await acpage.nrelationship.setValue(nrelationship)
        await acpage.priority.setValue(priority)
        await acpage.nphone.setValue(nphone)
        await acpage.submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Client")
  
        await hpage.home.click()
        var text2=await hpage.afterAddingClient.getText()
        var increasedValue=text2.split(":")
        console.log("after adding the client count is "+increasedValue[1]);
        console.log("before adding the client count is "+actualValue[1]);
   
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