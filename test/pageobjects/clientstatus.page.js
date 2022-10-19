class clientstatuspage{

    get addpayment(){
      return  $("//a[text()='Add Payment']")
    }

    get addnominee(){
      return  $("//a[text()='Add Nominee']")
    }

}

module.exports=new clientstatuspage()