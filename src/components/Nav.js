import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = ()=>{
  return(
    <NavStyle>
      <h1><Link id="logo" to="/">Capture</Link></h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 10rem;
background-color:#282828;
position:sticky;
top:0;
z-index:5;
a{
  color:white;
  text-decoration:none;
}
ul{
  display:flex;
  list-style:none;
  
}
li{
  padding-left:3rem;
  position:relative;
}
#logo{
  font-size:1.2rem;
  font-weight:400;
}

@media (max-width: 1350px){
    flex-direction:column;
     padding:2rem 0 2rem 0rem;
    align-self:space-between;
    min-height:19vh;

     li{
       padding-right:2rem;
     }
     #logo{
       font-size:1.8rem;
       font-weight:bold;
      
     }
  } 
` 

export default Nav;