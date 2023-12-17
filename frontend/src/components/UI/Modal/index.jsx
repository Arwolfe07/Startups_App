import React from 'react';
import reactDom from 'react-dom';
import './index.css';

const BackDrop = ({ onClick }) => {
    return <div className='backdrop' onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
    return <div className='modal-overlay rounded-lg w-full sm:w-2/3'>{children}</div>;
};

const overlayLocation = document.getElementById('overlays');

const Modal = ({ onClick,children }) => {
    return (<>
        {reactDom.createPortal(<BackDrop onClick={onClick}/>,overlayLocation)}
        {reactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlayLocation)}
    </>
    )
}

export default Modal;