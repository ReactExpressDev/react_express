import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import {ListAlt, AirOutlined, DarkMode} from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles, responsiveFontSizes, useTheme } from '@mui/material/styles'
import header from '.'
import { Box } from '@mui/material'
import { WidthWide } from '@mui/icons-material'

const Root = styled('div')({
  flexGrow: 1,
})

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'initial',
})

const Title = styled(Typography)({
  flexGrow: 1,
})

const HeaderContainer = styled('div')({
  marginTop: '0.5em',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  columnGap: '2em',
  alignItems: 'center',
})

const StyledMainFuncIcons = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})

const StyledSubFuncIcons = styled('div')({
  'text-align': '-webkit-right',
})

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  fontSize: '1em',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiSvgIcon-root': {
    color: '#fff',
    fontSize: '1.5em',
  },
})

const StyledIconTitle = styled('span')({
  fontSize: '0.5em',
})

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Root>
      <StyledAppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <StyledIconButton
                edge="start"
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
              <Title variant="h5">My Application</Title>
            </>
          ) : 
          (
            <HeaderContainer>
              <Title variant="h5" style={{width: '25%'}}>My Application</Title>
              <StyledMainFuncIcons style={{width: '50%'}}>
                <StyledIconButton>
                  <ListAlt />
                  <StyledIconTitle>Task</StyledIconTitle>
                </StyledIconButton>
                <StyledIconButton>
                  <AirOutlined />
                  <StyledIconTitle>Schedule</StyledIconTitle>
                </StyledIconButton>
              </StyledMainFuncIcons>
              <StyledSubFuncIcons style={{width: '25%'}}>
                <StyledIconButton>
                  <DarkMode />
                  <StyledIconTitle>DardMode</StyledIconTitle>
                </StyledIconButton>
              </StyledSubFuncIcons>
            </HeaderContainer>
          )}
        </Toolbar>
      </StyledAppBar>
    </Root>
  )
}

export default Header
