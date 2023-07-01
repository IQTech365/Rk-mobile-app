const ERROR_MESSAGE = {
    required: 'Field is required.',
    email: 'Please enter valid email address',
    phone: 'Please enter valid phone number',
    password: 'Please enter valid password',
}
export class Validator {

    static isEmpty = (text: string|null|undefined): boolean => {
        return text === undefined || text == null || text.length === 0;
    }

    static emailRegex = (text:string): boolean => {
        const regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        return regex.test(text);
    }

    static passwordRegex = (text: string): boolean => {
        const regex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/);
        return regex.test(text);
    }

    static validateEmpty = (text:string): string | null => {
        if(this.isEmpty(text)) return ERROR_MESSAGE.required;
        return null;
    }

    static validateEmail = (text: string): string | null => {
        if(this.isEmpty(text)) {
            return ERROR_MESSAGE.required
        } else if(!this.emailRegex(text)) {
            return ERROR_MESSAGE.email;
        }
        return null;
    }

    static validateMobile = (text: string): string | null => {
        if(this.isEmpty(text)) {
            return ERROR_MESSAGE.required
        } else if(!this.emailRegex(text)) {
            return ERROR_MESSAGE.email;
        }
        return null;
    }

    static validatePassword = (text: string): string | null => {
        if(this.isEmpty(text)) {
            return ERROR_MESSAGE.required
        } else if(!this.passwordRegex(text)) {
            return ERROR_MESSAGE.password;
        }
        return null;
    }
}