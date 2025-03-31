import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4">
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
