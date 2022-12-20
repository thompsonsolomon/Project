import image from "../image/video.m4v"
import image1 from "../image/kids.png"
import image2 from "../image/mobile.jpg"

export const JomboData = [ 
    {
        id: 1,
        title: "Enjoy on your TV.",
        subTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        video: image ,
        alt: "Tiger King on Netflix",
        direction: "row"
      },
      {
        id: 2,
        title: "Download your programmes to watch on the go.",
        subTitle: "Save your data and watch all your favourites offline.",
        image:image1,
        alt: "Watch on mobile",
        direction: "row-reverse"
      },
      {
        id: 3,
        title: "Watch everywhere.",
        subTitle: "Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.",
        image: image2 ,
        alt: "Money Heist on Netflix",
        direction: "row"
      }
]