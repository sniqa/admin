import { DesktopIcon, Share1Icon } from "@radix-ui/react-icons";
import { Link, Outlet } from "react-router-dom";

const AssetEntry = () => {
  return (
    <div className="w-full h-full flex">
      <nav className="main-nav border-r flex flex-col gap-4 items-center py-2">
        <Link to={`device`}>
          <DesktopIcon className="h-5 w-5" />
        </Link>

        <Link to={`network`}>
          <Share1Icon className="h-5 w-5" />
        </Link>

        <Link to={`device`}>
          <DesktopIcon className="h-5 w-5" />
        </Link>

        <Link to={`device`}>
          <DesktopIcon className="h-5 w-5" />
        </Link>
      </nav>

      <div className="main-content ">
        <Outlet />
      </div>
    </div>
  );
};

export default AssetEntry;
