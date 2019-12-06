import React, { useContext } from 'react';
import { ShareColor, UPDATE_COL } from './Col';

function Btns(){
    const {dispatch}=useContext(ShareColor);
    return(
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COL,color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COL,color:"yellow"})}}>黄色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COL,color:"blue"})}}>蓝色</button>
        </div>
    )
}
export default Btns;