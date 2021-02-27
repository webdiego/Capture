//IMPORT IMG
import home1 from "../img/home1.png";
//Style components
import {
  ContainerStyle,
  DescriptionStyle,
  ImgStyle,
  HideElement,
} from "../StyleDefault";
//Framer Motion
import { motion } from "framer-motion";
import {titleAnimation , fade , photoAnimation} from '../animation'

const AboutSection = () => {
  
  return (
    <ContainerStyle>
      <DescriptionStyle>
        <motion.div >
          <HideElement>
            <motion.h2 variants={titleAnimation} >We work to make</motion.h2>
          </HideElement>
          <HideElement>
            <motion.h2 variants={titleAnimation}  >
              your <span>dreams</span> come
            </motion.h2>
          </HideElement>
          <HideElement>
            <motion.h2 variants={titleAnimation} >true.</motion.h2>
          </HideElement>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you hav. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </DescriptionStyle>
      <ImgStyle>
        <motion.img variants={photoAnimation} src={home1} alt="" />
      </ImgStyle>
    </ContainerStyle>
  );
};

export default AboutSection;
