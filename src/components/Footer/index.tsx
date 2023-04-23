import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

const infos = [
  {
    name: "Website Design",
    value: "75",
  },
  {
    name: "Mobile App Design",
    value: "64",
  },
  {
    name: "Brand Identity",
    value: "37",
  },
];

const Footer = () => {
  return (
    <Flex bg="blackAlpha.900" p="8" alignItems="center" justifyContent="center">
      <Flex mx="12" direction="column">
        <Flex direction="column">
          <Text fontSize="2xl" color="white" as="b">
            Project
          </Text>
          <Text fontSize="xl" color="white" as="b">
            Statistics {new Date().getFullYear()}
          </Text>
        </Flex>
        <Box mt="6">
          <Button size="sm" bg="yellow.400">
            Know More
          </Button>
        </Box>
      </Flex>
      <Flex mx="12" direction="column" w="300px">
        {infos.map(({ name, value }) => (
          <Box my="1">
            <Flex justifyContent="space-between">
              <Text color="white" as="b">
                {name}
              </Text>
              <Text color="white" as="b">
                {value}
              </Text>
            </Flex>
            <Divider my="2" color="grey.100" />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
