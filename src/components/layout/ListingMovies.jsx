import Link from "next/link";
import "./ListingMovies.css";
import { formatDate } from "@/utils/Helpers";

function ListingMovies({ comics }) {
  return (
    <>
      <div className="dax-ko-listing-movies">
        {comics.map((comic, index) => (
          <div key={index} className="dax-ko-listing-card">
            <div
              className="dax-ko-listing-card-image"
              style={
                comic.thumbnail?.path
                  ? {
                      backgroundImage: `url(${comic.thumbnail?.path}.${comic?.thumbnail?.extension})`,
                    }
                  : {}
              }
            ></div>
            <h4>{comic.title}</h4>
            <div className="dax-ko-listing-card-meta">
              <p>{comic?.digitalId}</p>
              <p className="dax-ko-listing-card-meta-border">|</p>
              <p>
                {formatDate(
                  comic?.dates.find((item) => item.type === "onsaleDate").date
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link className={`dax-ko-listing-card-meta-more`} href={"/comic"}>
        More...
      </Link>
    </>
  );
}

export default ListingMovies;
