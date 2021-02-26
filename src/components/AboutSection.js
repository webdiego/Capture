//IMPORT IMG
import home1 from '../img/home1.png'
//Style components
import styled from 'styled-components'

const AboutSection = ()=>{
 return(
   <AboutStyle>
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
   </AboutStyle>
 )
}

//--STYLED COMPONENTS
const AboutStyle = styled.div`
 min-height : 90vh;
 display : flex;
 align-items: center;
 justify-content: space-between;
 padding:5rem 10rem;
 color:white;`

 const DescriptionStyle = styled.div`
 flex:1;
 padding-right:5rem;
 h2{
  font-weight: 400;
 }
 `
 
 const ImgStyle = styled.div`
 flex:1;
 overflow:hidden;
 img{
   width:100%;
   height:80vh;
   object-fit:cover;
 }
 `
 const HideElement = styled.div`
  overflow:hidden;
 `
 


export default AboutSection