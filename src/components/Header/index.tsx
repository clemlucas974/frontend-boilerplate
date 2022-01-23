import React, { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import * as S from "./style";

const Header: FC = () => {
  return (
    <AppBar position="static">
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Accueil
        </Typography>
        <S.Logo src="/LOGO_POPCHEF_WHITE.svg" alt="POPCHEF - LOGO" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
