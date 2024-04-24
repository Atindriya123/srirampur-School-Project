import PageHeader from '@/components/PageHeader'
import NoticeBoard from '@/components/home/NoticeBoard'
import { Container, Stack } from '@chakra-ui/react'
import React from 'react'
export const metadata = {
    title: 'Notice || Ghughubesia Junior High School ',
}
export default function page() {
    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Notice'} />
            </Stack>
            <Stack as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4}>
                <NoticeBoard/>
            </Stack>
        </Stack>
    )
}
