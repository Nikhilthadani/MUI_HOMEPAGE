import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CustomizedTypography } from "../styled/style";

const Footer = () => {
  return (
    <Box display="flex" flexDirection={"column"}>
      <CustomizedTypography
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 15 }}
        variant="h3"
        paddingTop={10}
        textAlign="center"
      >
        For Any Team Size
      </CustomizedTypography>
      <CustomizedTypography
        fontSize={{ lg: 24, md: 20, sm: 18, xs: 16 }}
        variant="div"
        padding={4}
        textAlign="center"
      >
        We have made it compitable for any team size
      </CustomizedTypography>
      <Box display="flex" margin="auto" padding={5} justifyContent="center">
        <Button
          sx={{ mr: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="contained"
        >
          Try CodeEnv For Free
        </Button>
        <Button
          sx={{ ml: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="outlined"
        >
          Talk To Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
