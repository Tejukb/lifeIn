describe('spicejetairline',async()=>{
    it('book aticket',async()=>{

        await browser.maximizeWindow()
        await browser.url("https://www.spicejet.com/")
        await browser.$("//div[contains(text(),'round trip')]").click()
        await browser.$("//div[contains(text(),'From')]").click()
        await browser.$("//div[contains(text(),'Ahmedabad')]").click()
        await browser.$("//div[contains(text(),'Pandit Deen Dayal Upadhyay Airport')]").click()
        await browser.$("//div[@data-testid='undefined-month-October-2022']/descendant::div[@class='css-1dbjc4n r-6koalj r-18u37iz r-d0pm55']/div[.='25']").click()
        await browser.$("//div[@data-testid='return-date-dropdown-label-test-id']").click()
        await browser.$("//div[@data-testid='undefined-month-November-2022']/descendant::div[@class='css-1dbjc4n']/div[@class='css-1dbjc4n r-6koalj r-18u37iz r-d0pm55']/div[.='8']").click()
        await browser.$("//div[contains(text(),'Search Flight')]").click()
    })
})