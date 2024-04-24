// "use client"
import Address from '@/components/Address'
import PageHeader from '@/components/PageHeader'
// import { PhoneIcon } from '@chakra-ui/icons'
import { Container, Stack, } from '@chakra-ui/react'
import React from 'react'
export const metadata = {
    title: 'Contact Us || Ghughubesia Junior High School ',
}
export default function ContactUs() {
    return (
        <Stack>
            <Stack>
                <PageHeader pagetitle={'Contact Us'} />
            </Stack>
            <Stack flexDir={['column','column','column','row','row']} rowGap={10} as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4}>
                <Stack width={['100%', '100%', '100%', '50%', '50%']} rounded={'xl'} shadow={'lg'} overflow={'hidden'}>
                    {/* <AspectRatio> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7382.898969225746!2d88.0239200451649!3d22.29883434528291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a028dead83b436b%3A0x47a07c0aed5924a8!2sShyampur%2C%20West%20Bengal%20711314!5e0!3m2!1sen!2sin!4v1702092792204!5m2!1sen!2sin" width={'100%'}  height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    {/* </AspectRatio> */}
                </Stack>
                <Address width={['100%', '100%', '100%', '50%', '50%']}/>
            </Stack>
        </Stack>
    )
}
