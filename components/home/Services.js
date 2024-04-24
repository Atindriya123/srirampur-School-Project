"use client"
import { Box, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Md10K, MdArticle, MdBook, MdBookOnline, MdBuild, MdEditSquare, MdFormatAlignCenter, MdHomeWork, MdImportContacts, MdList, MdManageHistory, MdSchool } from 'react-icons/md'

export default function Services({ width }) {
    return (
        <Stack width={width} justify={'center'} p={4}>
            <SimpleGrid columns={2} columnGap={4} rowGap={4}>
                <Link href={'#'} target=''>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdEditSquare} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>Admission</Text>
                    </Stack>
                </Link>
                <Link href={'/'}>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdHomeWork} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>INFRASTRUCTURE</Text>
                    </Stack>
                </Link>
                <Link href={'/admit'}>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdBook} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>Admit</Text>
                    </Stack>
                </Link>
                <Link href={'/'}>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdImportContacts} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>LIBRARY</Text>
                    </Stack>
                </Link>
                <Link href={'/marksheet'}>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdArticle} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>marksheet</Text>
                    </Stack>
                </Link>
                <Link href={'/'}>
                    <Stack
                        align={'center'}
                        justify={'center'}
                        gap={2}
                        boxShadow={'lg'}
                        minH={'200px'}
                        borderColor={'#f0f0f0'}
                        borderWidth={2}
                        borderRadius={'2xl'}
                        _hover={{
                            // boxShadow:'xl',
                            transition: 'transform 1s',
                            transform: 'translateY(-10px);'
                        }}
                    >
                        <Icon color={'#a2010d'} as={MdList} width={'100px'} height={'100px'} />
                        <Text fontWeight={'bold'} textTransform={'uppercase'}>Result</Text>
                    </Stack>
                </Link>
            </SimpleGrid>
        </Stack>
    )
}
