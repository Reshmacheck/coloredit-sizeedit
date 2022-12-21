import { useState } from "react";


const Color = ()=>{
    const [color, setColor]=useState('red');
    const [size, setSize]=useState('1rem');

    const handleColor = (e)=>{
        setColor(e.currentTarget.value)
    }
    const handleSize = (e) =>{
        setSize(e.currentTarget.value)
    }

    

return(

    <>
     <input type="range" min={1} max={5} step={1} onChange={handleSize} />
    <input type="color" id="" name="" onInput={handleColor}/>

    <h1 style={ {color: color, fontSize:`${size}rem`} }>Reshma</h1>

    </>
)
}

export default Color;


