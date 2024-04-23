import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
function Home() {
  const theme = useContext(ThemeContext);
  const [info, setInfo] = useState([]);
  fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
    .then((res) => res.json())
    .then((data) => {
      setInfo(data.data);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <div className="w-3/4 mx-auto mt-20 ">
        <main className="main flex items-center justify-between">
          <div className="info w-[496px]">
            <h1
              className={`max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl  mb-8 ${
                theme.theme == "light" ? "text-[#394E6A]" : "text-white"
              }`}
            >
              We are changing the way people shop
            </h1>
            <p className="mt-8 mb-8 max-w-xl text-lg leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link
              to={"/products"}
              className={`btn btn-${
                theme.theme == "light" ? "primary" : "secondary"
              } uppercase`}
            >
              our products
            </Link>
          </div>
          <div className="slider w-[464px]">
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              <div className="carousel-item">
                <img
                  width={"320px"}
                  height={"416px"}
                  src={img1}
                  className="rounded-box object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  width={"320px"}
                  height={"416px"}
                  src={img2}
                  className="rounded-box object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  width={"320px"}
                  height={"416px"}
                  src={img3}
                  className="rounded-box object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  width={"320px"}
                  height={"416px"}
                  src={img4}
                  className="rounded-box object-cover"
                />
              </div>
            </div>
          </div>
        </main>
        <h3 className="text-3xl font-medium tracking-wider capitalize mt-16 mb-2">
          Featured Products
        </h3>
        <div className="line w-3/3 h-[1px] bg-black mb-16"></div>
        <footer className="footir w-3-4 mx-auto">
          <div className="carts flex justify-between ">
            {info.map((el, index) => {
              return (
                <div
                  key={index}
                  className="cart w-[352px] h-[332px] shadow-xl "
                >
                  <img
                    className="rounded-xl h-[200px] w-[320px] object-cover ml-4 "
                    src={el.attributes.image}
                    alt=""
                  />
                  <h2 className="text-center uppercase mt-10 capitalize tracking-wider text-xl">
                    {el.attributes.title}
                  </h2>
                  <span className="text-center block text-[#4C3AA1]">
                    ${el.attributes.price}
                  </span>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
