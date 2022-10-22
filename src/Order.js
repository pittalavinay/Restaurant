import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { remove } from './action'
const Order = ({vari,remove}) => {
  return (
    <div>
         <nav className='navbar navbar-light bg-dark'>
      <Link to='/'><button className='btn btn-primary'>Home</button></Link>
            <a>Restaurant</a>
<button className='btn btn-primary'>Orders <span className='badge bg-danger'>{vari.length}</span></button>
        </nav><br/><br/>
   <div className='row'>
        {vari.map((item)=><div className="col-md-4"><div class="card" style={{width:300}}>
  <img class="card-img-top" src={item.image} alt="Cardimage"/>
  <div class="card-body">
    <h4 class="card-title">{item.value}</h4>
    <button className="btn btn-danger" onClick={()=>remove(item)}>remove</button>
  </div>
</div>
</div>)}
</div>  

    </div>
  )
}
const mapStateToProps=(state)=>({
  vari:state
})
export default connect(mapStateToProps,{remove})(Order)