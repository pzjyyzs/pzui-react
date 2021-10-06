import React from "react"
import Input from "./input";
const InputExample: React.FunctionComponent = () =>
{
    const [value, setValue] = React.useState('');
    return (
        <Input
            value={value}
            type='text'
            disabled={false}
            onChange={e => setValue(e.target.value)}
        ></Input>
    )
}

export default InputExample;