import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: "auto" }}>
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
