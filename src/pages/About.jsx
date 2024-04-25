import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";
function About() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <div className="flex mt-20 items-center flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
            We love
          </h1>
          <button
            className={` btn ${
              theme.theme == "light" ? "btn-primary" : "bg-[#FF7AC6]"
            }  w-[172px] h-[72px] bg-primary shadow stat-title text-primary-content text-4xl font-bold tracking-widest`}
          >
            comfy
          </button>
        </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </div>
  );
}

export default About;
