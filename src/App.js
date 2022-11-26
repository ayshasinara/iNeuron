 import { Box, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import Form from "./Components/Form";
import UserTable from "./Components/UserTable";


function App() {
  return <Box bg={useColorModeValue('gray.50', 'gray.800')} pb='20'>
    <Form />
    <UserTable/>
  </Box>;
}

export default App;
