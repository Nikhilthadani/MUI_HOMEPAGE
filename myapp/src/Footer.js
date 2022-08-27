import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography paddingTop={10} textAlign="center" variant="h3">
        For Small And Large Teams
      </Typography>
      <Typography padding={4} textAlign="center" variant="caption">
        We have made it compitable for any team size
      </Typography>
      <Box padding={5} display="flex" margin="auto" justifyContent={"center"}>
        <Button sx={{ mr: 2 }} variant="contained">
          Try CodEnv For Enterprise
        </Button>
        <Button sx={{ ml: 2 }} variant="outlined">
          Talk To Us
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
