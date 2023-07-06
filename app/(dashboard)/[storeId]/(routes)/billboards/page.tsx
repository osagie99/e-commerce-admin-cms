import { FC } from "react";
import BillboardsClient from "./components/BillboardsClient";

interface billBoardProps {}

const BillBoardsPage: FC<billBoardProps> = ({}) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsClient />
      </div>
    </div>
  );
};

export default BillBoardsPage;
