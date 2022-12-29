import React,{useState} from "react";
import './App.css';
export default function App() {
  const [list1, setList1] = useState(["Subhadra","Parida","Odisha","Sarjapura"])
  const [list2,setList2] = useState(["Manory","Jimik","Manipur","Bangalore"])
  const [list3,setList3] = useState(["Muskan","Valmiki", "Pune", "Pune"])
  const [maindata,setMaindata] = useState([])

  return(
    <div id="container">
      <button onClick={()=>{
        setMaindata(list1)
      }}>BUTTON1</button>
     
    <button onClick={()=>{
        setMaindata(list2)
      }}>BUTTON2</button>
      

    <button onClick={()=>{
        setMaindata(list3)
      }}>BUTTON3</button>
      {
        maindata.map((Event)=>{
          return(
            <h1 id="output">{Event}</h1>
          )
        })
      }
    </div>
  )

}
