import Link from "next/link";
import "./ListingMovies.css";

const movies = [
  {
    title: "Dr. Strange in the Multiverse of madness",
    image: null,
    duration: "126 min",
    releaseDate: "6 MAY, 2022",
  },
  {
    title: "Thor Love and Thunder",
    image: "/images/movies/thor-movie.png",
    duration: "119 min",
    releaseDate: "8 JULY, 2022",
  },
  {
    title: "Black Widow",
    image: null,
    duration: "133 min",
    releaseDate: "9 JULY, 2021",
  },
  {
    title: "Shang-Chi and the lagend of the 10 rings",
    image: null,
    duration: "132 min",
    releaseDate: "3 SEPT, 2021",
  },
  {
    title: "Venom 2",
    image: "/images/movies/venom-movie.png",
    duration: "97 min",
    releaseDate: "15 OCT, 2021",
  },
  {
    title: "Spider-Man: No Way Home",
    image: "/images/movies/spiderman-movie.png",
    duration: "148 min",
    releaseDate: "17 DEC, 2021",
  },
  {
    title: "Black Panther Wakanda Forever",
    image: null,
    duration: "125 min",
    releaseDate: "11 NOV, 2022",
  },
  {
    title: "Eternals",
    image: "/images/movies/eternals-movie.png",
    duration: "147 min",
    releaseDate: "5 NOV, 2021",
  },
];

function ListingMovies() {
  return (
    <>
      <div className="dax-ko-listing-movies">
        {movies.map((movie, index) => (
          <div key={index} className="dax-ko-listing-card">
            <div
              className="dax-ko-listing-card-image"
              style={
                movie.image ? { backgroundImage: `url(${movie.image})` } : {}
              }
            ></div>
            <h4>{movie.title}</h4>
            <div className="dax-ko-listing-card-meta">
              <p>{movie.duration}</p>
              <p className="dax-ko-listing-card-meta-border">|</p>
              <p>{movie.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className={`dax-ko-listing-card-meta-more`} href={"/movies"}>
        More...
      </Link>
    </>
  );
}

export default ListingMovies;
