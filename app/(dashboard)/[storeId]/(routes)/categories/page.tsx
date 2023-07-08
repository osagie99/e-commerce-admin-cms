import prismadb from "@/lib/prismadb";
import React from "react";

import { CategoryColumns } from "./[categoryId]/components/columns";
import { format } from "date-fns";
import CategoriesClient from "./components/CategoriesClient";

interface CategoriesPageProps {
  params: { storeId: string };
}

const CategoriesPage: React.FC<CategoriesPageProps> = async ({
  params,
}: {
  params: { storeId: string };
}) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumns[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(category.billboard.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
