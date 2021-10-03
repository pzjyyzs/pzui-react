import * as React from 'react';
import { useState } from 'react';
import Checkbox from './checkbox';

const CheckBoxExample:React.FunctionComponent = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    return (
        <div>
           <Checkbox isChecked={checked} onChange={handleChange}>
            Sign up for the newsletter
           </Checkbox>
        </div>
    )
}

export default CheckBoxExample;