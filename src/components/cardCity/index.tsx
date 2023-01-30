import React, { useEffect, useState } from "react";
import { DataCardTypes } from "../../model/dataCardTypes";
import { useAppSelector } from "../../redux/types/reduxTypes";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { ContainerData } from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const CityInfo = () => {
  const { status } = useAppSelector((state) => state.info);
  const { info } = useAppSelector((state) => state.info);
  const [categories, setCategories] = useState<DataCardTypes>(
    {} as DataCardTypes
  );

  useEffect(() => {
    if (status === "fulfilled") {
      setCategories({
        Município: {
          id: info.id,
          nome: info.nome,
          UF: ` ${info.municipio["regiao-imediata"]["regiao-intermediaria"].UF.nome} `,
          sigla: ` ${info.municipio["regiao-imediata"]["regiao-intermediaria"].UF.sigla}`,
          regiao:
            info.municipio["regiao-imediata"]["regiao-intermediaria"].UF.regiao
              .nome,
          microrregiao: info.municipio.microrregiao.nome,
          mesorregiao: info.municipio.microrregiao.mesorregiao.nome,
        },
      });
    } else setCategories({} as DataCardTypes);
  }, [status, info]);

  return (
    <ContainerData>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "gray",
            }}
          >
            <TableRow>
              <TableCell align="center" style={{ color: "white" }}>
                Nome
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                UF
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Sigla
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Região
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Microrregião
              </TableCell>
              <TableCell align="center" style={{ color: "white" }}>
                Mesorregião
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(categories).map((category) => (
              <TableRow key={category.id}>
                <TableCell align="center">{category.nome}</TableCell>
                <TableCell align="center">{category.UF}</TableCell>
                <TableCell align="center">{category.sigla}</TableCell>
                <TableCell align="center">{category.regiao}</TableCell>
                <TableCell align="center">{category.microrregiao}</TableCell>
                <TableCell align="center">{category.mesorregiao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerData>
  );
};
