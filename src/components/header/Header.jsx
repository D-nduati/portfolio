import * as React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", 
      backgroundColor:'#677D6A',
      borderRadius: 1,
    }}>
      <Avatar
        alt="David Nduati"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, margin: "0 4rem 0 2rem" }}
      />
      <Box
        sx={{
          flex: 1,
          width:'auto',
          height: "4rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems:'center',
          padding:'.75rem',
          borderRadius: 1,
          bgcolor: "#1A3636",
          "&:hover": {
            transition:'1.5s',
            bgcolor: "#677D6A",
          },
        }}
      >
        <Link
          href="/"
          sx={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="body1">Home</Typography>
        </Link>
        <Link
          href="/about"
          sx={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="body1">About</Typography>
        </Link>
        <Link
          href="/projects"
          sx={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="body1">Projects</Typography>
        </Link>
        <Link
          href="/contact"
          sx={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="body1">Contact</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;