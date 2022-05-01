import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Image, Stack, Box, Button } from '@chakra-ui/react'
import burgerData from '../burgerData'
import cartActions from '../../redux/actions/cartActions'

function Card() {

  // console.log(burgerData)

  const cart = useSelector(state => state.cartReducer.cart)
  const total = useSelector(state => state.cartReducer.total)
  const dispatch = useDispatch()

  console.log(cart, 'some burgas')
  console.log(total, 'total')
  
  return (
    <Box
    display='flex'
    flexDirection='row'
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    w='80%'
    m='auto'
    >
      {burgerData.map(burger => (
        
      <Box 
      // borderWidth='1px' 
      borderRadius='lg'
      boxShadow='lg' 
      // bg='tomato' 
      boxSize='sm' 
      margin='10' 
      border='sm'
      display='flex' 
      flexDirection='column'
      alignItems='center' 
      // justifyContent='center'
      w='300px'
      h='440px'
      key={burger.id}
      >
        <Image 
        w='100%'
        h='250px'
        objectFit='cover' 
        src={burger.image}
        // borderWidth='1px' 
        />
        <Box 
        padding='2'
        display='flex' 
        flexDirection='column'
        alignItems='center'
        w='90%' 
        >
        <Text m='2' >{burger.name}</Text>
        <Text
        // ml='2' 
        alignSelf='flex-start' 
        fontSize='xs' 
        textAlign='left'
        >
        {burger.ingredients} {burger.price} </Text>
        <Box 
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
        alignItems='center'
        mt='4'
        w='100%'
        >
            
            <Button
            onClick={() => dispatch(cartActions.addToCart(burger))} 
            fontSize='xs'
            >
              COMPRAR
            </Button>

        </Box>
      </Box>
      </Box>

      
      ))}
    </Box>
  )
}

export default Card