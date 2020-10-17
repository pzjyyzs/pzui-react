import * as React from 'react';

interface demoProps {
    code: string;
}
const Demo:React.FunctionComponent<demoProps> = (props) => {
    return (
        <div>
            {props.children}
            <pre>
                {props.code }
            </pre>
        </div>
    )
}

export default Demo