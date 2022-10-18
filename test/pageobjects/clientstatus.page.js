class clientstatuspage{

    get addpayment(){
      return  $("//a[text()='Add Payment']")
    }

}

module.exports=new clientstatuspage()