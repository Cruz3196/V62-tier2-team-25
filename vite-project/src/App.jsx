import { useState } from "react";
import LandingPage from "./components/LandingPage";
import { Footer } from "./components/layout/footer";
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
