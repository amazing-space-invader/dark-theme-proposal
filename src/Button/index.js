import React from "react";
import styled from "styled-components";
import useDarkMode from 'use-dark-mode';

import * as colors from "../colors";

const StyledButton = styled.button`
  padding: 12px 24px;
  height: 48px;
  font-size: 16px;
  border: none;
  background-color: ${({ darkMode }) => darkMode ? colors.independence700 : colors.purple100};
  color: ${({ darkMode }) => darkMode ? colors.white : colors.purple500};
  cursor: pointer;

  transition: background-color 0.1s linear, color 0.1s linear;

  outline: none;
`;

const Button = (props) => {
  const { children, ...restProps } = props;
  const darkMode = useDarkMode();

  return <StyledButton {...restProps} darkMode={darkMode.value}>{children}</StyledButton>;
};

export { Button };
