import prismadb from "@/lib/prismadb";

interface DashBoardProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashBoardProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store is: {store?.name}</div>;
};

export default DashboardPage;