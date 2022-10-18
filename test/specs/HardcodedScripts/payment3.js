describe('VerifyingAddedClientInHomePage', async()=>
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

    it('ValidateTheCountAfterAddingClient',  async () => 
    {
        var beforAddingClient = await browser.$("//i[@class='fa fa-user fa-5x']/following-sibling::h5")
        var text1=await beforAddingClient.getText()
        var actualValue=text1.split(":")
        console.log("before adding client the count is "+actualValue[1]);

        var client=await browser.$("//a[text()='CLIENTS']")
        await client.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Home")
        
        var addClient= await browser.$("//a[text()='Add Client']")
        await addClient.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Client")  
   
        var clientPassword=await browser.$("//input[@name='client_password']")
        await clientPassword.setValue(12345)
        var name=await browser.$("//input[@name='name']")
        await name.setValue("suma")

        var filePath = await browser.uploadFile("C:/Users/Tejashree/OneDrive/Pictures/Capture 1.png")
        var fileupload=await browser.$("//input[@name='fileToUpload']")
        await fileupload.setValue(filePath)

        var gender=await browser.$("//input[@name='sex']")
        await gender.setValue("female")
        var birthdate=await browser.$("//input[@name='birth_date']")
        await birthdate.setValue("10thoct")
        var status=await browser.$("//input[@name='maritial_status']")
        await status.setValue("single")
        var nid=await browser.$("//input[@name='nid']")
        await nid.setValue("ind")
        var phone=await browser.$("//input[@name='phone']")
        await phone.setValue(1234567890)
        var address=await browser.$("//input[@name='address']")
        await address.setValue("Bangalore")
        var pid=await browser.$("//input[@name='policy_id']")
        await pid.setValue(Math.round(Math.random()*1000))
        var nname=await browser.$("//input[@name='nominee_name']")
        await nname.setValue("pavani")
        var ngender=await browser.$("//input[@name='nominee_sex']")
        await ngender.setValue("female")
        var nbirthdate=await browser.$("//input[@name='nominee_birth_date']")
        await nbirthdate.setValue("11oct")
        var nnid=await browser.$("//input[@name='nominee_nid']")
        await nnid.setValue("ind")
        var nrelationship=await browser.$("//input[@name='nominee_relationship']")
        await nrelationship.setValue("sister")
        var priority=await browser.$("//input[@name='priority']")
        await priority.setValue("first")
        var nphone=await browser.$("//input[@name='nominee_phone']")
        await nphone.setValue(0987654321)
        var submit=await browser.$("//input[@type='submit']")
        await submit.click()
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Add Client")
        
    
        var home=await browser.$("//a[text()='Aegon Life']")
        await home.click()
        var afterAddingClient = await browser.$("//i[@class='fa fa-user fa-5x']/following-sibling::h5")
        var text2=await afterAddingClient.getText()
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