document.addEventListener('DOMContentLoaded', function () {
    const acccountNumber = document.getElementById("account-number");

    const loginDataJSON = localStorage.getItem('loginData');
    if (loginDataJSON) {
        const loginData = JSON.parse(loginDataJSON);
        acccountNumber.innerHTML = `Número de cuenta: ${loginData.docNumber}`;
    }

    const accountDataJSON = localStorage.getItem('accountData');
    if (accountDataJSON) {
        const accountData = JSON.parse(accountDataJSON);
        acccountNumber.innerHTML = `Número de cuenta: ${accountData.docNumber}`;
    }
});

const operationHistory = [];

function handleDeposit() {
    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    const successDeposit = document.getElementById("success-deposit");

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert (`El valor del depósito debe ser un número mayor a cero`);
        return
    }

    const loginDataJSON = localStorage.getItem('loginData');
    if (loginDataJSON) {
        const loginData = JSON.parse(loginDataJSON);

        loginData.balance += depositAmount;

        const depositOperation = {
            type: "Depósito",
            amount: depositAmount,
            timestamp: new Date().toLocaleString(),
        };
        operationHistory.push(depositOperation);

        localStorage.setItem('loginData', JSON.stringify(loginData));

        successDeposit.innerHTML = `Depósito exitoso. Saldo actual: $${loginData.balance}`;
    }

    const accountDataJSON = localStorage.getItem('accountData');
    if (accountDataJSON) {
        const accountData = JSON.parse(accountDataJSON);

        accountData.balance += depositAmount;

        const depositOperation = {
            type: "Depósito",
            amount: depositAmount,
            timestamp: new Date().toLocaleString(),
        };
        operationHistory.push(depositOperation);

        localStorage.setItem('accountData', JSON.stringify(accountData));

        successDeposit.innerHTML = `Depósito exitoso. Saldo actual: $${accountData.balance}`;
    }
}

function handleWithdraw() {
    const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);
    const successWithdrawal = document.getElementById("success-withdrawal");

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("El monto de retiro debe ser un número mayor a cero.");
        return;
    }

    const loginDataJSON = localStorage.getItem('loginData');
    if (loginDataJSON) {
        const loginData = JSON.parse(loginDataJSON);

        if (loginData.balance < withdrawalAmount) {
            alert("Saldo insuficiente para realizar el retiro.");
            return;
        }

        loginData.balance -= withdrawalAmount;

        const withdrawalOperation = {
            type: "Retiro",
            amount: withdrawalAmount,
            timestamp: new Date().toLocaleString(),
        };
        operationHistory.push(withdrawalOperation);

        localStorage.setItem('loginData', JSON.stringify(loginData));

        successWithdrawal.innerHTML = `Retiro exitoso. Saldo actual: $${loginData.balance}`;
    }

    const accountDataJSON = localStorage.getItem('accountData');

    if (accountDataJSON) {
        const accountData = JSON.parse(accountDataJSON);

        if (accountData.balance < withdrawalAmount) {
            alert("Saldo insuficiente para realizar el retiro.");
            return;
        }

        accountData.balance -= withdrawalAmount;

        const withdrawalOperation = {
            type: "Retiro",
            amount: withdrawalAmount,
            timestamp: new Date().toLocaleString(),
        };
        operationHistory.push(withdrawalOperation);

        localStorage.setItem('accountData', JSON.stringify(accountData));

        successWithdrawal.innerHTML = `Retiro exitoso. Saldo actual: $${accountData.balance}`;
    }
}

function checkBalance() {
    const loginDataJSON = localStorage.getItem('loginData');
    const balance = document.getElementById("balance");

    if (loginDataJSON) {
        const loginData = JSON.parse(loginDataJSON);
        
        const inquiryBalance = `Saldo de la cuenta: $${loginData.balance}`;        

        balance.innerHTML = inquiryBalance;
    }

    const accountDataJSON = localStorage.getItem('accountData');
    if (accountDataJSON) {
        const accountData = JSON.parse(accountDataJSON);
        
        const inquiryBalance = `Saldo de la cuenta: $${accountData.balance}`;

        balance.innerHTML = inquiryBalance;
    }
}

function updateOperationHistory() {
    const history = document.getElementById("history");
    const historyList = history.querySelector("ul");

    const amountOfDeposits = document.getElementById("amount-of-deposits");
    let depositCount = 0;

    const amountOfWithdrawals = document.getElementById("amount-of-withdrawals");
    let withdrawalCount = 0;

    historyList.innerHTML = '';

    operationHistory.forEach((operation) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${operation.type}: $${operation.amount} (${operation.timestamp})`;
        historyList.appendChild(listItem);
        
        if (operation.type === 'Depósito') {
            depositCount++;
        } else if (operation.type === 'Retiro') {
            withdrawalCount++;
        }

    });

    amountOfDeposits.innerHTML  = `Cantidad de depósitos: ${depositCount}`;
    amountOfWithdrawals.innerHTML  = `Cantidad de retiros: ${withdrawalCount}`;
}

function handleLogout() {
    localStorage.removeItem('accountData');
    localStorage.removeItem('loginData');

    window.location.href = "index.html";
}