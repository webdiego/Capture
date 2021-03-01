import { useState } from "react";
import styled from "styled-components";
import { ContainerStyle } from "../StyleDefault";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion'

import {fade} from '../animation' 
import {useScroll} from './useScroll'


const FaqSection = () => {
  const [ element, controls]= useScroll()
  return (
    <FaqStyle variants={fade} ref={element} animate={controls} initial='hidden'>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>

      <Toggle title="How Do I Start">
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            incidunt.
          </p>
        </div>
      </Toggle>
      
      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            incidunt.
          </p>
        </div>
      </Toggle>



      <Toggle title="Different Payment">
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            incidunt.
          </p>
        </div>
      </Toggle>
 

      <Toggle title="What Products do you offer">
        <div className="answer">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            incidunt.
          </p>
        </div>
      </Toggle>

      </AnimateSharedLayout>
    </FaqStyle>
  );
};

const FaqStyle = styled(ContainerStyle)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: 400;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
