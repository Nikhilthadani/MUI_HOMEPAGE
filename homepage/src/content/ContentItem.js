import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CustomizedTypography } from "../styled/style";

const ContentItem = ({ title, description, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box
      bgcolor={!swap && "#fff"}
      display="flex"
      flexDirection={isMatch ? "column" : "row"}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
    >
      {swap ? (
        <>
          {" "}
          <Box>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              padding={3}
            >
              {description}
            </CustomizedTypography>
          </Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "50%"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20,
            }}
            height={"300px"}
          />{" "}
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            width={isMatch ? "100%" : "50%"}
            loading="lazy"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: "10%",
              borderRadius: 20,
            }}
            height={"300px"}
          />{" "}
          <Box>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <CustomizedTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              varaint="caption"
              padding={3}
            >
              {description}
            </CustomizedTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;
