import React from 'react'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/Sidebar'
import { Container, Stack, Text } from '@chakra-ui/react'
import SliderForm from '@/components/dashboard/slider/SliderForm'
import SliderDataTable from '@/components/dashboard/slider/SliderDataTable'
// import MarksheetForm from '@/components/dashboard/marksheet/MarksheetForm'
// import MarksheetDataTable from '@/components/dashboard/marksheet/MarksheetDataTable'
import AdmitForm from '@/components/dashboard/admit/AdmitForm'
import AdmitDataTable from '@/components/dashboard/admit/AdmitDataTable'

export default function Marksheet() {
  return (
    <Stack>
    <Stack>
        <PageHeader pagetitle={'Dashboard'} />
    </Stack>
    <Stack flexDir={['column','column','column','row','row']} as={Container} maxW={'container.xl'} pt={'100px'} pb={'100px'} gap={4}>
        <Sidebar>
            <Stack borderWidth={2} shadow={'lg'} rounded={'lg'} width={'full'} p={4}>
                <AdmitForm/>
                <AdmitDataTable/>
            </Stack>
        </Sidebar>
    </Stack>
</Stack>
  )
}
