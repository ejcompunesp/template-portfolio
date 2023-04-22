import {
  Box,
  Flex,
  Image,
  Link,
  chakra,
  Center,
  Text,
  Heading
} from "@chakra-ui/react";

import { ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Side = () => {
  return (
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
  )
}

export default Side;


