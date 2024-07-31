import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material';
const Container =styled(AppBar)`background:black`
const Header = () => {
  return (
    <div>
    <Container position='static'>
    <Toolbar style={{fontFamily:'monospace',fontSize:'20px'}}>CodeFen</Toolbar>
    </Container>
    
    </div>

  )
}

export default Header;