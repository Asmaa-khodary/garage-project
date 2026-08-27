function login() {
    username = document.getElementById("username").value;
    
    password = document.getElementById("password").value;
    message = document.getElementById("message");
   if( username==="habiba" &&password ==="2007")
   {
    message.style.color ="green";
    message.innerText ="Log In completed successfully";
   }
   else{message.style.color ="red";
    message.innerText ="Log In was not successful";
   }
}