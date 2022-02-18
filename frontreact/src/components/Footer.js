import React from "react";
//import Typography from "@mui/material/Typography";
//import Link from "@mui/material/Link";
//import Box from "@mui/material/Box";
import styles from "./AddSpaceForm.module.css";
//import { style } from "@mui/system";

/* function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
} */

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.policy}>
        Legal Warning<p></p>
        Privacy Policy<p></p>
        Cookies Policy<p></p>
        Quality Policy<p></p>
      </div>
      <div className={styles.logo}>S'PACES </div>
      <div className={styles.factoria}>
        <a href="https://factoriaf5.org/">
          <font color="white">Factoría F5</font>
        </a>
        <p></p>
        <a href="https://twitter.com/factoriaf5">
          <font color="white">Twitter</font>
        </a>
        <p></p>
        <a href="https://www.instagram.com/factoria_f5/">
          <font color="white">Instagram</font>
        </a>
        <p></p>
        <a href="https://www.youtube.com/channel/UCazHbN7ChOJxRXW0-K1zczw">
          <font color="white">Youtube</font>
        </a>
        <p></p>
      </div>
    </footer>
    // <Box sx={{ bgcolor: "#1976d2", color: "white", height: "20vh" }} component="footer">
    //   <Typography variant="h6" align="center" gutterBottom>
    //     S'PACES
    //   </Typography>
    //   <Typography sx={{ color: "white"}}
    //     variant="subtitle1"
    //     align="center"
    //     color="text.secondary"
    //     component="p"
    //   >
    //     S'PACES FOR CODERS LIKE YOU
    //   </Typography>
    // </Box>
  );
}
