var Username = document.getElementById('registerName');
var Useremail = document.getElementById('registerEmail');
var Userpass = document.getElementById('registerPassword');
var msg = document.getElementById('msg');
var Users =[] ;
var user ;

function signUp(){
 if(isInputsEmpty()== false){
    user = {
        name :Username.value,
        email : Useremail.value,
        pass :Userpass.value
     };
     msg.classList.add("d-none");
    msg.classList.remove("d-block");
    if(isExist(user)== false){
        Users.push(user);
        localStorage.setItem('Users',JSON.stringify(Users));
        ChangeToSuccess();
    }else{
        msg.classList.add("d-none");
        msg.classList.remove("d-block");
    }
 }
 else{
   ChangeTorequired();
 }

}

function isExist( Newuser ) {
    if(localStorage.length ==0){
        return false ;

    }
    else{
        Users = JSON.parse(localStorage.getItem('Users'));
    }
    for (let index = 0; index < Users.length; index++) {
        var user = Users[index];

        if((user.name === Newuser.name) && (user.email === Newuser.email) &&(user.pass === Newuser.pass) ){
            return true;
        }
        else{
            return false ;
        }
        
    }
}


function isInputsEmpty() {
    if((Userpass.value == "" )||(Useremail.value == "")||(Username.value=== "")){
       return true;
    }
    else{
        return false;
    }
}

function ChangeToSuccess() {
    msg.innerHTML ="Success";
           msg.classList.add("text-success");
           msg.classList.remove("text-danger");
           msg.classList.add("d-block");
           msg.classList.remove("d-none");
   }
   function ChangeTorequired() {
    msg.innerHTML ="All inputs is required";
    msg.classList.add("text-danger");
    msg.classList.remove("text-success");
    msg.classList.add("d-block");
    msg.classList.remove("d-none");
   }