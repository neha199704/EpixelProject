import React from "react";
import "./App.css";
import Header from "./component/Header";
import FeaturesSection from "./component/FeaturesSection";
import ImageTextComponent from "./component/ ImageTextComponent";
import PhotoSection from "./component/PhotoSection";
import SignupSection from "./component/SignUpSection";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <FeaturesSection />
      <ImageTextComponent />
      <PhotoSection />
      <SignupSection />
      <Footer />
    </>
  );
};

export default App;
