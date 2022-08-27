import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { MenuOutlined } from "@mui/icons-material";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding>
          {links.map((item) => (
            <ListItemButton>
              <ListItemText sx={{ textAlign: "left" }}>{item}</ListItemText>
              <Divider />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{ ml: "auto", padding: 0, mt: 0 }}
      >
        <MenuOutlined color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
