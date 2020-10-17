import React, { Fragment, useState } from 'react';
import Form, { FormValue } from './form';
import Validator, { noError } from './validator';

const userName = ['jack']
const checkUserName = (username: string, succeed: () => void, fail: ()=>void ) => {
    setTimeout(() => {
        if (userName.indexOf(username) >= 0) {
            succeed()
        } else {
            fail()
        }
    }, 3000)
}
const FormExample:React.FunctionComponent = () => {
    const [ formData, setFormData ] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [ fields] = useState(
        [
            { name: 'username', label: '用户名', input: { type: 'text' } },
            { name: 'password', label: '密码', input: { type: 'password' } }
        ]
    )
    const [errors, setErrors] = useState({});
    const validator = ( username: string) => {
        return new Promise<string>((resolve, reject) =>{
            checkUserName(username, resolve, () =>{reject('unique')})
        })
    } 
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 8, maxLength: 16},
            {key: 'username', validator},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true},
            
        ]
        Validator(formData, rules, (errors) => {
            setErrors(errors);
            if (noError(errors)) {
                
            }
        });
    }
    return (
        <Form value={formData} fields={fields} 
                buttons={
                    <Fragment>
                        <button type="submit">提交</button>
                        <button>返回</button>
                    </Fragment>
                }
                errors={errors}
                onChange={(newValue) => setFormData(newValue)}
                onSubmit={onSubmit}
        />
    )
}

export default FormExample