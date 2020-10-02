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
    let errors: {[key:string]: OneError[]} = { }
    const addErrors = (key: string, error: OneError) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(error);
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
        errors[key].map<[string, OneError]>(error => [key, error])
    )
    const flattenErrors = flat(keyAndPromise);
    const promiseArray = flattenErrors.map(([key, promiseOrString]) => 
    (promiseOrString instanceof Promise ? promiseOrString: Promise.reject(promiseOrString))
    .then<[string, undefined], [string, string]>(() =>  [key, undefined], (reason) => [key, reason]))
    Promise.all(promiseArray).then(results => {
        callback(zip(results.filter(hasError)))
    })
}

export default Validator;

function hasError(item: [string, undefined] | [string, string]): item is [string, string] {
    return typeof item[1] === 'string';
}
function flat<T>(array: Array<T | T[]>) {
    const result: T[] = [];
    for(let i = 0;i< array.length;i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i] as T[])
        } else {
            result.push(array[i] as T)
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
    const result:{[K: string]: string[]} = {};
    kvList.map(([key, value]) => {
        result[key] =  result[key] || [];
        result[key].push(value);
    });
    return result;
}