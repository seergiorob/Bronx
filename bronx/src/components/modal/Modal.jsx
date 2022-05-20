import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Box,
  Image,
  Input,
  Divider,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart } from "react-icons/md";

import { useDisclosure } from '@chakra-ui/react'
import cartActions from '../../redux/actions/cartActions'

function Modal() {

  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const cart = useSelector(state => state.cartReducer.cart)
  const total = useSelector(state => state.cartReducer.total)
  const dispatch = useDispatch()


  const cartString = cart.map(item => {
    return `${item.qty} x ${item.burger.name} `
  })
  console.log(cartString)

  const cartWsapMsg = cartString.toString()
  console.log(cartWsapMsg)

    const testWsapMessage = `https://wa.me/5493513271831/?text=Hola%20Bronx!%20quería%20pedirte%20${cartWsapMsg}%20que%20suma%20un%20total%20de%20${total}.%20Espero%20tu%20confirmación%20del%20pedido.%20Gracias!`

  // const WhatsAppMessage = `https://wa.me/5493584370106/?text=Hola%20Bronx!%20quería%20pedirte%20${cart[0]?.qty}%20${cart[0]?.burger.name}%20que%20suma%20un%20total%20de%20${total}.%20Espero%20tu%20confirmación%20del%20pedido.%20Gracias!`

  

  const sendWhatsAppMessage = () => {
    window.open(testWsapMessage, '_blank')
  }

  return (
    <>
      <Button
      
      // backgroundColor='black'
      // color='white'
      p='1'
      fontSize={{base:'md', md:'xl'}}
      ref={btnRef} onClick={onOpen}>
        <Icon as={MdShoppingCart} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
          >
            <Text>Su pedido</Text>
          </DrawerHeader>

          <DrawerBody>
            {cart.map(item => (
            <Box key={item.burger.id}
            >
              
              <Image src={item.burger.image} />
              <Text fontWeight='bold'>{item.burger.name}</Text>
              <Box 
              display='flex'
              alignItems='center'
              >
              <Text>Cantidad:</Text> 
              <Button
              onClick={()=> dispatch(cartActions.updateCart(item.burger.id, false))}
              >-</Button>
              <Text>{item.qty}</Text>
              <Button
              onClick={()=> dispatch(cartActions.updateCart(item.burger.id, true))}
              >+</Button>
              </Box>
              <Text>Precio: $ {item.burger.price}</Text>
              <Box
              w='100%'
              display='flex'
              justifyContent='flex-end'
              >
              <Button
              onClick={() => dispatch(cartActions.removeFromCart(item))}
              >Eliminar Producto</Button>
              </Box>

              <Divider mt='4' mb='4' color='black' />
              </Box>

          ))}
            
              
            {/* <Button
            mt='8'
            colorScheme='red'
            variant='outline'
            
            >
              Borrar todo
            </Button> */}
          </DrawerBody>
          <DrawerFooter
          display='flex'
          flexDirection='column'
          >
          <Box 
            mt='4'
            mb='4'
            backgroundColor='green'
            color='white'
            fontSize='xl'
            w='100%'
            >
              <Text
              fontWeight='bold'
              textAlign='center'
              >Total: $ {total}</Text>
            </Box>
            <Box>
            <Button variant='outline' mr={3}
           colorScheme='red'
            // onClick={onClose}
            onClick={() => dispatch(cartActions.clearCart())}
            >
              Cancelar Pedido
            </Button>
            <Button colorScheme='green'
            onClick={() => sendWhatsAppMessage()}
            >Enviar</Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Modal