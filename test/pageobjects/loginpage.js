class loginpage{

    get username(){
      return  $("//input[@name='username']") 
    }

    get password(){
        return $("//input[@name='password']")
    }

    get loginButton(){
        return $("//button[text()='login']")
    }
}

module.exports=new loginpage()