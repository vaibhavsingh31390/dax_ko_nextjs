"use client";
import { useState } from "react";
import "./ListingHeroes.css";
import Modal from "../common/modal/Modal";
import { AnimatePresence } from "framer-motion";

const heroes = [
  {
    alias: "Iron Man",
    image: "/images/heroes/iron_man.png",
    realName: "Tony Stark",
    releaseDate: "1970",
  },
  {
    alias: "Scarlet Witch",
    image: null,
    realName: "Wanda Maximoff",
    releaseDate: "1989",
  },
  {
    alias: "Thor",
    image: "/images/heroes/thor.png",
    realName: "Chris Hemsworth",
    releaseDate: "1983",
  },
  {
    alias: "Hulk",
    image: "/images/heroes/hulk.png",
    realName: "Bruce Banner",
    releaseDate: "1983",
  },
  {
    alias: "Captain Marvel",
    image: null,
    realName: "Carol Danvers",
    releaseDate: "1970",
  },
  {
    alias: "Gamora",
    image: "/images/heroes/she_hulk.png",
    realName: "Zoe Saldana",
    releaseDate: "1970",
  },
  {
    alias: "Wasp",
    image: "/images/heroes/idk.png",
    realName: "Janet Van Dyne",
    releaseDate: "1970",
  },
  {
    alias: "Spider Man",
    image: null,
    realName: "Peter Parker",
    releaseDate: "2001",
  },
];

function ListingHeroes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedHero(null);
  };

  return (
    <>
      <h1 className="dax-ko-listing-heroes-title">See Marvel Heroes</h1>
      <div className="dax-ko-listing-heroes">
        {heroes.map((hero, index) => (
          <div
            key={index}
            className="dax-ko-listing-card"
            onClick={() => handleHeroClick(hero)}
          >
            <div
              className="dax-ko-listing-card-image"
              style={
                hero.image
                  ? { backgroundImage: `url(${hero.image})` }
                  : { backgroundImage: `url("/images/placeholder.webp")` }
              }
            ></div>
            <div className="dax-ko-listing-card-meta-h">
              <h4>{hero.alias}</h4>
              <p>{hero.releaseDate}</p>
            </div>
            <div className={`dax-ko-listing-card-meta-more`}>
              <p>{hero.realName}</p>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            url={`${process.env.NEXT_PUBLIC_MARAVEL_API_HOST}v1/public/characters?apikey=${process.env.NEXT_PUBLIC_MARAVEL_API_KEY}&ts=${process.env.NEXT_PUBLIC_MARAVEL_API_TS}&hash=${process.env.NEXT_PUBLIC_MARAVEL_API_HASH}&name=${selectedHero.alias}`}
            handleModal={handleModalClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ListingHeroes;
