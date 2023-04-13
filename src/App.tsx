import Card from "components/Card";

import { Alert, AlertIcon, AlertTitle, Box } from "@chakra-ui/react";
import { Header, Main } from "components";
import './utils/i18n'

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Main/>
      </div>
    </div>
  );
}

export default App;
