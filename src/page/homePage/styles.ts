import styled from "styled-components";
import Button from "@mui/material/Button";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 70.5vh;
`;

export const ContainerInterface = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #e6e6df;
  height: 18.5rem;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 2px 2px 2px 1px #888888;
  margin-top: 2.5rem;
`;
export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  gap: 8rem;
  background-color: #e6e6df;
  height: 9rem;
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: -0.5rem;
  justify-items: center;
`;

export const Texto = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: black;
`;

export const ButtonCSS = styled(Button)`
  width: 7rem;
  height: 1.5rem;
  font-size: 0.5rem;
  background-color: grey;
  color: gray;
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1.6rem;
`;
