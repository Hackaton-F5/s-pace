import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Welcome() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            S'PACES FOR CODERS LIKE YOU
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Learning to write programs stretches your mind, and helps you think
            ... We salute the coders, designers, and programmers already hard at
            work at their desks .... If the machine produces tranquility it's
            right. If it disturbs you it's wrong until either the machine or
            your mind is changed... or maybe you just need a good space?
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" component={Link} to="/landing">
              Find your coding space
            </Button>

            <Button variant="outlined" component={Link} to="/form">
              Got a space to offer?
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
