import React,{useState}from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import './App.css'
const Header = ({varia}) => {
  const[open,close]=useState(false)
  const toggle=()=>close(!open);
  return (
    <div>
        <nav className='navbar navbar-light bg-dark'>
            <a>Restaurant</a>
<Link to="/Order"><button className='btn btn-primary'>Orders <span className='badge bg-danger'>{varia.length}</span></button></Link>
        </nav>
        <div>
        <button onClick={toggle} className="btn btn-primary">Menu</button>
        <div  style={{ display:open? "none":"block"}} className="side">
         <ul><li>chicken</li>
          <li>mutton</li>
          <li>pizza</li>
          <li>biryani</li>
          <li>pasta</li>
          </ul>
        </div>
        </div>
    </div>
  )
}
const mapStateToProps=state=>
(
  {
varia:state
  }
)

export default connect(mapStateToProps) (Header)