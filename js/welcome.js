var header = document.getElementById('username');
var index;
(function() {
    index = localStorage.getItem("Userindex");
    Users = JSON.parse(localStorage.getItem('Users'));    
    header.innerHTML="Welcome "+ Users[index].name;
    
    console.log(index);
    
})();

function logout() {
    index = "";
    localStorage.setItem("Userindex", index);
    window.location.href = "Sign_in.html";
}