import { HeaderText,  ImagemLogo,  StyledToolbar } from "./styles";
import logo from "../../assets/ibge-logo.png";

export const Header: React.FC = () => {
  return (
    
      <StyledToolbar>
        <ImagemLogo src={logo} height="100" width="250" color="white" />
        <HeaderText>API DE DADOS DO IBGE</HeaderText>
      </StyledToolbar>
    
  );
};
