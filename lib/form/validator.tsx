import { FormValue } from "./form";
interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: {
        name: string;
        validator:(value: string) => Promise<void>
    }
}


type FormRules = Array<FormRule>

function isEmpty(value: any) {
    return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
    return Object.keys(errors).length === 0;
}

interface OneError {
    message: string;
    promise?: Promise<any>;
}
const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) =>void, ): void => {
    let errors: any = { }
    const addErrors = (key: string, error: OneError) => {
        if (errors === undefined) {
            errors[key] = [];
        }
        errors.push(error);
    }
    rules.map(rule => {
        const value = formValue[rule.key];
        if (rule.validate) {
            const promise = rule.validate.validator(value);
            addErrors(rule.key, { message: '', promise})
        }
        if (rule.required) {
            if (value === undefined && value === null || value === '') {
                addErrors(rule.key, { message: '必填'})
            }
        }
        if (rule.minLength) {
            if (!isEmpty(value) && value.length < rule.minLength) {
                addErrors(rule.key, { message: '短'})
            }
        }
        if (rule.pattern) {
            if (!(rule.pattern.test(value))) {
                addErrors(rule.key, { message: '格式不正确'});
            }
        }
    })
    const promiseList = flat(Object.values(errors))
    .filter(item => item.promise)
    .map(item => item.promise)
    Promise.all(promiseList)
    .then(() => {
        const newErrors =fromEntries(
            Object.keys(errors)
            .map<[string, string[]]>(key => {
               return [key, errors[key].map((item: OneError) =>  item.message)]
            }));
        callback(newErrors)
    }, () => {
        const newErrors =fromEntries(
            Object.keys(errors)
            .map<[string, string[]]>(key => {
               return [key, errors[key].map((item: OneError) =>  item.message)]
            }));
        callback(newErrors)
    });
}

export default Validator;

function flat(array: Array<any>) {
    const result = [];
    for(let i = 0;i< array.length;i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i])
        } else {
            result.push(array[i])
        }
    }
    return result;
}

function fromEntries(array: Array<[string, string[]]>) {
    const result: {[key: string]: string[]} =  {};
    for(let i = 0;i<array.length;i++) {
        result[array[i][0]] = array[i][1]
    }
    return result;
}