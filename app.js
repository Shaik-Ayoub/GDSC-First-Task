document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const rangeValue = document.getElementById('rangeVal');
    const lowercaseCheckbox = document.querySelector('input[name="lower"]');
    const uppercaseCheckbox = document.querySelector('input[name="upper"]');
    const numberCheckbox = document.querySelector('input[name="number"]');
    const symbolsCheckbox = document.querySelector('input[name="symbols"]');
    const uniqueCheckbox = document.querySelector('input[name="unique"]');
    const generateButton = document.getElementById('generate');
    const passwordInput = document.getElementById('password');

    function updateRangeValue() {
        rangeValue.innerText = lengthInput.value;
    }

    lengthInput.addEventListener('input', updateRangeValue);

    function generatePassword() {
        const length = lengthInput.value;
        const useLowercase = lowercaseCheckbox.checked;
        const useUppercase = uppercaseCheckbox.checked;
        const useNumbers = numberCheckbox.checked;
        const useSymbols = symbolsCheckbox.checked;
        const useUnique = uniqueCheckbox.checked;

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let allChars = '';

        if (useLowercase) allChars += lowercaseChars;
        if (useUppercase) allChars += uppercaseChars;
        if (useNumbers) allChars += numberChars;
        if (useSymbols) allChars += symbolChars;

        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            let char = allChars.charAt(randomIndex);

            if (useUnique) {
                while (password.includes(char)) {
                    char = allChars.charAt(Math.floor(Math.random() * allChars.length));
                }
            }

            password += char;
        }

        passwordInput.value = password;
    }

    generateButton.addEventListener('click', generatePassword);
});
