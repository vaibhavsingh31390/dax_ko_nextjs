import HeroSection from "./(home_sections)/HeroSection";
import BorderGradientSection from "./(home_sections)/BorderGradientSection";
import MovieListingsSection from "./(home_sections)/MovieListingsSection";
import HeroListingsSection from "./(home_sections)/HeroListingsSection";
import BlogsSection from "./(home_sections)/BlogsSection";
import BannerSection from "./(home_sections)/BannerSection";
import { generateKeys } from "@/utils/Helpers";

export async function getComics() {
  const startDate = "2022-01-01";
  const endDate = new Date().toISOString().split("T")[0];
  const { timestamp, hash } = generateKeys(
    process.env.NEXT_PUBLIC_MARAVEL_API_PRIVATE_KEY,
    process.env.NEXT_PUBLIC_MARAVEL_API_PUBLIC_KEY
  );
  const url = `${
    process.env.NEXT_PUBLIC_MARAVEL_API_HOST
  }v1/public/characters/1009491/comics?apikey=${
    process.env.NEXT_PUBLIC_MARAVEL_API_PUBLIC_KEY
  }&ts=${timestamp}&hash=${hash}&&limit=${4}&offset=${0}&dateRange=${startDate},${endDate}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const comics = data.data.results || [];
    return {
      props: {
        comics,
      },
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return {
      props: {
        comics: [],
      },
    };
  }
}

export default async function Home() {
  const {
    props: { comics },
  } = await getComics();
  return (
    <>
      <HeroSection />
      <BorderGradientSection />
      <div className="bg-correction">
        <MovieListingsSection comics={comics} />
        <HeroListingsSection />
        <BlogsSection />
        <BannerSection />
      </div>
    </>
  );
}
