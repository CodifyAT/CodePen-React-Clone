import React, { useContext,useState,useEffect } from 'react'
import { Box,styled} from '@mui/material';
import { dc } from '../context/DataProvider';

const Container=styled(Box)`
border:4px solid black
display:full;
`
const Result = () => {
    const {html,css,js}=useContext(dc);
    const [src,setSrc]=useState('');
    const srcCode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `
    useEffect(()=>{
        const timeout= setTimeout(()=>{
            setSrc(srcCode);
        },2000)
        return()=>clearTimeout(timeout);
    },[html,css,js])
  return (
    <Container>
        <h1>Output:</h1>
        <iframe
        srcDoc={src}
        title="Output"
        sandbox='allow-scripts'
        frameBorder={0}
        width="100%"
        height="100%"
        />
    </Container>
    
  )
}

export default Result;