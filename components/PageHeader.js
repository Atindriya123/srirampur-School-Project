
import {
    Heading,
    Stack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function PageHeader({pagetitle}) {
    return (
        <Stack
            h={'200px'}
            bg={'linear-gradient(rgb(7 41 78), rgb(193 78 11 / 81%)),url(	http://res.cloudinary.com/dlkr9wi2s/image/upload/v1713943384/uw5jcfynvoox4tonc3rl.jpg)'}
            bgSize={'cover'}
            bgPos={'center'}
            justify={'center'}
            alignItems={'center'}
            bgAttachment={'fixed'}
        >
            <Heading fontWeight={'bold'} color={'white'} textTransform={'uppercase'}>{pagetitle}</Heading>
            <Breadcrumb color={'orange'}>
                <BreadcrumbItem>
                    <Link href='/'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link href='#'>{pagetitle}</Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Stack>
    )
}
