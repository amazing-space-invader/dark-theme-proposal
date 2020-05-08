import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import useDarkMode from "use-dark-mode";

import { Button } from "../Button";

import * as colors from "../colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ darkMode }) =>
      darkMode ? colors.space700 : colors.space100};
    transition: background-color 0.1s linear;
  }
`;

const StyledDemo = styled.div`
  margin: -5px;

  & > * {
    margin: 5px;
  }
`;

const StyledStatus = styled.div`
  font-family: 'Helvetica';
  font-size: 24px;
  font-weight: bold;
  color: ${({ darkMode }) => darkMode ? colors.space100 : colors.space700};
  transition: color 0.1s linear;
`;

const App = () => {
  const darkMode = useDarkMode();

  return (
    <>
      <GlobalStyle darkMode={darkMode.value} />

      <StyledStatus darkMode={darkMode.value}>
        isDark: {String(darkMode.value)}
      </StyledStatus>

      <StyledDemo style={{ margin: "20px 0" }}>
        <Button onClick={darkMode.enable}>enable dark</Button>
        <Button onClick={darkMode.disable}>disable dark</Button>
        <Button onClick={() => darkMode.value ? darkMode.disable() : darkMode.enable()}>toggle</Button>
      </StyledDemo>
    </>
  );
};

export default App;
