import { Link, useLocation } from "react-router-dom";

const isActive = (pathname: string, currentPath: string) =>
  pathname.includes(currentPath)
    ? "border-b-2 border-primary text-primary"
    : "";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header w-full px-4 flex justify-between items-center border-b">
      <div className="">Left</div>
      <nav className="flex gap-2">
        <Link to={`home`} className={`py-1 ${isActive(pathname, "home")}`}>
          Home
        </Link>

        <Link to={`asset`} className={`py-1 ${isActive(pathname, "asset")}`}>
          Asset
        </Link>

        <Link
          to={`history`}
          className={`py-1 ${isActive(pathname, "history")}`}
        >
          History
        </Link>
      </nav>
    </header>
  );
};

export default Header;
