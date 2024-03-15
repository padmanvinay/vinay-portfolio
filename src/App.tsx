import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import "./theme/theme.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const darkmode = useAppSelector((state) => state.darkmode.darkMode);

  return (
    <div className={darkmode ? "darkTheme" : "lightTheme"}>
      <AnimatedCursor
        innerSize={4}
        outerSize={18}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "2px solid white",
        }}
      />
      <Outlet />
    </div>
  );
}

export default App;
