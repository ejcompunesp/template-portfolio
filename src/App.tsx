import { Box, Flex } from "@chakra-ui/react";
import { Footer, Header, Main, Side } from "components";
import "./utils/i18n";

function App() {
  return (
    <>
      <Header  />
      <Flex h="100vh" overflowY="auto">
        <Main />
        <Side />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
