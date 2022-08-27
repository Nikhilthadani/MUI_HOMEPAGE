import { Box } from "@mui/material";
import React from "react";
import { CustomizedTypography } from "./Styles";
const ContentItem = ({ src, title, description, swap }) => {
  return (
    <Box
      bgcolor={swap && "white"}
      padding={10}
      justifyContent={"space-between"}
      display="flex"
    >
      {swap ? (
        <>
          <img
            src={src}
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: "10%",
              borderRadius: 20,
            }}
            height="50%"
            alt={title}
          />
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
              fontSize={{ lg: 28, md: 24, sm: 20, xs: 16 }}
              padding={3}
              sx={{ textJustify: "auto" }}
            >
              {description}
            </CustomizedTypography>
          </Box>
        </>
      ) : (
        <>
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
              fontSize={{ lg: 28, md: 24, sm: 20, xs: 16 }}
              padding={3}
              sx={{ textJustify: "auto" }}
            >
              {description}
            </CustomizedTypography>
          </Box>
          <img
            loading="lazy"
            src={src}
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: "10%",
              borderRadius: 20,
            }}
            height="300px"
            alt={title}
          />
        </>
      )}
    </Box>
  );
};
export default ContentItem;
