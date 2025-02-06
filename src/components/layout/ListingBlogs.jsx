import "./ListingBlogs.css";

function ListingBlogs() {
  const blogs = [
    {
      image: null,
      desc: "Watch: Marvel Introduces Classic Mutant In New She-Hulk Clip",
    },
    {
      image: "/images/news/mutant-she-hulk-2.png",
      desc: "Marvel Actress Teases Potential Role In MCU Thunderbolts Movie",
    },
    {
      image: null,
      desc: "MCU: Alison Brie Fantasizes About Playing ‘Great’ Marvel Supervillain",
    },
    {
      image: "/images/news/mutant-she-hulk-4.png",
      desc: "Marvel Scolded Loki’s Owen Wilson Multiple Times for MCU Spoilers",
    },
    {
      image: "/images/news/mutant-she-hulk-5.png",
      desc: "Dave Filoni Defends Star Wars’ ‘Flexible’ Tone Amid Criticism",
    },
    {
      image: "/images/news/mutant-she-hulk-6.png",
      desc: "Marvel's Fantastic Four Origin Rule Raises 1 Giant MCU Question",
    },
  ];
  return (
    <>
      <div className="dax-ko-listing-blogs-title">Latest News</div>
      <div className="dax-ko-listing-blogs">
        {blogs.map((blog, index) => {
          return (
            <div className="dax-ko-listing-blogs-card" key={index}>
              <div
                className="dax-ko-listing-blogs-card-img"
                style={
                  blog.image
                    ? { backgroundImage: `url(${blog.image})` }
                    : { backgroundImage: `url("/images/placeholder.webp")` }
                }
              ></div>
              <h2 className="dax-ko-listing-blogs-card-desc">{blog.desc}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListingBlogs;
