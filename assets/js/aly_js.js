/* .................. Decleare variables to catch elements ................... */

let login_btn=document.getElementById("login_btn");
let open_eye_btn=document.getElementById("open_eye_btn");
let blocked_eye_btn=document.getElementById("blocked_eye_btn");
let password_input=document.getElementById("password");
let open_eye=document.getElementById("password");
let blocked_eye=document.getElementById("blocked_eye");
let div_content=document.getElementById("div_content");
let mini_sidebar=document.getElementById("mini_sidebar");




/* .................................. Functions ............................... */

function Go_To_Main_Page(){
    setTimeout(function(){
        open("index.html","","");
    },1000);
}


function Show_Password (){
    password_input.setAttribute("type", "text");
    open_eye_btn.style.display="none"
    blocked_eye_btn.style.display="block"
}

function Hide_Password (){
    password_input.setAttribute("type", "password");
    open_eye_btn.style.display="block"
    blocked_eye_btn.style.display="none"
}

function Div_Toggle(){
    console.log("clicked")
    mini_sidebar.classList.toggle("display_block")
   
}


