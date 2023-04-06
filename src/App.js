import React,{useState} from "react";
import "./style.css";

export default function App() {

  let [cityNameTemp,setcityNameTemp] = useState({Cityname:''})
  let [Cityarr,setCityarr] = useState([])
  let [Inpval,setInpval] = useState('')

  function Collectinputs(e)
  {
    // console.log(e.target.value)
    let key=e.target.name
    setcityNameTemp({...cityNameTemp,[key]:e.target.value})
  }

  function addtoarray(e)
  {
    e.preventDefault();
    console.log(cityNameTemp)
    if(Cityarr.length<5)
    {
      setCityarr([...Cityarr,cityNameTemp])
      console.log(Cityarr)
    }
    else
    {
      let temparr=Cityarr;
      temparr.splice(0,1);
      setCityarr([...Cityarr,cityNameTemp])
      console.log(Cityarr)

    }
    setcityNameTemp({Cityname:''})

  }

  function Display()
  {
    console.log(Cityarr)
  }

  return (
    <div>
      <form action="" onSubmit={addtoarray}>
      <input type="text" name="Cityname" placeholder="City Name" value={cityNameTemp.Cityname} id="inpbox" onChange={Collectinputs}/>
      <button type="submit">Add+</button>
      </form>
      <button onClick={Display}>Search</button>
    </div>
  );
}
