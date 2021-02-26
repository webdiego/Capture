//IMPORT IMG
import home1 from '../img/home1.png'
//Style components
// import styled from 'styled-components'
import {ContainerStyle , DescriptionStyle, ImgStyle , HideElement} from '../StyleDefault'
const AboutSection = ()=>{
 return(
   <ContainerStyle>
     <DescriptionStyle>
       <div className="title">
         <HideElement>
           <h2>We work to make</h2>
         </HideElement>
         <HideElement>
           <h2>your <span>dreams</span> come</h2>
         </HideElement>
         <HideElement>
           <h2>true.</h2>
         </HideElement>
       </div>
       <p>Contact us for any photography or videography ideas that you hav. We have professionals with amazing skills</p>
       <button>Contact Us</button>
     </DescriptionStyle>
     <ImgStyle>
       <img src={home1} alt=""/>
     </ImgStyle>
   </ContainerStyle>
 )
}




export default AboutSection