import React from 'react'
import Editor from './Editor';
import { Box,styled} from '@mui/material';
import { useContext } from 'react';
import { dc } from '../context/DataProvider';
const Container=styled(Box)`
display:flex;

`
const Codespace = () => {
  const{html, setHtml, css,setCss,js,setJs}=useContext(dc);
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="red" value={html} onChange={setHtml}/>
      <Editor heading="CSS" icon="*"color="blue" value={css} onChange={setCss} />
      <Editor heading="JS"icon="()"color="yellow" value={js} onChange={setJs}/>
    </Container>
  )
}

export default Codespace;