import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom' //Check history path
import {MovieState} from '../movieState'
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = ()=>{
  const history = useHistory()
  const url = history.location.pathname //pathname where we are located
  const [movies , setMovies] = useState(MovieState) //All the movie
  const [movie, setMovie] = useState(null) //single movie

  //UseEffect
  useEffect(()=>{
    //we took all the movies and we filter out
    const currentMovie = movies.filter((movie)=> movie.url === url)
    setMovie(currentMovie[0])
  },[movies,url])//we update everytime that the movies or url is update

  return(
    <>
    { movie && ( 
      //! {Means that only when the movie is available render that component , so if the movie is not available is not going to show anything}

   <Details  variants={pageAnimation} initial="hidden" animate="show" exit="exit">
     <HeadLine>
      <h2> {movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.mainImg} alt="main img"/>
     </HeadLine>
     <AwardsStyle>
       {movie.awards.map((award)=> <Award title={award.title} description={award.description} key={award.title} /> )}
     </AwardsStyle>
     <SecondImg>
      <img src={movie.secondaryImg} alt="img 2"/>
     </SecondImg>
   </Details>

    )}

   </>
  )
}

const Details = styled(motion.div)`
 color:white;
 `
const HeadLine = styled.div` 
 min-height: 90vh;
 padding:20vh;
 position:relative;
 h2{
   position:absolute;
   top:10%;
   left:50%;
   transform:translate(-50%,-10%);

 }
 p{
   text-align:center;
 }

 img{
   
   width:100%;
   height:70vh;
   object-fit:cover;
 }
 `
 const AwardsStyle = styled.div`
  min-height:70vh;
  display:flex;
  margin:5rem 10rem;
  justify-content:space-around;
 `
const AwardStyle = styled.div`
 padding:5rem;
h3{
  font-size:2rem
}
.line{
  width:100%;
  background: #23d997;
  height:.5rem;
  margin:1rem 0rem;
}
p{
  padding:2rem 0rem;
}
`
const SecondImg= styled.div`
 min-height:50vh;
 img{
   width:100%;
   height:70vh;
   object-fit:cover;
 }
`
//Award Components
 const Award = ({title,description})=>{
   return(
     <AwardStyle>
       <h3>{title}</h3>
       <div className="line"></div>
       <p>{description}</p>
     </AwardStyle>
   )
 }
export default MovieDetail