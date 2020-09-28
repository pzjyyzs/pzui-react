import React, { ReactFragment } from 'react';
import classes from '../helpers/classes';
import Input from '../input/input';
import './form.scss';

export interface FormValue {
    [K: string]: any
}
interface FormProps {
    value: FormValue ;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue)=>void;
    errors:  {[K: string]: string[]}
}
const Form: React.FunctionComponent<FormProps> = (props) => {
    const formData = props.value;
    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        props.onSubmit(e)
    }
    const onInputChange = (name: string, value:string) => {
        const newFormValue = { ...formData, [name]: value};
        props.onChange(newFormValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <table className="pzui-form-table">
                {props.fields.map(f => 
                    <tr  className='pzui-form-tr' key={f.name}>
                        <td className="pzui-form-td">
                            <span className="pzui-form-label">
                                { f.label }
                            </span>
                        </td>
                        <td className="pzui-form-td">
                            <Input 
                                className="pzui-form-input"
                                type={f.input.type } 
                                value={formData[f.name]}
                                onChange={(e) => onInputChange(f.name, e.target.value)} />
                            <div className="pzui-form-error">
                                {
                            props.errors[f.name] ? props.errors[f.name].join('，') :
                            <span>&nbsp;</span>
                            }</div>
                        </td>
                    </tr>
                )}
                <tr className='pzui-form-tr'>
                    <td className="pzui-form-td"></td>
                    <td className="pzui-form-td">
                    {props.buttons}
                    </td>
                </tr>
            </table>
        </form>
    )
}

export default Form;