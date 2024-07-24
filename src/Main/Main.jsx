import React, { useEffect } from "react";
import Header from "../Reg/Header";
import EmblaCarousel from "./EmblaCarousel";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import "./Mian.css";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="con">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="contdown">
        <div className="cleft"></div>
        <div className="cright">
          <video
            src="vi.mp4"
            autoPlay
            loop
            muted
            width="100%"
            height="auto"
            style={{ maxWidth: "100%" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Main;
