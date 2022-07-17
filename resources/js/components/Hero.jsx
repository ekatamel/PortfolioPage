import React, { useState, useEffect } from "react";

function Hero() {
  useEffect(() => {
    const title = document.querySelector(".hero-banner__title");
    title.style.opacity = "1";
  }, []);

  return (
    <section className="hero-banner">
      <h1 className="hero-banner__title">
        Hi, I am{" "}
        <span className="hero-banner__title--styled">Ekaterina Melnichuk.</span>
      </h1>
      <div className="hero-banner__subtitle-wrapper">
        <h2 className="hero-banner__subtitle">
          I'm junior Full-stack Web developer.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
