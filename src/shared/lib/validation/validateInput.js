export const message = {
    required: "This field is required",
    errors: {
        onlyLetters: "Please use just letters",
        tooShort: "Has to be at least {minLength} characters",
        validEmail: "Please use valid email address",
        validPhoneNumber: "Please use valid phone number",
        passwordTooShort: "Has to be at least 8 characters",
        passwordMissingUppercase: "Has to be at least one uppercase letter",
        passwordMissingLowercase: "Has to be at least one lowercase letter",
        passwordMissingSpecial: "Has to be at least one special character",
        passwordMissingNumber: "Has to be at least one digit",
    }
}

export const textRegex =  /^[а-яА-ЯёЁ\s]+|[a-zA-Z\s]+$/;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex = /^\\(([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/;

export const validatePassword = (password) => {
    if (!password) return message.required;

    const checks = [
        { regex: /.{8,}/, error: message.errors.passwordTooShort },
        { regex: /[a-z]/, error: message.errors.passwordMissingLowercase },
        { regex: /[A-Z]/, error: message.errors.passwordMissingUppercase },
        { regex: /[^a-zA-Z0-9]/, error: message.errors.passwordMissingSpecial},
        { regex: /\d/, error: message.errors.passwordMissingNumber }
    ];

    for (const { regex, error } of checks) {
        if (!regex.test(password)) return error;
    }

    return true;
};
