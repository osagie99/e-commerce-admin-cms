import { FC } from "react";
import BillboardsClient from "./components/BillboardsClient";
import prismadb from "@/lib/prismadb";


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
  })
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsClient data={billboards}/>
      </div>
    </div>
  );
};

export default BillBoardsPage;
