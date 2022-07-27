import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
