function handleAccess() {
    const docNumber = document.getElementById("doc-number-1").value;
    const password = document.getElementById("password1").value;
    const balance = 0;

    const loginData = {
        docNumber: docNumber,
        password: password,
        balance: balance,
    };

    localStorage.setItem('loginData', JSON.stringify(loginData));
    window.location.href = "user-center.html";
}

function handleCreation() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const docNumber = document.getElementById("doc-number-2").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password2").value;
    const balance = 0;

    const accountData = {
        firstName: firstName,
        lastName: lastName,
        docNumber: docNumber,
        email: email,
        password: password,
        balance: balance,
    };

    localStorage.setItem('accountData', JSON.stringify(accountData));
    window.location.href = "user-center.html";
}