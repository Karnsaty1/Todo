import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [key,setKey]=useState("");
  const [value,setValue]=useState("");
  const [data, setData]=useState([]);
  const doc=document.body.style;
function Button({value,Onclick}){
  return (
    <button className="btn btn-primary" onClick={Onclick}> Remove Item </button>
    )
  }

  // function tble(){
   
  
  // }
  
  function handleChangeKey(e){
    setKey(e.target.value);
  }
function handleChangeValue(e){
  setValue(e.target.value);
}
function Onclick(){
  localStorage.setItem(key,value);
  setData([...data,{key,value}])
setKey("");
setValue("");

}

function handleClick2(){
  localStorage.clear();
  setData([]);
  setKey("");
  setValue("");
}

function RenderTable(){
const temp=[];
return data.map((item,idex)=>(
   <tr key={idex}>
          <td>{item.key}</td>
          <td>{item.value}</td>
          <td><button className='btn btn-primary' onClick={()=>{
            let newData=[...data];
           newData.splice(idex,1);
           setData(newData);

          }}>Remove</button></td>
        </tr> 
))


}
  return (
    <div >

<button className='btn btn-primary'onClick={handleClick2} style={{marginRight:"100px", marginTop:"10px",float:"right"}}> Remove ALL</button>
       <div className="container d-flex justify-content-center" style={{marginTop:"101px"}}>


<div style={{margin:"10px"}}>

        <h5 style={{margin:"10px"}}>key: </h5>
        <input type="text"  placeholder="Enter Key" value={key}  onChange={handleChangeKey} class="form-control" id="usr"/>
</div>
<div style={{margin:"10px"}}>

        <h5 style={{margin:"10px"}}>value: </h5>
        <input type="text"  placeholder="Enter Value" value={value} onChange={handleChangeValue} class="form-control" id="usr"/>
</div>

<div>

<button className='btn btn-primary' style={{marginTop:"53px"}} onClick={Onclick}> Add Element</button>
</div>


        
       </div>



<div className='container d-flex justify-content-center my-3'>

       <table class="table">
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">value</th>
     </tr>
  </thead>
  <tbody>
   {RenderTable()}
  </tbody>
</table>
</div>


    </div>




   
  )


 
}

export default App;
