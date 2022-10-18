class clientinformationpage{

    get clientstatus(){
      return  $("//tbody//td[.='Gareth Walker']/following-sibling::td//a[.='Client Status']")
    }

    get addClient(){
      return  $("//a[text()='Add Client']")
    }
}

module.exports=new clientinformationpage()