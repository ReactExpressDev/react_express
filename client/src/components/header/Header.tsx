import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import ListAltIcon from '@mui/icons-material/ListAlt'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Margin, Padding } from '@mui/icons-material'

const Root = styled('div')({
  flexGrow: 1,
})

const HeaderBox = styled(AppBar)({
  position: 'static',
  backgroundColor: 'black',
  color: 'while',
})

const Title = styled(Typography)({
  flexGrow: 1,
})

const FlexIconBox = styled(Toolbar)({
  margin: '1em',
  display: 'flex',
  gap: '3em',
  justifyContent: 'center',
})

const IconButtonList = styled(IconButton)({
  color: '#fff',
  backgroundColor: 'black',
  borderRadius: '50%',
  padding: '1em',
  '&:hover': {
    backgroundColor: 'gray',
  },
})

const TaskIcon = styled(ListAltIcon)({
  fontSize: '5rem'
})

const PenIcon = styled(DriveFileRenameOutlineIcon)({
  fontSize: '5rem'
})

function Header(){
  return (
    <Root>
      <HeaderBox>
        <Toolbar style={{padding:0}}>
          <Title variant="h3" style={{margin: '10px'}}>
            My Application
          </Title>
        </Toolbar>
        <FlexIconBox>
          <IconButtonList aria-label="list">
            <TaskIcon href="#" />
          </IconButtonList>
          <IconButtonList aria-label="list">
            <PenIcon />
          </IconButtonList>
        </FlexIconBox>
      </HeaderBox>
    </Root>
  )
}

export default Header
