
import Cards from "../../components/common/Cards/Cards";
import "./Home.module.css";
import Carouselz from "../../components/common/Carousel/Carousel";
import Blog from "../../components/common/Blog/Blog";

const Home = () => {
  let items = [
    {
      name: "spiderman-andrew",
      url: "https://assets.telegraphindia.com/telegraph/2022/Aug/1661588323_spider-man1.jpg",
    },
    {
      name: "spiderman-tom",
      url: "https://media1.popsugar-assets.com/files/thumbor/ATs6IZLqJxwCk5aYHY2G3YweGUw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/12/15/459/n/48559432/tmp_H4uhSO_852442174e6599ae_MCDSPMA_SP025.jpg",
    },
    {
      name: "spiderman-tobey",
      url: "https://cdn.mos.cms.futurecdn.net/VvDTyFtJi7m5H6b2fhMzud-970-80.jpeg.webp",
    },
    {
      name: "spiderman-together",
      url: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/marvel-is-reportedly-not-casting-tobey-maguire-in-spider-man-4-001.jpg",
    },
  ];
  return (
    <div className="row-home">
     
        <Carouselz></Carouselz>
        <div className="high">
          <h2>This Week's Highlights</h2>
        </div>
        <div className="flex-container">
          {items.map((item, index) => {
            return <Cards key={index} imageUrl={item.url} title={item.name} />;
          })}
        </div>
        <div className="high2">
          <h2>Blogs</h2>
        </div>
        <Blog></Blog>
      
    </div>
  );
};

export default Home;
