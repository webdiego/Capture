import { motion } from "framer-motion";
import { pageAnimation  , titleAnimation } from "../animation";
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{background: "white"}}
    >
      <TitleStyle>
        <Hide>
          <motion.div variants={titleAnimation}>Get in touch.</motion.div>
        </Hide>
      </TitleStyle>

      <div>
        <Hide>
        <Social variants={titleAnimation}>
       <Circle/>
         <h2>Send Us A Email</h2>
        </Social>
        </Hide>

        <Hide>
        <Social variants={titleAnimation}>
        <Circle/>
         <h2>Follow Us on Instagram</h2>
        </Social>
        </Hide>

        <Hide>
        <Social variants={titleAnimation}>
       <Circle/>
         <h2>Follow Us on Facebbok</h2>
        </Social>
        </Hide>

     
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
padding:5rem 10rem;
color: #353535;
min-height:90vh;
font-size:2rem;
@media (max-width: 1350px){
    padding: 3rem;
  } 

`
const TitleStyle = styled.div`
margin-bottom:4rem;
color:black;
@media (max-width: 1350px){
  margin-top:5rem;
  } 
`

const Hide = styled.div`
overflow:hidden;
`

const Circle = styled.div`
width:3rem;
height:3rem;
border-radius:50%;
background-color:black;
`
const Social = styled(motion.div)`
display:flex;
align-items:center; 
h2{
  margin:2rem;
  @media (max-width: 1350px){
  
    font-size:2rem;
  }
}
`
export default ContactUs;
