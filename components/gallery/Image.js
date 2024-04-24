// components/Image.js
import { Box, Image as ChakraImage } from '@chakra-ui/react';
import Lightbox from './Lightbox';
import { useState } from 'react';

const GalleryImage = ({ src }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = () => {
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <Box p={2} cursor={'pointer'} onClick={openLightbox}>
      <ChakraImage src={src} alt="gallery-image" boxSize="400px" objectFit="cover" />
      {lightboxIsOpen && <Lightbox src={src} onClose={closeLightbox} />}
    </Box>
  );
};

export default GalleryImage;
