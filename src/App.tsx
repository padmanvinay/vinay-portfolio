import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import "./theme/theme.css";

function App() {
  const darkmode = useAppSelector((state) => state.darkmode.darkMode);

  return (
    <div className={darkmode ? "darkTheme" : "lightTheme"}>
      <Outlet />
    </div>
  );
}

export default App;
