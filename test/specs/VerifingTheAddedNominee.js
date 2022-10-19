const lpage=require('../pageobjects/loginpage')
const hpage=require('../pageobjects/home.page')
const cinfopage=require('../pageobjects/clientinformation.page')
const cstatuspage=require('../pageobjects/clientstatus.page')
const addnpage=require('../pageobjects/addnominee.page')
const ninfopage=require('../pageobjects/nomineeinformation.page')
const fs=require('fs')
let loginCredentials=JSON.parse(fs.readFileSync('./test/specs/TestData/script4.json'))
describe('VerifingTheAddedNominee', async()=>
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

    it('Click on Add Nominee link',  async () => 
    {
        await cstatuspage.addnominee.click() 
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Nominee")
    })

    loginCredentials.forEach(({name,gender,birthdate,nid,relationship,priority,phone}) => {
    it('Enter the req fields on Add Nominee link and verify in Nominee',  async () => 
    {
        var name="milana"
        await addnpage.actualname.setValue(name)
        console.log("The x name is "+name);
        await addnpage.gender.setValue(gender)
        await addnpage.birthdate.setValue(birthdate)
        await addnpage.nid.setValue(nid)
        await addnpage.relationship.setValue(relationship)
        await addnpage.priority.setValue(priority)
        await addnpage.phone.setValue(phone)
        await addnpage.submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Insert Nominee")

        await hpage.nominee.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Nominee Information")
        var y=await ninfopage.y1.getText() 
     
        console.log("The added nominee name "+y);
        console.log("nominee name reflecting on nominee page "+y);

       if(name == y)
       {
           console.log("pass: Nominee added sucesfully");
       }
       else
       {
           console.log("fail: Nominee not added");
       }
    })
       
   })
})