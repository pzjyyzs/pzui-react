import React, { useState } from 'react';
import Dialog, {alert } from './dialog';

export default function() {
    const [x, setX] = useState(false);
    return (
        <div>
            <div>
                <button onClick={()=>setX(!x)}>click</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => setX(false)}>1</button>,
                        <button onClick={() => setX(false)}>2</button>
                    ]
                } onClose={() => {
                    setX(false)
                }}>
                    <div>childrens</div>
                </Dialog>
            </div>

            <div>
                <button onClick={() => alert('1')}>alert</button>
                <button onClick={() => alert('1')}>alert</button>
            </div>
        </div>
    )
}

// export default DialogExample