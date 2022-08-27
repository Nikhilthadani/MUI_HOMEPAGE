import { Box, Typography } from "@mui/material";
import React from "react";
import ContentItem from "./ContentItem";
const dataObj = [
  {
    title: "Get things done",
    description:
      "lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem",
    src: "/1.jpg",
  },
  {
    title: "Get things done",
    description:
      "lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem",
    src: "/2.jpg",
  },
  {
    title: "Get things done",
    description:
      "lorem loremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem",
    src: "/3.jpg",
  },
];
const Content = () => {
  return (
    <Box
      bgcolor={"#fbf2f2"}
      display={"flex"}
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {dataObj.map((data, index) => (
        <ContentItem
          swap={index % 2 !== 0}
          title={data.title}
          description={data.description}
          src={data.src}
          key={index}
        />
      ))}
    </Box>
  );
};

export default Content;
