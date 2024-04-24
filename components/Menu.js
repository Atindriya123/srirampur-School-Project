import { Flex, Icon, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MdMenu } from 'react-icons/md'

export default function Menu({ display }) {
    const menuItem = [
        {
            menuName: 'Home',
            menuLink: '/'
        },
        {
            menuName: 'About Us',
            menuLink: '/'
        },
        {
            menuName: 'Administration',
            menuLink: '/'
        },
        {
            menuName: 'Academics',
            menuLink: '/'
        },
        {
            menuName: 'Gallery',
            menuLink: '/'
        },
        {
            menuName: 'Notice',
            menuLink: '/'
        },
        {
            menuName: 'Contact Us',
            menuLink: '/'
        },
    ]
    const MobileMenu = () => {
        return (
            <Stack>
                <Icon as={MdMenu} w={8} h={8} />
            </Stack>
        )
    }
    return (
        <Flex
            gap={5}
            textTransform={'uppercase'}
            // display={display}
            align={'center'}
        >
            {menuItem.map((item, index) => (
                <Stack display={display} key={index}>
                    <Link href={item.menuLink}>
                        <Stack
                            fontWeight={'bold'}
                            // m={4}
                            h={14}
                            justify={'center'}
                            _hover={{
                                color: '#f5b417',
                                borderBottomWidth: 4,
                                borderColor: '#f5b417',
                            }}
                        >
                            <Text>{item.menuName}</Text>
                        </Stack>
                    </Link>
                </Stack>
            ))}
            <MobileMenu />
        </Flex>
    )
}
