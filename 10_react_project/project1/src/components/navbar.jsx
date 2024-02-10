import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () =>{
  // const navcomponets = [
  //   {to:'/Menu', name: Menu},
  //   {to:'/Location', name: Location},
  //   {to:'/About', name: About},
  //   {to:'/Conatct', name: Contact}
  // ];
  return (
   
      <div>
        <nav className='container'>
          <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
          </div>
        <ul>
          {/* {navcomponets.map((comp)=>(
            <li>
              <NavLink to={comp.to} >{comp.name}</NavLink>
            </li>
          ))} */}
          <li><NavLink to="/Menu" >Menu</NavLink></li>
          <li><NavLink to="/Location" exact activeClassName="active">Location</NavLink></li>
          <li><NavLink to="/About" exact activeClassName="active">About</NavLink></li>
          <li><NavLink to="/Contact" exact activeClassName="active">Contact</NavLink></li>
          
        </ul>
        <button>Login</button>
        </nav>
      </div>
  )
}

export default Navbar
