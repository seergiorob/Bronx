import React from 'react'
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
  console.log(cart, 'cartCito')



  return (
    <>
      <Button
      // backgroundColor='black'
      // color='white'
      fontSize='xl'
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
          <DrawerHeader>Su pedido</DrawerHeader>

          <DrawerBody>
            {cart.map(item => (
            <Box key={item.burger.id}
            >
              
              <Image src={item.burger.image} />
              <Text>{item.burger.name}</Text>
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

              <Divider mt='4' mb='4' color='red' />
              </Box>

          ))}
            <Box 
            mt='4'
            backgroundColor='green'
            color='white'
            fontSize='xl'
            >
              <Text
              fontWeight='bold'
              textAlign='center'
              >Total: $ {total}</Text>
            </Box>
              
            <Button
            mt='8'
            colorScheme='red'
            variant='outline'
            onClick={() => dispatch(cartActions.clearCart())}
            >
              Borrar todo
            </Button>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='green'>Enviar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Modal