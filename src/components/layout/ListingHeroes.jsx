"use client";
import "./ListingHeroes.css";

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
    realName: "Brucr Banner",
    releaseDate: "1983",
  },
  {
    alias: "Captin Marvel",
    image: null,
    realName: "Carol Danvers",
    releaseDate: "1970",
  },
  {
    alias: "Gmora",
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
  const handleHeroes = () => {
    console.log("yes");
  };
  return (
    <>
      <h1 className="dax-ko-listing-heroes-title">See Marvel Heros</h1>
      <div className="dax-ko-listing-heroes">
        {heroes.map((movie, index) => (
          <div
            key={index}
            className="dax-ko-listing-card"
            onClick={handleHeroes}
          >
            <div
              className="dax-ko-listing-card-image"
              style={
                movie.image ? { backgroundImage: `url(${movie.image})` } : {}
              }
            ></div>
            <div className="dax-ko-listing-card-meta-h">
              <h4>{movie.alias}</h4>
              <p>{movie.releaseDate}</p>
            </div>
            <div className={`dax-ko-listing-card-meta-more`}>
              <p>{movie.realName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListingHeroes;
