import prismadb from "@/lib/prismadb";
import BillboardForm from "./components/BillboardForm";
import { BillboardColumm } from "./components/columns";

const BillBoardPage = async ({
  params,
}: {
  params: { billboardsId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardsId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard}/>
      </div>
    </div>
  );
};

export default BillBoardPage;
