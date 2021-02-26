import styled from 'styled-components'
import {ContainerStyle} from '../StyleDefault'

const FaqSection = ()=>{

  return(
    <FaqStyle>
     <h2>Any Question <span>FAQ</span></h2>

     <div className="question">
       <h4>How Do I Start</h4>
       <div className="answer">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, incidunt.</p>
       </div>
       <div className="faq-line"></div>
     </div>

     <div className="question">
       <h4>Daily Schedule</h4>
       <div className="answer">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, incidunt.</p>
       </div>
       <div className="faq-line"></div>

     </div>

     <div className="question">
       <h4>Different Payment</h4>
       <div className="answer">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, incidunt.</p>
       </div>
       <div className="faq-line"></div>

     </div>

     <div className="question">
       <h4>What Products do you offer</h4>
       <div className="answer">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, incidunt.</p>
       </div>
       <div className="faq-line"></div>

     </div>
    </FaqStyle>
  )
 }

 const FaqStyle = styled(ContainerStyle)`
   display: block;
   span{
     display:block;
   }
   h2{
     padding-bottom:2rem;
     font-weight: 400;
   }
   .faq-line{
     background:#cccccc;
     height:.2rem;
     margin:2rem 0rem;
     width:100%
   }
   .question{
     padding:3rem 0rem;
     cursor:pointer;

   }
   p{
     padding:1rem 0rem
   }

 ` 
 
 export default FaqSection