import React from 'react';

const x = require('!!raw-loader!./icon.example.tsx');
const IconExample:React.FunctionComponent = () => {
    return (
    <div>
        <pre>
            {x.default}
        </pre>
    </div>
    )
}

export default IconExample