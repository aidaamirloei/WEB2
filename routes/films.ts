import { Router } from "express";
import{Film} from "../types";

const router   = Router();



const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160000000,
    description: "A mind-bending thriller about dreams within dreams.",
    imageUrl: "https://example.com/inception.jpg"
  },
  {
    id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11400000,
    description: "A dark comedy thriller exploring class divide.",
    imageUrl: "https://example.com/parasite.jpg"
  },
  {
    id: 3,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125,
    budget: 19000000,
    description: "A young girl enters a magical world ruled by spirits.",
    imageUrl: "https://example.com/spiritedaway.jpg"
  },
  {
    id: 4,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6000000,
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    imageUrl: "https://example.com/godfather.jpg"
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165000000,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://example.com/interstellar.jpg"
  }
];

router.get("/",(_req , res ) =>{

    return res.json(films);
})


export default router;