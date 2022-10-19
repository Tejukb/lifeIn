class nomineeinformationpage{

    get y1(){
      return  $(`//tr[(last()-1)]//td[3]`)
    }
  
      
  }
  module.exports=new nomineeinformationpage()