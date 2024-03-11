import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";

function App() {
  const darkmode = useAppSelector((state) => state.darkmode.darkMode);
  useEffect(() => {
    if (darkmode) {
      import("./theme/dark/style.css");
    }
    if (!darkmode) {
      import("./theme/light/style.css");
    }
  }, [darkmode]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
