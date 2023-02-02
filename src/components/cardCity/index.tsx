import React, { useEffect, useState } from "react";
import { DataCardTypes } from "../../model/dataCardTypes";
import { useAppSelector } from "../../redux/types/reduxTypes";

import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { CelBox, ContainerData, ContainerTable } from "./styles";

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
      {
                status === "fulfilled" ? (
      <Box sx={{ width: "95%" }} position="absolute">
        <ContainerTable>
          <Table aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "gray",
              }}
            >
              <CelBox>
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
              </CelBox>
            </TableHead>
            <TableBody>
              {Object.values(categories).map((category) => (
                <CelBox key={category.id}>
                  <TableCell align="center">{category.nome}</TableCell>
                  <TableCell align="center">{category.UF}</TableCell>
                  <TableCell align="center">{category.sigla}</TableCell>
                  <TableCell align="center">{category.regiao}</TableCell>
                  <TableCell align="center">{category.microrregiao}</TableCell>
                  <TableCell align="center">{category.mesorregiao}</TableCell>
                </CelBox>
              ))}
            </TableBody>
          </Table>
        </ContainerTable>
      </Box>
         ) : <></>
        }
    </ContainerData>
  );
};
