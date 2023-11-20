document.addEventListener('DOMContentLoaded', function () {
    const accountOptions = document.getElementById('account-options');

    const accountAccessBtn = document.getElementById('account-access-btn');
    const backBtn1 = document.getElementById('back-btn-1');
    const accountAccess = document.getElementById('account-access');

    const docNumber1 = document.getElementById("doc-number-1");
    const password1 = document.getElementById("password1");

    const accountCreationBtn = document.getElementById('account-creation-btn');
    const backBtn2 = document.getElementById('back-btn-2');
    const accountCreation = document.getElementById('account-creation');

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const docNumber2 = document.getElementById("doc-number-2");
    const email = document.getElementById("email");
    const password2 = document.getElementById("password2");

    const accountDeactivationBtn = document.getElementById('account-deactivation-btn');
    const backBtn3 = document.getElementById('back-btn-3');
    const accountDeactivation = document.getElementById('account-deactivation');

    const docNumber3 = document.getElementById("doc-number-3");
    const password3 = document.getElementById("password3");
    
    const accountReactivationBtn = document.getElementById('account-reactivation-btn');
    const backBtn4 = document.getElementById('back-btn-4');
    const accountReactivation = document.getElementById('account-reactivation');

    const docNumber4 = document.getElementById("doc-number-4");
    const password4 = document.getElementById("password4");

    accountAccessBtn.addEventListener('click', function () {
        accountOptions.style.display = 'none';
        accountAccess.classList.remove('hidden');
    });

    backBtn1.addEventListener('click', function () {
        accountOptions.style.display = 'flex';
        accountAccess.classList.add('hidden');
        docNumber1.value = '';
        password1.value = '';
    });

    accountCreationBtn.addEventListener('click', function () {
        accountOptions.style.display = 'none';
        accountCreation.classList.remove('hidden');
    });

    backBtn2.addEventListener('click', function () {
        accountOptions.style.display = 'flex';
        accountCreation.classList.add('hidden');
        firstName.value = '';
        lastName.value = '';
        docNumber2.value = '';
        email.value = '';
        password2.value = '';
    });

    accountDeactivationBtn.addEventListener('click', function () {
        accountOptions.style.display = 'none';
        accountDeactivation.classList.remove('hidden');
    });

    backBtn3.addEventListener('click', function () {
        accountOptions.style.display = 'flex';
        accountDeactivation.classList.add('hidden');
        docNumber3.value = '';
        password3.value = '';
    });

    accountReactivationBtn.addEventListener('click', function () {
        accountOptions.style.display = 'none';
        accountReactivation.classList.remove('hidden');
    });

    backBtn4.addEventListener('click', function () {
        accountOptions.style.display = 'flex';
        accountReactivation.classList.add('hidden');
        docNumber4.value = '';
        password4.value = '';
    });
});