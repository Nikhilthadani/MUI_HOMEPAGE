import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Box } from "@mui/system";
import DrawerComp from "./DrawerComp";
const links = ["Products", "Solutions", "Enterprise", "Pricing"];
const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef);
    videoRef.current.play();
    videoRef.current.autoPlay = true;
    videoRef.current.loop = true;
  }, []);
  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        height: "100%",
        position: "sticky",
      }}
    >
      {isMatch ? (
        <Box display="flex">
          <WarehouseIcon sx={{ color: "black", padding: 1 }} />
          <DrawerComp links={links} />
        </Box>
      ) : (
        <>
          {" "}
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WarehouseIcon sx={{ color: "black" }} />
              <Box>
                <Tabs sx={{ textDecoration: "none" }} component={Link}>
                  {links.map((link) => (
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        fontStyle: "normal",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                        },
                      }}
                      label={link}
                    />
                  ))}{" "}
                </Tabs>
              </Box>
              <Box sx={{ marginLeft: "auto", display: "flex" }}>
                <Button
                  size="small"
                  sx={{
                    marginLeft: 1,
                    fontSize: { lg: "16px", md: "16px", sm: "16px" },
                  }}
                  variant="outlined"
                >
                  Talk To Us
                </Button>
                <Button sx={{ marginLeft: 1 }} variant="contained">
                  Try For Free
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </>
      )}
      <Box width="100%" height="100vh">
        <video
          loading="lazy"
          ref={videoRef}
          width={"100%"}
          height="50%"
          src={`/video.mp4`}
          playsinline
          autoplay
          muted
          loop
        ></video>
        <Box display="flex" width="100%">
          {" "}
          <Typography
            margin={"auto"}
            color={"black"}
            textAlign={"center"}
            fontSize={{ lg: 30, md: 24, sm: 18 }}
          >
            Build your softwares hassle free and with top notch quality
          </Typography>
        </Box>
        <Box
          width="100%"
          display={"flex"}
          justifyContent="center"
          margin="auto"
          marginTop={5}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: { lg: 18, md: 16, sm: 14 },

              mr: 3,
              bgcolor: "aliceblue",
              color: "black",
              ":hover": { bgcolor: "wheat" },
            }}
          >
            Sign Up With Email Address
          </Button>
          <Button sx={{ ml: 3 }} variant="contained">
            Sign Up With Google
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
