"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { CategoryColumns, columns } from "../[categoryId]/components/columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiLists } from "@/components/ui/api-lists";

interface CategoriesClientProps {
  data: CategoryColumns[];
}

const CategoriesClient: FC<CategoriesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="categories"
        searchColumn="name"
      />
      <Heading title="API" description="API Calls for categories" />
      <Separator />
      <ApiLists entityName="categories" entityIdName="categoryId" />
    </>
  );
};

export default CategoriesClient;
