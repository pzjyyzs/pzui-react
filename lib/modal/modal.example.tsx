import * as React from 'react';
import Modal from './modal';
import { ModalHeader, ModalBody, ModalFooter } from './style-components';

export default function () {
    const [isopen, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    }

    return (
        <>
            <button onClick={handleClick}>click</button>
            <Modal 
                isOpen={isopen}
                onClose={() => setOpen(false) }
            >
                <ModalHeader>Hello world</ModalHeader>
                <ModalBody>
                    Proin ut dui sed metus pharetra hend rerit vel non mi.
                    Nulla ornare faucibus ex, non facilisis nisl. Maecenas
                    aliquet mauris ut tempus.
                </ModalBody>
                <ModalFooter>
                    footer
                </ModalFooter>
            </Modal>
        </>
    )
}