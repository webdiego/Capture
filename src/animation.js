export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      when:"beforeChildren",
      staggerChildren :0.25,// the step animation for every children , so every 0.25s every children make the animation
    },
  },
  exit:{
    opacity: 0,
    transition: {
      duration: .5,
      
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
export const lineAnimation = {
  hidden:{
   width: '0%'
  },
  show:{
    width: '100%',
    transition:{duration: 0.85}
  }
}

export const slider = {
  hidden:{
   x: '-130%',
   skew:'45deg'
  },
  show:{
    x: '100%',
    skew:'0deg',
    transition : {ease:'easeOut', duration:1}
  }
}
export const sliderContainer ={
  hidden:{opacity: 1},
  show:{opacity:1 , transition:{staggerChildren: 0.1, ease:'easeOut' }}
}
