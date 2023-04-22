import {
  Badge,
  Button,
  Box,
  Heading,
  Stack,
  Text,
  VStack,
  Grid,
  GridItem,
  Spacer,
  HStack
} from '@chakra-ui/react'
import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export const Main = () => {

  const { t, i18n } = useTranslation()

  return (
    <Box>
      <HStack spacing='0'>
      <Box bg="white" w="60%" h="100%" color="black" mt="130px">
        <VStack
          mx={['8%','10%']}
          my={['15px', '30px']}
          spacing="15px"
          align='left'
        >

          {/* title component*/}
          <Box position="relative">
            <Heading size={['xl', '3xl']}>
              {t('apresentation')}
              <Badge variant="solid"
                background="#3182CE"
                fontSize={['15px', '20px']}
                py={['4px', '8px']}
                px={['10px', '20px']}
                borderRadius='100px'

              >
                {t("detailApresentacao")}
              </Badge > 
              <Spacer/>
              {t("nameApresentacao")}
            </Heading>
          </Box>

          {/* description component*/}
          <Box>
            <Text fontSize={['md','2xl']}>
              {t("subTitleApresentacao")}
            </Text>
          </Box>

          {/* links component*/}
          <Stack spacing={4} direction="row">
            <Button bgGradient='linear(to-l,gray.300, pink.200)' size="sm" borderRadius='0px'>
              {t("button01")}
            </Button>
            <a color='black' href=''>
              {t("button02")}
              <ExternalLinkIcon ml='5px' />
            </a>
          </Stack>

          {/* information component*/}
          <Grid
            h='150px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}

            fontFamily={'Space Grotesk'}
          >
            <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2} mt='25px' >
              <Heading size={['xs', 'md']}  >
                {t("numGrid01")}
              </Heading>
              <Text fontSize={['xs', 'sm']}>
                {t("textGrid01")}
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2} >
              <Heading size={['xs', 'md']} >
                {t("numGrid02")}
              </Heading>
              <Text fontSize={['xs', 'sm']}>
                {t("textGrid02")}
              </Text>
            </GridItem>
            <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={4}>
              <Heading size={['xs', 'md']} >
                {t("numGrid03")}
              </Heading>
              <Text fontSize={['xs', 'sm']}>
                {t("textGrid03")}
              </Text>
            </GridItem>
          </Grid>

        </VStack>
        
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        pos="relative"
        h="510px"
        w="360px"
        alignItems="center"
        justifyContent="space-between"
        _before={{
          content: '""',
          bgImage: "url(https://bit.ly/dan-abramov)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.9
        }}
      >
        <Heading
          as="h4"
          size="md"
          fontWeight=""
          pt="35px"
          color="black"
          opacity="0.9"
        >
          Create Your site on <strong>Figma</strong>
          <br />
          <strong>Sketch</strong> or <strong>XD</strong>
        </Heading>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgColor="gray.100"
            h="50px"
            w="70%"
            mb="7"
            pl="15px"
            opacity="0.9"
            color="black"
          >
            <a href="">Subscribe my Newsletter</a>
            <Box
              display="flex"
              bgColor="gray.900"
              h="40px"
              w="40px"
              alignItems="center"
              justifyContent="center"
              mr="5px"
            >
              <a href="#">
                <ArrowForwardIcon color="white" />
              </a>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
      
  )
}