import PageHeader from '@/components/PageHeader'
import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import MarksheetForm from './MarksheetForm'
import Countdown from './Countdown'
export const metadata = {
    title: 'Marksheet Download || Ghughubesia Junior High School ',
}

export default function Marksheet() {

    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Marksheet'} />
                <Stack as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4} align={'center'}>
                    
                    <Countdown/>
                    {/* <MarksheetForm /> */}
                </Stack>
            </Stack>
        </Stack>
    )
}