import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-height: 70.5vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    min-height: 70.5vh;
    background-color: #e6e6df;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    flex-direction: column;
    min-height: 70.5vh;
    background-color: #e6e6df;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-height: 141vh;
    background-color: #e6e6df;
  }

  @media screen and (min-device-width: 800px) {
    background-color: white;
    display: flex;
    flex-direction: column;
    min-height: 70.5vh;
  }
`;
export const ContainerInterface = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #e6e6df;
  height: 18.5rem;
  margin: 1rem;
  padding: 2rem;
  margin-top: 2.5rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  min-height: 70.5vh;
border-radius: 0.01rem;
  }

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    min-height: 70.5vh;
    border-radius: 0.01rem;
  }
  @media screen and (min-device-width: 800px) {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: #e6e6df;
    height: 18.5rem;
    margin: 1rem;
    padding: 2rem;
    margin-top: 2.5rem;
  }
`;
export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  gap: 8rem;
  background-color: #e6e6df;
  height: 9rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-left: -1rem;

    margin-top: 2rem;
    gap: 3rem;
    height: 100%;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    align-items: center;
    gap: 2rem;
    height: 100%;
  }
  @media screen and (min-device-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    gap: 5rem;
    margin-top: -2rem;
    width: 100%;
    background-color: #e6e6df;
    height: 9rem;
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: -0.5rem;
  justify-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: .5rem;
    width: 100%;
    gap: 3rem;
  }

  @media screen and (min-device-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: -0.5rem;
    justify-items: center;
  }
`;

export const Texto = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: black;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.5rem;
    align-items: center;
    font-weight: 800;
    color: black;
  }
  @media screen and (min-device-width: 800px) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: black;
  }
`;

export const ContainerDataInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
  justify-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 8rem;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    margin-top: 5rem;
  }
  @media screen and (min-device-width: 800px) {
     margin-top: -4rem;
  }
`;
