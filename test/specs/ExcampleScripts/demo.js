describe('launchbrowser', async()=>
{
    it('sport', async () => 
    {
        await browser.url("https://www.yonex.com")
        await console.log(browser.getTitle())
        await browser.maximizeWindow()
        
    })

    it('Test case02',  async () => 
    {
        
    })

    
})
