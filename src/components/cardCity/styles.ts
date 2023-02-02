import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import styled from "styled-components";
import { styled as style } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const ContainerData = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2.6rem;
  width: 58rem;
  justify-content: center;
  margin: 1rem;
  margin-top: 2rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 1rem;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    justify-content: center;
    width: 30rem;
    align-items: center;
    margin-top: 1rem;
  }

  @media screen and (max-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    width: 30rem;
    align-items: center;
    margin-top: 4rem;
  }

  @media screen and (min-device-width: 800px) {
    padding: 2rem;
    display: flex;
    gap: 2.6rem;
    width: 78rem;
    justify-content: center;
    margin: 1rem;
    margin-top: 4rem;
  }
`;

export const ContainerTable = styled(TableContainer)`
  width: 35rem;
  background-color: white;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 105rem;
    margin-top: 1.5rem;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 880px) {
    width: 10rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-device-width: 800px) {
    width: 35rem;
    background-color: white;
  }
`;
export const TableBox = style(Table)`
width: 45rem;
min-width:10rem;
height:1rem;
`;
export const CelBox = style(TableRow)`
width: 160rem;
height:1rem;
`;
