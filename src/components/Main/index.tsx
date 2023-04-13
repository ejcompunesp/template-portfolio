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
 import { useTranslation} from 'react-i18next';
  
  export const Main = () => {

    const { t , i18n } = useTranslation()

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
             {t('tituloBranco')}<Badge variant="solid"  
                         background="#3182CE" 
                         fontSize="20" 
                         py='8px' 
                         px='20px' 
                         borderRadius='100px'>
                {t("detalheApresentacao")}
              </Badge><br/> {t("nomeApresentacao")}
            </Heading>
          </Box>
          <Box>
            <Text>
              {t("subTituloApresentacao")}
            </Text>
          </Box>
          <Stack spacing={4} direction="row">
            <Button bgGradient='linear(to-l,gray.300, pink.200)' size="sm" borderRadius='0px'>
            {t("botao01")}
            </Button>
            <a color='black' href=''>
            {t("botao02")}
              <ExternalLinkIcon ml='5px'/>
            </a>
          </Stack>
          <Grid
            h='150px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            
            fontFamily={'Space Grotesk'}
          >
            <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2} mt='25px' >
              <Heading size={['xs','md']}  >
              {t("numGrid01")}
              </Heading>
              <Text fontSize={['xs','sm']}>
              {t("textGrod01")}
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2} >
              <Heading size={['xs','md']} >
              {t("numGrid02")}
              </Heading>
              <Text fontSize={['xs','sm']}>
              {t("textGrod02")}
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={4}>
              <Heading size={['xs','md']} >
              {t("numGrid03")}
              </Heading>
              <Text fontSize={['xs','sm']}>
              {t("textGrod03")}
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    )
  }