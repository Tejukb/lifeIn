class addclientpage{

    get clientPassword(){
      return  $("//input[@name='client_password']")
    }

    get name(){
        return $("//input[@name='name']")
    }

    get fileupload(){
        return $("//input[@name='fileToUpload']")
    }

    get gender(){
        return $("//input[@name='sex']")
    }

    get birthdate(){
        return $("//input[@name='birth_date']")
    }

    get status(){
        return $("//input[@name='maritial_status']")
    }

    get nid(){
        return $("//input[@name='nid']")
    }

    get phone(){
        return $("//input[@name='phone']")
    }

    get address(){
        return $("//input[@name='address']")
    }

    get pid(){
        return $("//input[@name='policy_id']")
    }

    get nname(){
        return $("//input[@name='nominee_name']")
    }

    get ngender(){
        return $("//input[@name='nominee_sex']")
    }

    
    get nbirthdate(){
        return $("//input[@name='nominee_birth_date']")
    }

    
    get nnid(){
        return $("//input[@name='nominee_nid']")
    }

    
    get nrelationship(){
        return $("//input[@name='nominee_relationship']")
    }

    
    get priority(){
        return $("//input[@name='priority']")
    }

    get nphone(){
        return $("//input[@name='nominee_phone']")
    }

    get submit(){
        return $("//input[@type='submit']")
    }

}

module.exports=new addclientpage()