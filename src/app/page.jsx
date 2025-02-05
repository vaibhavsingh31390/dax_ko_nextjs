import HeroSection from "./(home_sections)/HeroSection";
import BorderGradientSection from "./(home_sections)/BorderGradientSection";
import MovieListingsSection from "./(home_sections)/MovieListingsSection";
import HeroListingsSection from "./(home_sections)/HeroListingsSection";
import BlogsSection from "./(home_sections)/BlogsSection";
import BannerSection from "./(home_sections)/BannerSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BorderGradientSection />
      <div className="bg-correction">
        <MovieListingsSection />
        <HeroListingsSection />
        <BlogsSection />
        <BannerSection />
      </div>
    </>
  );
}
