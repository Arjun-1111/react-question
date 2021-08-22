import React from "react";
import Buttons from "./components/Buttons";
import { Container } from "@material-ui/core";
import CheckBox from "./components/CheckBox";
import Switches from "./components/Switches";

function App() {
  return (
    <Container maxWidth="sm">
      <Buttons />
      <CheckBox />
      <Switches />
    </Container>
  );
}

export default App;
