var Useremail = document.getElementById('loginEmail');
var Userpass = document.getElementById('loginPassword');
var msg = document.getElementById('login_msg');
var Users =[] ;
var user ;
var isUserExist = false ;

function login(){
    if(isInputsEmpty()== false){
       user = {
           email : Useremail.value,
           pass :Userpass.value
        };
       msg.classList.add("d-none");
       msg.classList.remove("d-block");
       
       if(typeof(isExist(user)) == "number" ){
        Users = JSON.parse(localStorage.getItem('Users'));         
        ChangeToSuccess();
        localStorage.setItem("Userindex",isExist(user));
        window.location.href = "welcome_page.html";
       }else{
          incorrectUser();
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
            
           if((user.email === Newuser.email) &&(user.pass === Newuser.pass) ){
             
               return index ;
           }
           
       }
   }
   
   
   function isInputsEmpty() {
       if((Userpass.value == "" )||(Useremail.value == "")){
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

   function incorrectUser() {
    msg.innerHTML ="incorrect email or password";
    msg.classList.add("text-danger");
    msg.classList.remove("text-success");
    msg.classList.add("d-block");
    msg.classList.remove("d-none");
   }

   