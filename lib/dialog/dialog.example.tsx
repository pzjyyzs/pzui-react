import React, { useState } from 'react';
import Dialog from './dialog';

export default function() {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={()=>setX(!x)}>click</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={() => setX(false)}>1</button>,
                    <button onClick={() => setX(false)} >2</button>
                ]
            }>
                <div>childrens</div>
            </Dialog>
        </div>
    )
}

// export default DialogExample