document.addEventListener('DOMContentLoaded', function () {
    const accountOperations = document.getElementById('account-operations');

    const accountDepositBtn = document.getElementById('account-deposit-btn');
    const backBtn1 = document.getElementById('back-btn-1');
    const accountDeposit = document.getElementById('account-deposit');

    const depositAmount = document.getElementById("deposit-amount");
    const successDeposit = document.getElementById("success-deposit");

    const accountWithdrawBtn = document.getElementById('account-withdraw-btn');
    const backBtn2 = document.getElementById('back-btn-2');
    const accountWithdraw = document.getElementById('account-withdraw');

    const withdrawalAmount =document.getElementById("withdrawal-amount");
    const successWithdrawal = document.getElementById("success-withdrawal");
    
    const accountCheckBalanceBtn = document.getElementById('account-check-balance-btn');
    const backBtn3 = document.getElementById('back-btn-3');
    const accountBalanceInquiry = document.getElementById('account-balance-inquiry');

    const accountHistoryBtn = document.getElementById('account-history-btn');
    const backBtn4 = document.getElementById('back-btn-4');
    const accountHistory = document.getElementById('account-history');


    accountDepositBtn.addEventListener('click', function () {
        accountOperations.style.display = 'none';
        accountDeposit.classList.remove('hidden');
    });

    backBtn1.addEventListener('click', function () {
        accountOperations.style.display = 'flex';
        accountDeposit.classList.add('hidden');
        depositAmount.value = '';
        successDeposit.textContent = '';
    });


    accountWithdrawBtn.addEventListener('click', function () {
        accountOperations.style.display = 'none';
        accountWithdraw.classList.remove('hidden');
    });

    backBtn2.addEventListener('click', function () {
        accountOperations.style.display = 'flex';
        accountWithdraw.classList.add('hidden');
        withdrawalAmount.value = '';
        successWithdrawal.textContent = '';
    });


    accountCheckBalanceBtn.addEventListener('click', function () {
        accountOperations.style.display = 'none';
        accountBalanceInquiry.classList.remove('hidden');
    });

    backBtn3.addEventListener('click', function () {
        accountOperations.style.display = 'flex';
        accountBalanceInquiry.classList.add('hidden');
    });

    accountHistoryBtn.addEventListener('click', function () {
        accountOperations.style.display = 'none';
        accountHistory.classList.remove('hidden');
    });

    backBtn4.addEventListener('click', function () {
        accountOperations.style.display = 'flex';
        accountHistory.classList.add('hidden');
    });
});