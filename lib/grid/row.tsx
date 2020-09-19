import * as React from 'react';

export interface RowProps {
    className?: string;
    
}
const Row: React.FunctionComponent <RowProps> = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Row;