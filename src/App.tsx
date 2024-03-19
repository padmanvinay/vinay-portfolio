import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import "./theme/theme.css";
import { useEffect, useState } from "react";
import Loader from "./components/UI/loader";

function App() {
  const darkmode = useAppSelector((state) => state.darkmode.darkMode);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <div className={darkmode ? "darkTheme" : "lightTheme"}>
      {loader && <Loader />}
      {!loader && <Outlet />}
    </div>
  );
}

export default App;
