import PageHeader from '@/components/PageHeader'
import PhotoGallery from '@/components/gallery/PhotoGallery';
import { Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
export const metadata = {
    title: 'Photo Gallery || Ghughubesia Junior High School ',
}
export default function Gallery() {

    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Gallery'} />
                <Stack as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4}>                
                    <PhotoGallery/>
                </Stack>
            </Stack>
        </Stack>
    )
}