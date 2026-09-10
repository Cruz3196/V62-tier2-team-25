import { useState } from "react";
import LandingPage from "./components/LandingPage";
import { Footer } from "./components/layout/footer";
import Header from './components/Header';
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutLPG from "./components/AboutLPG";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <AboutLPG />
      <Footer />
    </>
  );
}

export default App;
