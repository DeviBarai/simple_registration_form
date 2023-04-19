const form = document.forms.registration;

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const username = form.username.value;
	const email = form.email.value;
	const password = form.password.value;
	const confirm_password = form.confirm_password.value;

	if (password !== confirm_password) {
		alert('Passwords do not match!');
		return;
	}

	// code to submit form data to server here...
});
