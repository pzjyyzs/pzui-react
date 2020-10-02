import { FormValue } from "./form";
interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: (value: string) => Promise<string>;
}


type FormRules = Array<FormRule>

function isEmpty(value: any) {
    return value === undefined || value === null || value === '';
}

export function noError(errors: any) {
    return Object.keys(errors).length === 0;
}

type OneError =  string | Promise<string>;

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
        if (rule.validator) {
            const promise = rule.validator(value);
            addErrors(rule.key, promise)
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

    const keyAndPromise = Object.keys(errors).map(key => 
        errors[key].map((promise: any) => [key, promise])
    )
    const flattenErrors = flat(keyAndPromise);
    const promiseArray = flattenErrors.map(([key, promiseOrString]) => 
    (promiseOrString instanceof Promise ? promiseOrString: Promise.reject(promiseOrString))
    .then(() =>  [key, undefined], (reason) => [key, reason]))
    Promise.all(promiseArray).then((results: Array<[string, string]>) => {
        callback(zip(results.filter(item => item[1])))
    })
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

function zip(kvList: Array<[string, string]>) {
    const result:{[K: string]: Array<string>} = {};
    kvList.map(([key, value]) => {
        result[key] =  result[key] || [];
        result[key].push(value);
    });
    return result;
}