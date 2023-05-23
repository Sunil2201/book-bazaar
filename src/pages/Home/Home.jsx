import React from "react";
import "./Home.css"
import Slider from "../../components/Slider/Slider";
import DealsContainer from "../../components/Deals/DealsContainer";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="homePageContainer">
      <div className="sliderParent">
        <Slider />
      </div>
      <div className="mainContent">
        <DealsContainer />
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
