import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <h3>NotFound</h3>
      <Link to={`home`}>
        <Button>Click to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
