import React, { useState, useEffect } from 'react';






const CountUpTimer = () => {
  const [second,setSecond]=useState(0);
const [active,setActive]=useState(false);
  useEffect(()=>{
    let interval=null;
    if(active){
      interval=setInterval(()=>{
        setSecond(second+1);
      },1000)
    }else if(!active&&second!==0){
        clearInterval(interval);
    }
    return()=>clearInterval(interval);
  },[active,second])

   const start=()=>{
    setActive(true);
   }

  const stopTime=()=>{
    setActive(false);
   }
  
   const resetTime=()=>{
    
    setSecond(0);
   }


  return (
    <div>
      <h1>Count time</h1>
      <p>
        <span>{Math.floor(second/60)<10 ? '0'+Math.floor(second/60) : Math.floor(second/60)}</span>:
        <span>{second  < 10 ? '0'+second : second% 60 }</span>
      </p>
      
      <button onClick={start}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
};

export default CountUpTimer;
