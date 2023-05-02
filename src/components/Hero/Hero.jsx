import { useRef, useState } from "react";
import classes from "./Hero.module.css";
import Item from "./Item";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import HorizontalList from "./Item";

const arrayofObjects = [
  {
    id: 1,
    name: "John",
    age: 24,
    imageSrc: "/dev1.jpg",
  },
  {
    id: 2,
    name: "Peter",
    age: 32,
    imageSrc: "/dev2.jpg",
  },
  {
    id: 3,
    name: "Jane",
    age: 20,
    imageSrc: "/dev3.jpg",
  },
  {
    id: 4,
    name: "Snoop",
    age: 20,
    imageSrc: "/dev4.jpg",
  },
  {
    id: 5,
    name: "Eminem",
    age: 20,
    imageSrc: "/dev5.jpg",
  },
];

const Hero = () => {
  const slidingContainerRef = useRef(null);

  const handleScrollToLeft = () => {
    const container = document.getElementById('horizontal_container');
    container.scrollBy({
        left: -200,
        behavior: "smooth",
    })
  };
  const handleScrollToRight = () => {
    const container = document.getElementById('horizontal_container');
    container.scrollBy({
        left: 200,
        behavior: "smooth",
    })
  };


  return (
    <div className={classes.container}>
    <AiOutlineArrowLeft
        className={classes.arrowLeft}
        size={30}
        onClick={handleScrollToLeft}
        // opacity={scrollPosition === 0 ? 0 : 1} 
      />
      <div
        className={classes["horizontal_list_container"]}
        id= {'horizontal_container'}
        ref={slidingContainerRef}
      >
        {arrayofObjects.map((item) => {
          return (
            <div
                key={item.id}
              className={classes.itemContainer}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <AiOutlineArrowRight
        className={classes.arrowRight}
        size={30}
        onClick={handleScrollToRight}
        // opacity={scrollPosition === 400 ? 0 : 1}
      />
    </div>
  );
};

export default Hero;
