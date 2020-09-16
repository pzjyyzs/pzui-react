import * as React from 'react';

export interface RowProps {
    
}
const Row: React.FunctionComponent <RowProps> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Row;