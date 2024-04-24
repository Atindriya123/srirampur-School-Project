"use client"
import { PhoneIcon } from '@chakra-ui/icons'
import { Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdGlobe } from 'react-icons/io'
import { MdMail, MdPlace, MdTimer } from 'react-icons/md'

export default function Address({ width }) {
    return (
        <Stack width={width} gap={4} shadow={'lg'} p={4} rounded={'xl'}>
            <Flex gap={4} align={'center'}>
                <Icon as={MdPlace} w={'20px'} h={'20px'} color={'#f5b417'} />
                <Text color={'gray'} textTransform={'uppercase'}>SRIRAMPUR,P.O-MAHISREKHA,P.S-SHYAMPUR,DIST-HOWRAH,PIN-711312</Text>
            </Flex>
            <Flex gap={4} align={'center'}>
                <Icon as={PhoneIcon} w={'20px'} h={'20px'} color={'#f5b417'} />
                <Text color={'gray'} textTransform={'uppercase'}>9734101465 / 7872320028</Text>
            </Flex>
            <Flex gap={4} align={'center'}>
                <Icon as={MdMail} w={'20px'} h={'20px'} color={'#f5b417'} />
                <Text as={'a'} href='mailto:ghughubesiansup@gmail.com' color={'gray'} textTransform={''}>srirampurnewsetupupperprimary@gmail.com</Text>
            </Flex>
            <Flex gap={4} align={'center'}>
                <Icon as={MdTimer} w={'20px'} h={'20px'} color={'#f5b417'} />
                <Text color={'gray'} textTransform={'uppercase'}>Mon - Sat 10.30 AM - 4.00 PM</Text>
            </Flex>
            <Flex gap={4} align={'center'}>
                <Icon as={IoMdGlobe} w={'20px'} h={'20px'} color={'#f5b417'} />
                <Text color={'gray'} textTransform={'lowercase'}>www.srirampurnewsetupupperprimaryschool.com</Text>
            </Flex>
        </Stack>
    )
}
