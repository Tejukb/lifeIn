describe('Verifing the added nominee', async()=>
{
    var reciptNUmber = Math.ceil(Math.random()*100000000)
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
         await browser.$("//a[text()='CLIENTS']").click()
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

    it('Click on Add Nominee link',  async () => 
    {
        var addnominee=await browser.$("//a[text()='Add Nominee']")
        await addnominee.click() 
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("add Nominee")
    })
    it('Enter the req fields on Add Nominee link and verify in Nominee',  async () => 
    {
        var name="milana"
        var actualname=await browser.$("//input[@name='name']")
        await actualname.setValue(name)
        console.log("The x name is "+name);

        var gender=await browser.$("//input[@name='sex']")
        await gender.setValue("fimale")
        var birthdate=await browser.$("//input[@name='birth_date']")
        await birthdate.setValue("15aug") 
        var nnid=await browser.$("//input[@name='nid']")
        await nnid.setValue("ind")
        var nrelationship=await browser.$("//input[@name='relationship']")
        await nrelationship.setValue("sister")
        var priority=await browser.$("//input[@name='priority']")
        await priority.setValue("first")
        var nphone=await browser.$("//input[@name='phone']")
        await nphone.setValue(0987654321)
        var submit=await browser.$("//input[@type='submit']")
        await submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Insert Nominee")

        var nominee=await browser.$("//a[text()='NOMINEE']")
        await nominee.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Nominee Information")
        var  y1 = await $(`//tr[(last()-1)]//td[3]`)
        var  y   = await y1.getText()
     
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