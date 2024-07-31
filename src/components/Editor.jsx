import { useState } from 'react';
import React from 'react'
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import {Controlled as ControlledEditor} from 'react-codemirror2';

import '../App.css'

const Heading =styled(Box)`
    background:#1d1e22;
    display:flex;   
    padding:9px 12px;
`
const Heads=styled(Box)`
display:flex;
background:#060606;
color: #AAAEBC;
justify-content:space-between;
font-weight:700;
`

const Container=styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction: column;
padding:5px;
background:black;
padding-bottom:20px;
`
const Editor = ({heading,icon,color,value,onChange}) => {
    const [open,setopen]=useState(true);
    const handlechange=(editor,data,value)=>{
        onChange(value);
    }
  return (
    <Container style={open?null:{'flex-grow':0}}>
        <Heads>
            <Heading style={{fontFamily:'monospace',fontSize:'18px'}}>
            <box
                component="span"
                style={{
                    background:color,
                    display:'flex',
                    height:20,
                    width:20,
                    placeContent:'center',
                    borderRadius:5,
                    marginRight:5,
                    paddingBottom:2,
                    color:'black'
                }}>{icon}</box>      
                {heading}
            </Heading>
            <CloseFullscreenIcon
            onClick={()=>setopen(prevState=>!prevState)}
            />
        </Heads>
        <ControlledEditor className='controlled-editor' value={value} onBeforeChange={handlechange} options={{lineNumbers:true,theme:'material'}}/>
    </Container>
  )
}

export default Editor