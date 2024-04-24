// components/Lightbox.js
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react';
import { useState } from 'react';

const Lightbox = ({ src, onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose} size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image src={src} alt="lightbox-image" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Lightbox;
