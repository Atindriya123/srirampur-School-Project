import LoginFrm from '@/components/LoginFrm'
import PageHeader from '@/components/PageHeader'
import { Container, Stack, useToast } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import React from 'react'
export const metadata = {
    title: 'Login || Ghughubesia Junior High School ',
}
export default function Login() {
    
    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Admin Login'} />
                <Stack
                as={Container}
                maxW={'container.xl'}
                pt={'100px'}
                pb={'100px'}
                gap={4}
                alignItems={'center'}
                >
                   <LoginFrm/>
                </Stack>
            </Stack>
        </Stack>
    )
}
