
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { themeContext } from "./Contexts/ThemeProvider";

export function App() {
  const { theme } = useContext(themeContext);

  return (
    <div className={theme === "light" ? `app flight` : `app dark`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
