import { Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function CopyRight() {
  return (
    <Stack bg={'#07294e'}> 
        <Stack as={Container} maxW={'container.xl'} color={'white'} p={6}>
            <Text textAlign={'center'}>Copyright © 2024 SRIRAMPUR NEW SET UP UPPER PRIMARY SCHOOL .</Text>
        </Stack>
    </Stack>
  )
}
