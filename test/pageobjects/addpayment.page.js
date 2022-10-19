class addpaymentpage{

    get clientid(){
      return  $("//input[@name='client_id']")
    }
  
    get month(){
        return  $("//input[@name='month']")
      }

      get amount(){
        return  $("//input[@name='amount']")
      }

      get due(){
        return  $("//input[@name='due']")
      }

      get fine(){
        return  $("//input[@name='fine']")
      }

      get submit(){
        return  $("//input[@type='submit']")
      }

      
  }
  module.exports=new addpaymentpage()