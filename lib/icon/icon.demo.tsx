import React from 'react';
import Demo from '../../demo';
import IconExample from './icon.example';


const x = require('!!raw-loader!./icon.example.tsx');
const IconDemo = () => {
    return (
        <Demo code={x.default}>
            <IconExample></IconExample>
        </Demo>
    )
}

export default IconDemo