import React from "react";
import Header from "../Reg/Header";
import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Main = () => {
  return (
    <>
      <Header />
      <div className="con">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
};

export default Main;
