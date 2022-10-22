import React,{useEffect,useState}from 'react'
import './App.css'
import {connect} from 'react-redux'
import {add} from './action'
const Card = ({variable,add}) => {
  const[data,setdata]=useState([])
   

useEffect(()=>{
  fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e3d4ab8b&app_key=1cb6e4175c59ccdd9cd6863877ae3aba').then(
      response=>response.json()
  ).then(
     json=>setdata(json.hits)
  )
},[])
const Handler=(label,image)=>
{ 
add(label,image)
}
  return (
    <div>
      <div className="row">
      {data.map(item=><div className="col-md-4"><div class="card" style={{width:300}}>
  <img class="card-img-top" src={item.recipe.image} alt="Cardimage"/>
  <div class="card-body">
    <h4 class="card-title">{item.recipe.label}</h4>
    <button onClick={()=>Handler(item.recipe.label,item.recipe.image)}>order</button>
  </div>
</div>
</div>)}

</div>
    </div>
  )
}
const mapStateToProps=state=>({
  variable:state
})
export default connect(mapStateToProps,{add}) (Card)