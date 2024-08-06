import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Products from "./component/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./component/TopProduct";
import Banner from "./component/Banner";
import Subscribe from "./component/Subscribe";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Popup from "./component/Popup";
const App = () => {
   const [orderPopup, setOrderPopup] = React.useState(false);

   const handleOrderPopup = () => {
     setOrderPopup(!orderPopup);
   };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProduct />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
