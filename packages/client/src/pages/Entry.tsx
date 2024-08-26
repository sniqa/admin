import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Entry = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Entry;
