class addnomineepage{

    get actualname(){
      return  $("//input[@name='name']")
    }
  
    get gender(){
        return  $("//input[@name='sex']")
      }

      get birthdate(){
        return  $("//input[@name='birth_date']")
      }

      get nid(){
        return  $("//input[@name='nid']")
      }

      get relationship(){
        return  $("//input[@name='relationship']")
      }

      get priority(){
        return  $("//input[@name='priority']") 
      }

      get phone(){
        return  $("//input[@name='phone']")
      }

      get submit(){
        return  $("//input[@type='submit']")
      }

      
  }
  module.exports=new addnomineepage()