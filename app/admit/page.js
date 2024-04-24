import PageHeader from '@/components/PageHeader'
import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AdmitForm from './AdmitForm'
import Countdown from './Countdown'
export const metadata = {
    title: 'Admit Download || Ghughubesia Junior High School ',
}

export default function Admit() {

    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Admit'} />
                <Stack as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4} align={'center'}>
                    
                    <Countdown/>
                    {/* <AdmitForm /> */}
                </Stack>
            </Stack>
        </Stack>
    )
}