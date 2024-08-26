import { Link, useLocation } from "react-router-dom";

const isActive = (pathname: string, currentPath: string) =>
  pathname.includes(currentPath)
    ? "border-b-2 border-primary text-primary"
    : "";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-16 px-4 flex justify-between items-center border-b">
      <div className="">Left</div>
      <nav className="flex gap-2">
        <Link to={`home`} className={`py-1 ${isActive(pathname, "home")}`}>
          Home
        </Link>

        <Link
          to={`history`}
          className={`py-1 ${isActive(pathname, "history")}`}
        >
          History
        </Link>
      </nav>
    </div>
  );
};

export default Header;
