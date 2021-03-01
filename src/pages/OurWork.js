//Style
import styled from "styled-components";
import { Link } from "react-router-dom";

//IMG
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.JPG";
//animation
import { motion } from "framer-motion";
import { pageAnimation , fade , photoAnimation ,lineAnimation , slider , sliderContainer } from "../animation";
//components
import {useScroll} from '../components/useScroll'

const OurWork = () => {
  const [ element, controls]= useScroll()
  const [ element2, controls2]= useScroll()
  return (
    <WorkStyle variants={pageAnimation} initial="hidden" animate="show" style={{background: "white"}}>
      <motion.div variants={sliderContainer} >

      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>

      <MovieStyle >
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
          <motion.img  variants={photoAnimation} src={athlete} alt="img" />
          </Hide>
        </Link>
      </MovieStyle>

      <MovieStyle variants={fade} ref={element} animate={controls} initial='hidden'>
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="img" />
        </Link>
      </MovieStyle>

      <MovieStyle variants={fade} ref={element2} animate={controls2} initial='hidden'>
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="img" />
        </Link>
      </MovieStyle>
   

    </WorkStyle>
  );
};
const WorkStyle = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1350px){
     padding: 2rem 2rem;
  } 
`;
const MovieStyle = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
overflow:hidden;
`
//Frame Animation
const Frame1 = styled(motion.div)`
position:fixed;
left:0;
top:10%;
width:100%;
height:100vh;
background:#fffebf;
z-index:2;

`
const Frame2 = styled(Frame1)`
background:#ff8efb;
`;
const Frame3 = styled(Frame1)`
background:#8ed2ff;
`
const Frame4 = styled(Frame1)`
background:#8effa0;
`;
export default OurWork;
