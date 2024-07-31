import { createContext, useState } from "react";
export const dc=createContext();


const DP=({children})=>{
    const[html,setHtml]=useState('');
    const[css,setCss]=useState('');
    const[js,setJs]=useState('');
    return(
        <dc.Provider
            value={{
                html,setHtml,css,setCss,js,setJs
            }}
        >{children}
        </dc.Provider>
    )
}
export default DP;