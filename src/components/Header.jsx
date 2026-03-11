import { iconMoon, iconSun } from "./icons";
export default function Header({ theme, setTheme }) {
  return (
    <div className="flex z-10 pt-12 justify-between min-w-full">
      <h1 className="text-[26px] leading-none tracking-[40%] text-white font-bold sm:text-[40px]">
        TODO
      </h1>
      <button
        className="cursor-pointer leading-none scale-80 transition-transform duration-500 sm:scale-100"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span
          className={`inline-block transition-transform duration-500 ${
            theme === "dark" ? "rotate-180" : "rotate-0"
          }`}
        >
          {theme === "light" ? iconMoon : iconSun}
        </span>
      </button>
    </div>
  );
}
