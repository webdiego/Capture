export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .75,
      when:"beforeChildren",
      staggerChildren :0.25,
    },
  },
  exit:{
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
      
    },
   
}
}
//Animation title
export const titleAnimation={
  hidden:{ y:200},
  show: {
    y:0,
    transition: {duration : .75 , ease:"easeOut"}
  }
}
//Animation button
export const fade = {
  hidden:{ opacity:0},
  show: {
    opacity:1,
    transition: {duration : .75 , ease:"easeOut"}
  }
}

export const photoAnimation ={
  hidden:{ scale:1.5, opacity:0},
  show: {
    opacity:1,
    scale: 1,
    transition: {duration : .75 , ease:"easeOut"}
  }
}