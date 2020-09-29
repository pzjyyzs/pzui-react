import { FormValue } from "./form";
interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: {
        name: string;
        validator: Promise<void>
    }
}

interface FormErrors {
    [K: string]: string[];
}

type FormRules = Array<FormRule>

function isEmpty(value: any) {
    return value === undefined || value === null || value === '';
}
const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    let errors: any = { }
    const addErrors = (key: string, message: string) => {
        if (errors === undefined) {
            errors[key] = [];
        }
        errors.push(message);
    }
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.validator) {
            rule.validator.validator(value)
        }
        if (rule.required) {
            if (value === undefined && value === null || value === '') {
                addErrors(rule.key, '必填')
            }
        }
        if (rule.minLength) {
            if (!isEmpty(value) && value.length < rule.minLength) {
                addErrors(rule.key, '短')
            }
        }
        if (rule.pattern) {
            if (!(rule.pattern.test(value))) {
                addErrors(rule.key, '格式不正确');
            }
        }
    })
    return errors;
}

export default Validator;