import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </main>
  );
};

export default App;
