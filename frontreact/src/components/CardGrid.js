import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PlaceCard from "./PlaceCard";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function CardGrid() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((place, index) => (
            <PlaceCard key={index} place={place} xs={12} sm={6} md={4} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
