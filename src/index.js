import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import GlobalFonts from "./styles/fonts/fonts";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Routing from "./Routing";
import "./index.css";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Routing />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
