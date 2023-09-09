

let formValidation=()=>{
    let flag=1;
    uerror.style.visibility='hidden';
    perror.style.visibility='hidden';
    if(user.value == ''){
        uerror.innerHTML="please enter user name";
        uerror.style.visibility='visible';
        flag=0;
    }else if(user.value != 'shani'){
        uerror.innerHTML="user name or password does't match";
        uerror.style.visibility='visible';
        flag=0;
    }
    if(password.value.length < 4){
        perror.innerHTML='please enter strong password';
        perror.style.visibility='visible';
        flag=0;
    }else if(password.value != 'haider'){
        perror.innerHTML="user name or password does't match";
        perror.style.visibility='visible';
        flag=0;
    }else{
        flag=1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }
    
};