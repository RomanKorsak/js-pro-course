import React, {useState} from 'react';



export function AddClicker(){
    let [numOfCounters, setNumOfCounters] = useState([]);
    function add(){
        setNumOfCounters(numOfCounters.concat([0]))
    }
    return(
        <div id = 'digContainerWithButtonAndClicker'>
            <div id = "addButtonDiv">
                <button onClick = {add}>add Clicker</button>
            </div>
            <div id = 'clickerContainer'>
                {numOfCounters.map(() => {
                    return <Clicker />
                })}
            </div>
        </div>
    )
}


function Clicker(){
    let [counter, setCounter]= useState(0);

    return(
        <>  
            <div id = 'counterDiv' >
                <div id = 'outputOfClicker'>{counter}</div>
                <button className = 'clickerButtons' onClick={()=>setCounter(counter + 1)}>+</button>
                <button className = 'clickerButtons' onClick={()=>setCounter(counter = 0)}>reset</button>
                <button className = 'clickerButtons' onClick={()=>setCounter(counter - 1)}>-</button>
            </div>
        </>
    )
}
