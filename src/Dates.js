import { useEffect, useState } from "react";

const Dates=()=>{
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [Range,setRange]=useState([]);

    const d=()=>{
    if (!start || !end)
         return;
    else
    getRange();
     }


     async function getRange(){
      try {
         // const response=await fetch("https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&x=on&mf=on&ss=on&mod=on&lg=he&s=on&start=2023-06-25&end=2023-08-06")
          const response = await fetch("https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&x=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}");
          const data = await response .json()
         setRange(data)
       } 
      catch {
         console.log("failed to fetch");
     }
     return(
      <>
      {Range.map(i=>{
        return(
      <div>
       {i.title}
       {i.start}
       {i.className}
       {i.parashat}
       {i.description}
      </div>
)
        })}  
      
      
      
      </>
     )
  }   


   useEffect(()=>{
    getRange();
  },[])
   



return (
        <div className="dates">
          <chekbox text='LL'></chekbox>
          <input placeholder="תאריך התחלה" onChange={(e) => setStart(e.target.value)}/>
          <input   placeholder="תאריך סיום" onChange={(e) => setEnd(e.target.value)}/>
          <button onClick={()=>d()}>היכנס</button>
        </div>
 )
}
export default Dates;