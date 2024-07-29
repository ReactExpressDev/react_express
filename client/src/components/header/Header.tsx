import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const Header: React.FC = () => {
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6">
            My Application
          </Title>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Header;
