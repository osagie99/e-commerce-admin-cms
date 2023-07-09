import { FC } from "react";
import BillboardsClient from "./components/SizesClient";
import prismadb from "@/lib/prismadb";
import { SizeColumm } from "./[sizeId]/components/columns";
import { format } from "date-fns";
import SizesClient from "./components/SizesClient";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumm[] = sizes.map((sizes) => ({
    id: sizes.id,
    name: sizes.name,
    value: sizes.value,
    createdAt: format(sizes.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
