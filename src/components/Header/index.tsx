import React, { FC } from "react";
import { AppBar, IconButton, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import * as S from "./style";

const Header: FC = () => {
  return (
    <AppBar data-test-id="header" position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <S.Logo src="/LOGO_POPCHEF_WHITE.svg" alt="POPCHEF - LOGO" />
        </Box>
        <IconButton size="large" color="inherit" aria-label="cart">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
