import {
    Badge,
    Button,
    Box,
    Heading,
    Stack,
    Text,
    VStack,
    Grid,
    GridItem
  } from '@chakra-ui/react'
  
 import { ExternalLinkIcon } from '@chakra-ui/icons'
  
  export const Main = () => {
    return (
      <Box bg="white" w="100%" h="100%" color="black" mt="130px">
        <VStack
          mx={['5%', '20%']}
          my={['15px', '30px']}
          spacing="8px"
          align='left'
        >
          <Box position="relative"  >
            <Heading size={['md', '3xl'] }>
              Hi! I Am <Badge variant="solid"  
                         background="#3182CE" 
                         fontSize="20" 
                         py='8px' 
                         px='20px' 
                         borderRadius='100px'>
                UI/UX
              </Badge><br/> Lucas Perez
            </Heading>
          </Box>
          <Box>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. LorIpsum.
            </Text>
          </Box>
          <Stack spacing={4} direction="row">
            <Button bgGradient='linear(to-l,gray.300, pink.200)' size="sm" borderRadius='0px'>
              Hire Me
            </Button>
            <a color='black' href=''>
              Projects 
              <ExternalLinkIcon ml='5px'/>
            </a>
          </Stack>
          <Grid
            h='150px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
          >
            <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2} mt='25px'>
              <Heading size={['xs','md']} >
                +84
              </Heading>
              <Text fontSize={['xs','sm']}>
                Clients on work worldwide
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2} >
              <Heading size={['xs','md']} >
                572
              </Heading>
              <Text fontSize={['xs','sm']}>
                Project done
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={4}>
              <Heading size={['xs','md']} >
                Contact
              </Heading>
              <Text fontSize={['xs','sm']}>
                exemple@algo.com
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    )
  }