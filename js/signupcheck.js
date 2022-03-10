        const form2 = document.getElementById('form2');
		const email2 = document.getElementById('email2');
		const password3 = document.getElementById('password2');
		const password2 = document.getElementById('password3');
		
		form2.addEventListener('submit2', e => {
			e.preventDefault();
			
			checkInputs2();
		});
		
		function checkInputs2() {
			// trim to remove the whitespaces
			const emailValue = email2.value.trim();
			const passwordValue = password3.value.trim();
			const password2Value = password2.value.trim();
			
			if(emailValue === '') {
				setErrorFor(email2, '請輸入電子信箱');
			} else if (!isEmail(emailValue)) {
				setErrorFor(email2, '請輸入含有 @ 的電子信箱格式');
			} else {
				setSuccessFor(email2);
			}
			
			if(passwordValue === '') {
				setErrorFor(password3, '請輸入密碼');
			} else {
				setSuccessFor(password3);
			}
			
			if(password2Value === '') {
				setErrorFor(password2, '請再次輸入密碼');
			} else if(passwordValue !== password2Value) {
				setErrorFor(password2, '與密碼不符');
			} else{
				setSuccessFor(password2);
			}

			if(document.getElementById('agree').checked) { return true; } else { alert('請表明您已閱讀並同意版權聲明及隱私政策' ); 返回假; };
		}
		
		function setErrorFor(input, message) {
			const formControl2 = input.parentElement;
			const small2 = formControl2.querySelector('.aa');
			formControl2.className = 'b5 error';
			small2.innerText = message;
		}
		
		function setSuccessFor(input) {
			const formControl2 = input.parentElement;
			formControl2.className = 'b5 success';
		}
			
		function isEmail(email2) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
		}