import { setDarkMode } from "@/redux/Slice/darkmodeSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { darkMode } = useAppSelector((state) => state.darkmode);

  const toggleDarkMode = (checked: boolean) => {
    dispatch(setDarkMode(checked));
  };

  return (
    <DarkModeToggle onChange={toggleDarkMode} checked={darkMode} size={50} />
  );
};

export default DarkMode;
