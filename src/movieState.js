//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.JPG";
import theracer from "./img/theracer-small.png";

import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.JPG";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      description :" ' Talking about boxing is talking about respect. Try to get it for yourself, taking it away from the opponent. '",
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Magic",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Good Vibes",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      description :"",
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Adrenaline",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Max Speed",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Spectacular",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};