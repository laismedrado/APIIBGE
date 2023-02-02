import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";

export const StyledToolbar = styled(Toolbar)`
  @media screen and (min-device-width: 800px) {
    display: flex;
    height: 120px;
    background: gray;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 12rem;
    display: flex;
    flex-direction: column;
    background: gray;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 1rem;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    background: gray;
  }
`;

export const HeaderText = styled.text`
  display: flex;
  margin-right: 2.5rem;
  font-size: 1.7rem;
  color: #034f89;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 1000;
  margin-right: 2rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    font-size: 1.25rem;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 20rem;
    display: flex;
    color: #034f89;
    flex-direction: column;
  }
  @media screen and (min-device-width: 800px) {
    display: flex;
    margin-right: 2.5rem;
    font-size: 1.7rem;
    color: #034f89;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 1000;
    margin-right: 2rem;
  }
`;

export const ImagemLogo = styled.img`
  height: 5rem;
  width: 15rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4.5rem;
    width: 10.5rem;
    font-size: 0.9rem;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    height: 4.5rem;
    width: 10.5rem;

    font-size: 1.5rem;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 12.5rem;
    width: 22.5rem;
    margin-top: 1rem;
  }
  @media screen and (min-device-width: 800px) {
    height: 5rem;
    width: 15rem;
  }
`;
