import React, { useContext, useEffect } from "react";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import DealsContainer from "../../components/Deals/DealsContainer";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import { ProductsContext } from "../../contexts/ProductsContext";

function Home() {
  const { setPageUrl } = useContext(ProductsContext);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="homePageContainer">
      <div className="mainSection">
        <div className="sliderParent">
          <Slider />
        </div>
        <div className="mainContent">
          <DealsContainer />
          <Categories />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
