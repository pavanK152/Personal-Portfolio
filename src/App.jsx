import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);
  }, []);
  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />
      <Projects />
      <Contacts />
      <>
        <p>Pavan Kalyan</p>
      </>
    </div>
  );
}

export default App;
