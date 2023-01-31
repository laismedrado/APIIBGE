import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { styled as style } from "@mui/material/styles";

export const StyledFooter = styled(Toolbar)`
  display: flex;
  height: 2rem;
  justify-self: center;
  justify-content: center;
  gap: 1rem;
  background-color: gray;
  color: #034f89;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: -3.1rem;
  }

  @media screen and (min-device-width: 800px) {
    display: flex;
    height: 2rem;
    justify-self: center;
    justify-content: center;
    gap: 1rem;
    background-color: gray;
    color: #034f89;
  }
`;
