import { useTheme, useSetTheme } from "../../contexts/ThemeContext";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { useCursorMagnify } from "../../stores/useCursorMagnify";
import styles from "./ThemeToggleIcon.module.css";
import clsx from "clsx";
type Props = {
  className: string;
};

export const ThemeToggleIcon = ({ className }: Props) => {
  const theme = useTheme();
  const setTheme = useSetTheme();
  const { setMagnify } = useCursorMagnify();

  const handleToggle = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <div className={clsx(className, styles.box)}>
      <Icon
        aria-hidden="true"
        onClick={handleToggle}
        onMouseEnter={() => setMagnify(true)}
        onMouseLeave={() => setMagnify(false)}
      />
    </div>
  );
};
