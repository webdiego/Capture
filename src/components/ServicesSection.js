//Import ICONS
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
//Img
import home2 from '../img/home2.png'
//Style Components
import {ContainerStyle , DescriptionStyle, ImgStyle } from '../StyleDefault'
import styled from 'styled-components'


const ServicesSection = ()=>{
  
  return(
    <ServicesStyle >
      <DescriptionStyle>
        <h2>High <span>quality</span> services.</h2>
        <CardsStyle>
          
          <CardStyle>
            <div className="icon">
             <img src={teamwork} alt="icon"/>
             <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus.</p>
          </CardStyle>

          <CardStyle>
            <div className="icon">
             <img src={diaphragm} alt="icon"/>
             <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus.</p>
          </CardStyle>

          <CardStyle>
            <div className="icon">
             <img src={money} alt="icon"/>
             <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus.</p>
          </CardStyle>

          <CardStyle>
            <div className="icon">
             <img src={clock} alt="icon"/>
             <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus.</p>
          </CardStyle>

        </CardsStyle>
      </DescriptionStyle>
      <ImgStyle>
        <img src={home2} alt="img"/>
      </ImgStyle>
    </ServicesStyle>
  )
 }
 
 //We took from container style all the property and we edit here as new style component
 const ServicesStyle = styled(ContainerStyle)`
  h2{
    padding-bottom:5rem;
  }
  p{
    width:70%;
    padding: 2rem 0rem 4rem 0rem;

  }
  span{
   color:#23d997;
 }
 `
 const CardsStyle = styled.div`
  display:flex;
  flex-wrap:wrap;
  @media (max-width: 1350px){
    justify-content:center;
  } 
 ` 
 const CardStyle = styled.div`
  margin-right:2rem; 
 flex-basis:15rem;
 .icon{
   display:flex;
   align-items:center;
 }
 h3{
   margin-left:1rem;
   background:white;
   color:black;
   padding:1rem;
   border-radius:5px;
 }
 p{
   font-size:1rem;
 }
 
 ` 
 export default ServicesSection