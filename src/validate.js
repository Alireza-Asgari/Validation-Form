export const validate = (data,type) =>{
    const errors = {};

    if(!data.email){
        errors.email = "Email requaire";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email is invalid";
    }else{
        delete errors.email;
    }

    if(!data.password){
        errors.password = "Password requaire";
    }else if( data.password.length < 6 ){
        errors.password = "Password must be 6 charecters or more";
    }else{
        delete errors.password;
    }    

    if(type === "signup"){
        if(!data.name.trim()){
            errors.name = "Name requaire";
        }else{
            delete errors.name;
        }
        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm the Password";
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "Passwords do not match";
        }else{
            delete errors.confirmPassword;
        }
    
        if(data.isAccept){
            delete errors.isAccept
        }else{
            errors.isAccept = "Accept our regulations"
        }
    }

    return errors; 

}