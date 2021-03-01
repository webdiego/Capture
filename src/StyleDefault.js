import styled from 'styled-components'
import {motion } from 'framer-motion'

//--STYLED COMPONENTS
export const ContainerStyle = styled(motion.div)`
 min-height : 90vh;
 display : flex;
 align-items: center;
 justify-content: space-between;
 padding:5rem 10rem;
 color:white;
 @media (max-width: 1350px){
   display:block;
  padding:2rem 2rem;
  text-align:center;
  } `

export  const DescriptionStyle = styled.div`
 flex:1;
 padding-right:5rem;
 z-index:2;
 h2{
  font-weight: 400;
 }
 @media (max-width: 1350px){
    padding: 0rem;
    button{
      margin:2rem 0rem 5rem 0rem;
    }
  } 
 `
 
 export const ImgStyle = styled.div`
 flex:1;
 overflow:hidden;
 img{
   width:100%;
   height:80vh;
   object-fit:cover;
   z-index:2;
 }
 `
 export const HideElement = styled.div`
  overflow:hidden;
 `
 