import { useState} from "react"





export const Button = () =>{
  const Style={
    color:"red",
    margin:0,
    padding:0
  }

  const[atai,setAtai]=useState("");
  const[finalatai,setFinalatai]=useState("");
  
  const ButtonClick=(worth)=>{
      
      setAtai(atai+String(worth));
    
      
    }

    

  const Cclick=()=>{
    setAtai("");
  }


  const WaClick=()=>{
    let result=eval(atai);
    setFinalatai(atai+"="+String(result));
    setAtai("");
  }
  
  
  
    return (
      <>
      <h3 style={Style}>計算結果</h3>
        <p style={Style}>{finalatai}</p>
      
        <div className="show">
            <input type="text" id="show" disabled value={atai}/>

            
        </div>
        <div className="button">

        <button onClick={Cclick}>C</button>
            <br/>
            <button onClick={()=>ButtonClick(7)}>7</button>
            <button onClick={()=>ButtonClick(8)}>8</button>
            <button onClick={()=>ButtonClick(9)}>9</button>
            <button onClick={()=>ButtonClick("/")}>/</button>
            <br/>
            <button onClick={()=>ButtonClick(4)}>4</button>
            <button onClick={()=>ButtonClick(5)}>5</button>
            <button onClick={()=>ButtonClick(6)}>6</button>
            <button onClick={()=>ButtonClick("*")}>*</button>
            <br/>
            <button onClick={()=>ButtonClick(1)}>1</button>
            <button onClick={()=>ButtonClick(2)}>2</button>
            <button onClick={()=>ButtonClick(3)}>3</button>
            <button onClick={()=>ButtonClick("-")}>-</button>
            <br/>
            <button onClick={()=>ButtonClick(0)}>0</button>
            <button onClick={()=>ButtonClick(".")}>.</button>
            <button onClick={WaClick}>=</button>
            <button onClick={()=>ButtonClick("+")}>+</button>
        

        </div>
      </>)
      
}