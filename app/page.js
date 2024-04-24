import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container, Flex, Grid, GridItem, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Carousel from '@/components/home/Slider'
import HeadMasterDesk from '@/components/home/HeadMasterDesk'
import NoticeBoard from '@/components/home/NoticeBoard'
import Vivekananda from '@/components/home/Vivekananda'
import Welcome from '@/components/home/Welcome'
import Services from '@/components/home/Services'
export const metadata = {
  title: 'Home || Srirampur New Set Up Upper Primary School ',
}
export default function Home() {
  return (
    <Stack>
      <Carousel />
      <Stack mt={'100px'} mb={'100px'} flexDir={['column', 'column', 'row', 'row']} as={Container} maxW={'container.xl'}>
        <Welcome width={['100%','100%','60%','60%']} />
        <Services width={['100%','100%','40%','40%']} />
      </Stack>
      <Vivekananda/>
      <Stack  mb={'100px'} flexDir={['column', 'column', 'row', 'row']} as={Container} maxW={'container.xl'}>
        <HeadMasterDesk width={['100%','100%','70%','70%']} />
        <NoticeBoard width={['100%','100%','30%','30%']} />
      </Stack>
    </Stack>
  )
}
