import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalContent from './ModalContent';

const ModalWindow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };
 
      return (
        <span>
            <i class="bi bi-arrow-right-square-fill" onClick={showModal}/>
            <Modal show={isOpen} onHide={hideModal}>
                <ModalContent hideModal={hideModal}/>
            </Modal>
        </span>
  );
};

export default ModalWindow;