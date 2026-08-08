"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Assembles the landing page sections in their final reading order.
function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
