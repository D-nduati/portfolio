import React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#677D6A",
        borderRadius: 1,
        padding: "0.5rem 2rem",
      }}
    >
      <Avatar
        alt="David Nduati"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, marginRight: "2rem" }}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0.75rem",
          borderRadius: 1,
          bgcolor: "#1A3636",
          "&:hover": {
            transition: "0.5s", // Reduced transition time for a snappier feel
            bgcolor: "#677D6A",
          },
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((text, index) => (
          <Link
            key={index}
            href={`/${text.toLowerCase()}`}
            sx={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
              marginRight: "1.5rem", // Increased margin for better spacing
              "&:hover": {
                textDecoration: "underline",
              },
              "&:last-child": {
                marginRight: 0, // Remove margin from last item
              },
            }}
          >
            <Typography variant="body1">{text}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
