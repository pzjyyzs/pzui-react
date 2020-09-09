import React from 'react';

interface Props {
    visible: boolean;
}

 const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
        <div>diolog</div> :
        null
    )
}

export default Dialog;