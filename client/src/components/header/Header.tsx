import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PenIcon from '@mui/icons-material/AirOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, responsiveFontSizes, useTheme } from '@mui/material/styles';
import header from '.';
import { Box } from '@mui/material';

const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const HeaderContainer = styled('div')({
  marginTop: '0.5em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const StyledIconRow = styled('div')({
});

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  fontSize: '2em',
  '& .MuiSvgIcon-root': {
    color: '#fff',
    fontSize: '1.5em',
  },
});

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <StyledIconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </StyledIconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Menu Item 3</MenuItem>
              </Menu>
              <Title variant="h4">My Application</Title>
            </>
          ) : 
          (
            <HeaderContainer>
              <Title variant="h4">My Application</Title>
              <StyledIconRow>
                <StyledIconButton>
                  <ListAltIcon />
                </StyledIconButton>
                <StyledIconButton>
                  <PenIcon />
                </StyledIconButton>
              </StyledIconRow>
            </HeaderContainer>
          )}
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;
