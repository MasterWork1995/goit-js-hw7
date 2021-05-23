const inputChange = document.querySelector('#validation-input');

inputChange.addEventListener('blur', onInputLength);

function onInputLength (event) {
    if (event.currentTarget.value.length == inputChange.dataset.length) {
        inputChange.classList.add('valid');
        inputChange.classList.remove('invalid');
    } else {
        inputChange.classList.add('invalid');
        inputChange.classList.remove('valid');
    }
};

