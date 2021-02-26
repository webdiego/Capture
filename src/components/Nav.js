import styled from 'styled-components'

const Nav = ()=>{
  return(
    <NavStyle>
      <h1><a id="logo"href="#">Capture</a></h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
` 

export default Nav;