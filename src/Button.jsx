import { useState} from "react"
import React from "react";

export const Button = () =>{

  const Style={
    color:"red",
    margin:0,
    padding:0
  }
 
  const[atai,setAtai]=useState("");
  const[finalatai,setFinalatai]=useState([""]);
  
  const ButtonClick=(worth)=>{
      setAtai(atai+String(worth));
    }
    
    const Cclick=()=>{
    setAtai("");
  }


  const WaClick=()=>{
    
    let result=eval(atai);
    setFinalatai([...finalatai,`${atai}=${String(result)}`]);
    setAtai("");
}

  const kesimasu=()=>{
    const aho=[...finalatai];
    aho.splice(0,1);
    setFinalatai([...aho]);
  }
  
  const Buttonyouso=[7,8,9,"/",4,5,6,"*",0,1,2,3,"-","."];
    return (
      <>
       <h3 style={Style}>計算結果3つまで保持可能</h3>
      {finalatai.map((final,index)=>{
       
        if(index>2){
          kesimasu();
        }
        return(
          <p key={index} style={Style}>{final}</p>
        )
      })}
     
     <div className="show">
            <input type="text" id="show" disabled value={atai}/>
      </div>
      <div className="button">

      <button onClick={Cclick}>C</button>
      {Buttonyouso.map((youso,index)=>{
          return(
            <React.Fragment key={youso}>
            {index%4===0&&<br ></br>}
            <button onClick={()=>ButtonClick(youso)}>{youso}</button>
            </React.Fragment>
          )
        })}
        <button onClick={WaClick}>=</button>
        <button onClick={()=>ButtonClick("+")}>+</button>
           
          </div>
      </>)
      
    }