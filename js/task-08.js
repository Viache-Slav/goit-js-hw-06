const inputEl = document.querySelector("#login-form");
const handleSubmit = (event) => {
    event.preventDefault();

    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("proszę wypełnić wszystkie pola");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    };

    