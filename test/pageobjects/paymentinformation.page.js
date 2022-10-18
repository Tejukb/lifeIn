class paymentinformationpage{

    get addPayment(){
      return  $("//a[text()='Add Payment']")
    }

    get y1(){
      return  $(`//tr[last()]//td[4]`)
    }
  
      
  }
  module.exports=new paymentinformationpage()