const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
// navbar activeness 

(function activeNav(){
	const nav = document.querySelector('.nav-list').querySelectorAll('a');
console.log(nav);

nav.forEach(element => {
	element.addEventListener("click", function(){
		nav.forEach(a => a.classList.remove("active"));
		this.classList.add("active");
	})
});

})();


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', function(e){
	e.preventDefault();
	validateForm();
});

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateForm(){

	if(name.value == ""){
		document.getElementById('error1').innerHTML = "please enter your name";
	} else if(name.value !== ""){
		document.getElementById('error1').innerHTML = "";
	}
	if(email.value == ""){
		document.getElementById('error2').innerHTML = "please enter your email";
	}
	else if (email.value.match(validRegex)) {
		  document.getElementById('error2').innerHTML = "";
	  } else {
		document.getElementById('error2').innerHTML = "please enter a valid email";
	  }

	if(message.value == ""){
		document.getElementById('error3').innerHTML = "please type a message";
    }
	
	else if(message.value !== "" && name.value !== "" && email.value.match(validRegex)){
		document.getElementById('error3').innerHTML = "";
		alert('message sent successfully');
		form.reset();
	}	else {
		return false;
	}
}





