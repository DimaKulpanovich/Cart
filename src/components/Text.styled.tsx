import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled.tsx";

export const StyledText = styled.p`
  color: ${myTheme.colors.text};
  width: 100%;
  text-align: left;
  padding: 0 10px;
  font-weight: 500;
  font-size: 12px;
`