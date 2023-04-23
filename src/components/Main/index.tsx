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
  HStack,
  Flex,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <Flex alignItems="center">
      <HStack>
        <Box bg="white" color="black">
          <VStack
            mx={["8%", "10%"]}
            my={["15px", "30px"]}
            spacing="15px"
            align="left"
          >
            <Box position="relative">
              <Heading size={["xl", "3xl"]}>
                {t("apresentation")}
                <Badge
                  variant="solid"
                  background="#3182CE"
                  fontSize={["15px", "20px"]}
                  py={["4px", "8px"]}
                  px={["10px", "20px"]}
                  borderRadius="100px"
                >
                  {t("detailApresentacao")}
                </Badge>
                <Spacer />
                {t("nameApresentacao")}
              </Heading>
            </Box>
            <Box>
              <Text fontSize={["md", "2xl"]}>{t("subTitleApresentacao")}</Text>
            </Box>
            <Stack spacing={4} direction="row" alignItems="center">
              <Button bgGradient="linear(to-l,gray.300, pink.200)" size="lg">
                {t("button01")}
              </Button>
              <a color="black" href="">
                {t("button02")}
                <ExternalLinkIcon ml="5px" />
              </a>
            </Stack>
            <Grid
              h="150px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={4}
              fontFamily={"Space Grotesk"}
            >
              <GridItem
                rowStart={1}
                rowEnd={2}
                colStart={1}
                colEnd={2}
                mt="25px"
              >
                <Heading size={["xs", "lg"]}>{t("numGrid01")}</Heading>
                <Text fontSize={["xs", "md"]}>{t("textGrid01")}</Text>
              </GridItem>
              <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2}>
                <Heading size={["xs", "lg"]}>{t("numGrid02")}</Heading>
                <Text fontSize={["xs", "md"]}>{t("textGrid02")}</Text>
              </GridItem>
              <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={4}>
                <Heading size={["xs", "lg"]}>{t("numGrid03")}</Heading>
                <Text fontSize={["xs", "md"]}>{t("textGrid03")}</Text>
              </GridItem>
            </Grid>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Main;
