import React from 'react'
import { Text, Image, Stack, Box, Button } from '@chakra-ui/react'
import Modal from '../modal/Modal'

function Hero() {
  return (
    <div>
      <Box 
      w='100%'
      h='250px'
      objectFit='cover'
      backgroundColor='black'
      >
        <Box
        position='absolute'
        right='10px'
        top='10px'
        >
        <Modal />
        </Box>
        <Image
        w='100%'
        h='200px'
        objectFit='contain'
        src='../../../assets/bronx.jpg'
        />
      </Box>
      <Text
      mt='8'
      fontSize={{base:'xl', md:'3xl'}}
      >  
        Seleccione su pedido: </Text>
    </div>
  )
}

export default Hero