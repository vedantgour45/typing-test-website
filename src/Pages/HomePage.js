import React from "react";
import TypingBox from "../Components/TypingBox";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <div>
      <div className="canvas">
        <Header />
        <TypingBox />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
