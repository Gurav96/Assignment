
function showPassword(){
    if(document.querySelector(".pass").type==="password")
    {
        document.querySelector(".pass").type="text";
        document.querySelector(".icon").src="open-eye.png"
    }
    else{
        document.querySelector(".pass").type="password";
        document.querySelector(".icon").src="close-eye.png"
    }
    
}




