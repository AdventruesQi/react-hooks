import React, { useEffect,useState} from 'react';
import{BrowserRouter as Router,Route,Link} from "react-router-dom";

function Index(){
    useEffect(()=>{
        console.log("老弟你来了~！");
        return ()=>{
            console.log("老弟你走了啊");
        }
    },[])
    return <div>我是首页</div>
}
function List(){
    useEffect(()=>{
        console.log("++++++++++！");
        return ()=>{
            console.log("------------");
        };
    });
    return <div>我是列表页</div>
}


function ExampleEffect(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`useEffect ${count}`);
        return ()=>{
            console.log(`我就是要走的时候需要执行的${count}值。`);
        }
    },[]);
    return (
        <div>
            <p>点击了多{count}</p>
            <button onClick={()=>{setCount(count+1)}}>点击我</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/List">列表页</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/List" component={List}></Route>         
            </Router>

        </div>
    )
}
export default ExampleEffect