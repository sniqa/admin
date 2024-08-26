import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Ws } from "@admin/common";

const SocketProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { socket } = Ws;
    const onConnect = () => {
      console.log("onConnect");
    };

    const onDisConnect = () => {
      console.log("onDisConnect");
    };

    const onSetup = () => {
      console.log("setup");

      navigate("/setup");
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisConnect);
    socket.on("setup", onSetup);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisConnect);
    };
  }, []);

  return <Outlet />;
};

export default SocketProvider;
