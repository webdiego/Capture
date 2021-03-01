import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  background:#1b1b1b;
  overflow-x:hidden;
}
html{
  @media (max-width: 1700px){
    font-size:75%
  }  
   
}


button{ 
  color:white;
  font-size:1.1rem;
  cursor:pointer;
  padding:1rem 2rem;
  border:3px solid #23d997;
  background:transparent;
  transition: all 0.5s ease;

  &:hover{
    background-color:#23d999;
    color: white;
  }
}
h2{
  font-weight:lighter;
  font-size:3rem;
}
h3{
  color:white;
}
h4{
  font-size:2rem;
  font-weight:bold;
}
a{
  font-size:1.1rem;
}
span{
  font-weight: 600;
  color:#23d997
}
p{
  padding:3rem 0rem;
  color: #ccc;
  font-size:1.4rem
}
`

export default GlobalStyle