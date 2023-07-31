import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import { ThemeContext } from "./contexts";
import Footer from "./layout/components/Footer/Footer";
import Header from "./layout/components/Header/Header";
import ScrollToTop from "./layout/components/ScrollToTop/ScrollToTop";

function App() {
  //@ts-ignore
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <Hero />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
