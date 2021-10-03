import React from "react"
import Radio from "./radio"
import RadioGroup from "./radiogroup"
const RadioExample: React.FunctionComponent = () =>
{
    const [value, setValue] = React.useState("2");
    return (
        <RadioGroup
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            align='vertical'
      >
        <Radio value="1">One</Radio>
        <Radio
          value="2"
          description="This is a radio description"
        >
          Two
        </Radio>
        <Radio value="3">Three</Radio>
      </RadioGroup>
    )
}

export default RadioExample;