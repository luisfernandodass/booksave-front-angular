    let errorPassword = document.getElementById("errorPassword");
    let errorEmail = document.getElementById("errorEmail");
	let inputEmail = document.getElementById("inputEmail");

function checkData(){
	   var email = inputEmail.value;
      
		if(email.length < 7){
			errorEmail.className = 'warning';
				errorEmail.textContent = "E-mail deve ter @";
		} else{
			errorEmail.textContent = "";
		}
	}

	function typing(){
		errorEmail.className = "warning";
		erroEmail.textContent = "Deveter"
	}

	
inputEmail.addEventListener('focus', checkData, false);

inputEmail.addEventListener('blur', typing, false);