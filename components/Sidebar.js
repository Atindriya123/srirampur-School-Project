"use client"
import { Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useParams, usePathname, useRouter } from 'next/navigation'

export default function Sidebar({ children }) {
    const { data: session, status } = useSession({
        required: true
    });
    if (status === "loading") {
        return (
            <Stack align={'center'} mt={10} justify={'center'}>
                <Image w={'150px'} src='/img/wait.gif' />
            </Stack>
        )
    }
    // const path = usePathname();
    const sideMenu = [
        {
            name: "Dashboard",
            link: '/admin-area/dashboard'
        },
        {
            name: "Notice",
            link: '/admin-area/dashboard/notice'
        },
        {
            name: "Gallery",
            link: '/admin-area/dashboard/gallery'
        },
        {
            name: "Slider",
            link: '/admin-area/dashboard/slider'
        },
        {
            name: "Marksheet",
            link: '/admin-area/dashboard/marksheet'
        },
        {
            name: "Admit",
            link: '/admin-area/dashboard/admit'
        },
    ]
    return (
        <>
            <Stack minH={'500px'} minW={'300px'} borderWidth={2} rounded={'lg'} shadow={'lg'} p={2}>
                {sideMenu.map((item, Index) => {
                    return (
                        <Link href={item.link} key={Index}>
                            <Stack
                                p={4}
                                bg={'#a2010d'}
                                color={'white'}
                                rounded={'lg'}
                                textAlign={'center'}
                                _hover={{
                                    bg: '#50050b'
                                }}
                            >
                                <Text>{item.name}</Text>
                            </Stack>
                        </Link>
                    )
                })}
                <Link href={'#'} onClick={signOut}>
                    <Stack
                        p={4}
                        bg={'#a2010d'}
                        color={'white'}
                        rounded={'lg'}
                        textAlign={'center'}
                        _hover={{
                            bg: '#50050b'
                        }}
                    >
                        <Text>Log Out</Text>
                    </Stack>
                </Link>
            </Stack>

            {children}
        </>
    )
}
