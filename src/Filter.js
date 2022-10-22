import React,{useState} from 'react'
import { connect } from 'react-redux'
import{add} from './action'
const Filter = ({add}) => {
  
   
  const[search,setsearch]=useState('')
  const[value,setvalue]=useState([])
const submitHandler=e=>
{
  e.preventDefault();
  fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=e3d4ab8b&app_key=1cb6e4175c59ccdd9cd6863877ae3aba`).then(
    response=>response.json()
  ).then(date=>setvalue(date.hits))
}
const Handler=(label,image)=>
{ 
add(label,image)
}

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}></input>
          <input type="submit" value="search"></input>
        </form>
        </center><br/><br/>
        <div className='row'>
        {value.map((item)=><div className="col-md-4"><div class="card" style={{width:300}}>
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

export default connect(mapStateToProps,{add})(Filter)