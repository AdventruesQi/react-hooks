import React, { useState,useContext,createContext} from 'react';

const Ct=createContext();
function ExamplegetContext(){
    let getValue=useContext(Ct);
    return (
    <h3>{getValue}</h3>
    )
}

function ExampleUseContext(){

    const [count,setCount]=useState(0);
    return (
        <div>
           <p>这个讲的值组件间的传值:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <Ct.Provider value={count}>
                <ExamplegetContext/>
            </Ct.Provider>
        </div>
    );
}
export default ExampleUseContext;