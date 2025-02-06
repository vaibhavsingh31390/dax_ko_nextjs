import Image from "next/image";
import { useEffect } from "react";
import "./CharacterDetails.css";

function CharacterDetails({ data }) {
  const character = data?.data?.results[0];
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (!character) {
    return (
      <div className="min-h-[100svh] flex justify-center items-center">
        <h1 className="text-center">Character data not available.</h1>
      </div>
    );
  }

  return (
    <div className="dax-ko-hero-character-container">
      <div className="dax-ko-hero-character-image">
        <h2>#{character?.id || "N/A"}</h2>
        {character?.thumbnail?.path && character?.thumbnail?.extension ? (
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            height={100}
            width={100}
            alt={character?.name || "Character Image"}
            style={{ height: "auto", width: "50%" }}
          />
        ) : (
          <p className="error-message">Image not available</p>
        )}
        <h1>{character?.name || "Unknown Character"}</h1>
        <h3>{character?.description || "No description available"}</h3>
      </div>

      <div className="dax-ko-hero-character-meta">
        <h4>Comics ({character?.comics?.available || 0})</h4>
        <ul>
          {character?.comics?.items
            ?.slice(0, 10)
            ?.map((comic, index) => (
              <li key={index}>{comic?.name || "Unknown Comic"}</li>
            )) || <li>No comics available</li>}
        </ul>

        <h4>Series ({character?.series?.available || 0})</h4>
        <ul>
          {character?.series?.items
            ?.slice(0, 10)
            ?.map((ser, index) => (
              <li key={index}>{ser?.name || "Unknown Series"}</li>
            )) || <li>No series available</li>}
        </ul>

        <h4>Stories ({character?.stories?.available || 0})</h4>
        <ul>
          {character?.stories?.items
            ?.slice(0, 10)
            ?.map((story, index) => (
              <li key={index}>{story?.name || "Unknown Story"}</li>
            )) || <li>No stories available</li>}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
