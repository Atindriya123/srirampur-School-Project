// components/Gallery.js
"use client"

import { useDataFetching } from '@/hooks/useDataFetching';
// import { SimpleGrid } from '@chakra-ui/react';
// // components/Gallery.js
// import GalleryImage from './Image';
// import { useDataFetching } from '@/hooks/useDataFetching';

// const PhotoGallery = ({ images }) => {
//   const { data, loading, mutate } = useDataFetching('/api/gallery/all-gallery');
//   if (data) {

//   }
//   return (
//     <SimpleGrid columns={[1,1,2,2,3,3]} spacing={0} justifyItems={'center'}>
//       {images.map((image, index) => (
//         <GalleryImage key={index} src={image.file} />
//       ))}
//     </SimpleGrid>
//   );
// };

// export default PhotoGallery;
import React from 'react'
import GalleryImage from './Image';
import { Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export default function PhotoGallery() {
  const { data, loading, mutate } = useDataFetching('/api/gallery/all-gallery');
  const Gallery = () => {
    if (data) {
      return (
        data.map((image, index) => (
          <GalleryImage key={index} src={image.file} />
        ))
      )
    } else {
      return (
        <Stack align={'center'} mt={10} justify={'center'}>
          <Image w={'150px'} src='/img/wait.gif' />
        </Stack>
      )
    }
  }
  return (
    <SimpleGrid columns={data ?[1, 1, 2, 2, 3, 3]:1} spacing={0} justifyItems={'center'}>
      <Gallery />
    </SimpleGrid>
  )
}

