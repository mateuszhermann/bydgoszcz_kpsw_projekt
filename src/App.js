import "./App.css";
import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import MainPageMobile from "./components/MainPageMobile";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowsSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowsSizeChange);
    console.log("mount");
    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowsSizeChange);
      console.log("unmount");
    };
  }, []);

  const isMobile = width <= 1024;

  if (isMobile) {
    return (
      <div className="App">
        <MainPageMobile />
      </div>
    );
  } else
    return (
      <div className="App">
        <MainPage windowWidth={width} />
      </div>
    );
}

export default App;
