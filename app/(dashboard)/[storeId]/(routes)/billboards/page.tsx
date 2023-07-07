import { FC } from "react";
import BillboardsClient from "./components/BillboardsClient";
import prismadb from "@/lib/prismadb";
import { BillboardColumm } from "./[billboardsId]/components/columns";
import { format } from "date-fns";


const BillBoardsPage = async ({
  params
}: {params: {storeId: string}}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy:{
      createdAt: "desc"
    }
  });

  const formattedBillboard: BillboardColumm[] = billboards.map((billboard) => ({
    id: billboard.id,
    label: billboard.label,
    createdAt: format(billboard.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsClient data={formattedBillboard} />
      </div>
    </div>
  );
};

export default BillBoardsPage;
