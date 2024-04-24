import React from 'react'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'
import { Container, Stack, Text } from '@chakra-ui/react'
import NoticeForm from '@/components/dashboard/notice/NoticeForm'
import NoticeDataTable from '@/components/dashboard/notice/NoticeDataTable'

export default function Notice() {
  return (
    <Stack>
    <Stack>
        <PageHeader pagetitle={'Dashboard'} />
    </Stack>
    <Stack flexDir={['column','column','column','row','row']} as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4}>
        <Sidebar>
            <Stack borderWidth={2} shadow={'lg'} rounded={'lg'} width={'full'} p={4}>
                <Text>Notice</Text>
                <NoticeForm/>
                <NoticeDataTable/>
            </Stack>
        </Sidebar>
    </Stack>
</Stack>
  )
}
