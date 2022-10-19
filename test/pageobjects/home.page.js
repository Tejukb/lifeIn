class homepage{

  get beforPaymentAdding(){
    return  $("//i[@class='fa fa-dollar fa-5x']/following-sibling::h5")
  }

    get payments(){
      return  $("//a[text()='PAYMENTS']")
    }

    get home(){
      return  $("//a[text()='Aegon Life']")
    }

    get afterPaymentAdding(){
      return  $("//i[@class='fa fa-dollar fa-5x']/following-sibling::h5")
    }

    get clients(){
      return  $("//a[text()='CLIENTS']")
    }

    get beforAddingClient(){
      return  $("//i[@class='fa fa-user fa-5x']/following-sibling::h5")
    }

    get afterAddingClient(){
      return  $("//i[@class='fa fa-user fa-5x']/following-sibling::h5")
    }  
    
    get nominee(){
      return  $("//a[text()='NOMINEE']")
    }
}
module.exports=new homepage()
