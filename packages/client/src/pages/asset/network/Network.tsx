import NetworkPanel from "./NetworkPanel";
import IpTable from "./IpTable";

const Network = () => {
  return (
    <div className="flex h-full">
      <NetworkPanel />

      <IpTable />
    </div>
  );
};

export default Network;
