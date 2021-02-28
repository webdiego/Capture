import styled from 'styled-components'

//--STYLED COMPONENTS
export const ContainerStyle = styled.div`
 min-height : 90vh;
 display : flex;
 align-items: center;
 justify-content: space-between;
 padding:5rem 10rem;
 color:white;`

export  const DescriptionStyle = styled.div`
 flex:1;
 padding-right:5rem;
 z-index:2;
 h2{
  font-weight: 400;
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
 