import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Image, Select, Box, Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import burgerData from '../burgerData'
import cartActions from '../../redux/actions/cartActions'

function Card() {

  // console.log(burgerData)

  const cart = useSelector(state => state.cartReducer.cart)
  const total = useSelector(state => state.cartReducer.total)
  const dispatch = useDispatch()

  // console.log(burgerData)

  // const burgers = []
  // const pizzas = []

  // burgerData.forEach((data) => {
    
  //     if(data.category === "burgers") {
  //       burgers.push(data)
  //     }else{
  //       pizzas.push(data)
  //     }
    
  // })

  // console.log(burgers, 'burgers')
  // console.log(pizzas, 'pizzas')

  return (
    <Box
    display='flex'
    flexDirection='row'
    flexWrap='wrap'
    justifyContent='center'
    alignItems='flex-start'
    w={{base:'100%', md:'80%'}}
    
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
      // justifyContent='flex-start'
      w='300px'
      h='auto'
      key={burger.id}
      position='relative'
      >
        {burger.stock < 5 && (
        <Text
        fontWeight='bold'
        backgroundColor='red'
        color='white'
        position='absolute'
        right='0'
        top='0'
        padding='2'
        >
          últimas unidades
        </Text>
        )}
        {burger.stock == 0 && (
        <Text
        fontWeight='bold'
        backgroundColor='red'
        color='white'
        position='absolute'
        right='0'
        top='0'
        padding='2'
        >
          sin stock
        </Text>
        )}
        <Image 
        w='100%'
        h={{base:'150px', sm:'200px'}}
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
        <Accordion
        w='100%'
        m='auto'
        defaultIndex={[1]} 
        allowMultiple
        
        >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left' fontWeight='bold' fontSize='l' >
              {burger.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text textAlign='left' fontSize='12px' p='2' > 
              {burger.ingredients}
            </Text> 
          </AccordionPanel>
        </AccordionItem>
        </Accordion>
        {/* <Text m='2'
        fontWeight='bold' >{burger.name}</Text>
        <Text
        // ml='2' 
        alignSelf='flex-start' 
        fontSize='xs' 
        textAlign='left'
        >
        {burger.ingredients} {burger.price} </Text> */}
        <Box 
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        mt='4'
        w='100%'
        >
            <Box>
              <Text fontSize='xs' color='blackAlpha.700' ml='-8' >Precio</Text>
              <Box display='flex' alignItems='baseline' mt='-2' >
                <Text>$</Text>
                <Text fontWeight='bold' fontSize='xl' >{burger.price}</Text>
                <Text fontSize='xs' color='blackAlpha.700'>c/u</Text>
              </Box>
            </Box>

            <Button
            onClick={() => dispatch(cartActions.addToCart(burger))} 
            fontSize='sm'
            colorScheme='green'
            color='white'
            >
              Lo quiero
            </Button>

        </Box>
      </Box>
      </Box>

      
      ))}
    </Box>
  )
}

export default Card