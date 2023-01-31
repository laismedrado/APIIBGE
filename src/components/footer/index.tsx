import { StyledFooter } from "./styles";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "@mui/material/Link";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Link
        href="https://github.com/laismedrado"
        target="_blank"
        color="inherit"
      >
        <GitHubIcon />
      </Link>
      <Link href="mailto:laismedrado@live.com" color="inherit">
        <EmailIcon />
      </Link>
    </StyledFooter>
  );
};
