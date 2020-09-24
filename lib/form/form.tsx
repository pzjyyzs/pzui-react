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
            <table>
                {props.fields.map(f => 
                    <tr  className={classes('pzui-form-row')} key={f.name}>
                        <td className="pzui-form-td">{ f.label }</td>
                        <td className="pzui-form-td">
                            <Input 
                                className="pzui-form-input"
                                type={f.input.type } 
                                value={formData[f.name]}
                                onChange={(e) => onInputChange(f.name, e.target.value)} />
                            <div>{props.errors[f.name]}</div>
                        </td>
                    </tr>
                )}
                <div>
                    {props.buttons}
                </div>
            </table>
        </form>
    )
}

export default Form;