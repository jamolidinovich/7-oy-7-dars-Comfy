import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { AiFillAppstore } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
function Products() {
  const theme = useContext(ThemeContext);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [button1Active, setButton1Active] = useState(false);
  const [button2Active, setButton2Active] = useState(false);

  const handleToggle1 = () => {
    setButton1Active(!button1Active);
    setButton2Active(false); // Button1 bosilganda Button2ni bekor qilamiz
  };

  const handleToggle2 = () => {
    setButton2Active(!button2Active);
    setButton1Active(false); // Button2 bosilganda Button1ni bekor qilamiz
  };
  return (
    <div className="w-3/4 mx-auto">
      <div className="filter p-4 bg-primary-content mt-20 rounded-lg">
        <div className="filter-top flex justify-between gap-3 ">
          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search cursor-pointer">Search Products</label>
            <input
              type="search"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div className="field flex flex-col gap-1 w-1/4 ">
            <label htmlFor="search cursor-pointer">Select Category</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="field flex flex-col gap-1 w-1/4 ">
            <label htmlFor="search cursor-pointer">Select Company</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="field flex flex-col gap-1 w-1/4 ">
            <label htmlFor="search cursor-pointer">Sort By</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="filter-bottom h-[116px] flex justify-between gap-3 mt-8">
          <div className="range-block w-1/4 mt-16">
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-primary"
            />
            <div className="shipping absolute ml-[400px] mt-[-40px] w-1/4  ">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className={`checkbox ${
                      theme.theme == "light"
                        ? " checkbox-primary"
                        : " checkbox-secondary"
                    }`}
                  />
                </label>
              </div>
            </div>

            <div className="search absolute  mr-[200px]  ">
              <button className="btn mt-[-35px] w-[244px] btn-sm  absolute ml-[580px] btn-primary">
                SEARCH
              </button>
            </div>
            <div className="reset absolute mt-[-35px] ml-[850px]  ">
              <button className="btn btn-sm w-[244px] btn-secondary">
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center ">
          <h3 className="capitalize text-lg mt-10">{`${featured.length} products`}</h3>
          <button
            onClick={handleToggle1}
            // style={{ backgroundColor: button1Active ? "green" : "green" }}
            className="w-[35px] ml-[980px] mr-3 mt-10 h-[35px] rounded-full bg-primary"
          >
            <AiFillAppstore
              color="white"
              className="ml-[5px] "
              fontSize={"25px"}
            />
          </button>
          <button
            onClick={handleToggle2}
            // style={{ backgroundColor: button2Active ? "green" : "grey" }}
            className="mt-10"
            fontSize={"25px"}
          >
            <FaBars />
          </button>
        </div>
        <hr className="mt-10" />
      </div>
      <div className="products ">
        <div className="featured-wrapper flex flex-wrap justify-between mt-4 gap-4 mb-20">
          {featured.length > 0 &&
            featured.map((el, index) => {
              return <Card key={index} data={el}></Card>;
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
