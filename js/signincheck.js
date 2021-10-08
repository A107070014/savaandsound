        
        
        const form2 = document.getElementById('form2');
		const email2 = document.getElementById('email2');
		const password2 = document.getElementById('password2');
		const password3 = document.getElementById('password3');
		
		
		
		form2.addEventListener('submit', e => {
			e.preventDefault();
			
			checkInputs();
		});
		
		function checkInputs() {
			// trim to remove the whitespaces
			
			const emailValue = email2.value.trim();
			const passwordValue = password2.value.trim();
			const password = password3.value.trim();
			
			if(emailValue === '') {
				setErrorFor(email2, '請輸入電子信箱');
			} else if (!isEmail(emailValue)) {
				setErrorFor(email2, '請輸入含有 @ 的電子信箱格式');
			} else {
				setSuccessFor(email2);
			}
			
			if(passwordValue === '') {
				setErrorFor(password2, '請輸入密碼');
			} else {
				setSuccessFor(password2);
			}
			
			if(passwordValue != '' && emailValue != '') {
               document.getElementById("form2").submit();
			}
		}
		
		
		function setErrorFor(input, message) {
			const formControl = input.parentElement;
			const small = formControl.querySelector('small');
			formControl.className = 'b4 error';
			small.innerText = message;
		}
		
		function setSuccessFor(input) {
			const formControl = input.parentElement;
			formControl.className = 'b4 success';
		}
			
		function isEmail(email) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
		}
		
		
		// SOCIAL PANEL JS
		/*const floating_btn = document.querySelector('.floating-btn');
		const close_btn = document.querySelector('.close-btn');
		const social_panel_container = document.querySelector('.social-panel-container');
		
		floating_btn.addEventListener('click', () => {
			social_panel_container.classList.toggle('visible')
		});
		
		close_btn.addEventListener('click', () => {
			social_panel_container.classList.remove('visible')
		});*/

        //獲取元素（兩種方式都可以）
  
