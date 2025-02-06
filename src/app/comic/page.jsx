import BorderGradientSection from "./(comic_sections)/BorderGradientSection";
import ComicSection from "./(comic_sections)/ComicSection";
import HeroSection from "./(comic_sections)/HeroSection";

export const metadata = {
  title: "Comics - Marvels",
  description: "Comics - Marvels inc.",
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
