import HeroSection from "./(movie_sections)/HeroSection";
import BorderGradientSection from "./(movie_sections)/BorderGradientSection";
import ComicSection from "./(movie_sections)/ComicSection";

export const metadata = {
  title: "Movies - Marvels",
  description: "Movies - Marvels inc.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BorderGradientSection />
      <div className="bg-correction">
        <ComicSection />
      </div>
    </>
  );
}
