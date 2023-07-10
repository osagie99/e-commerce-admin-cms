"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { ColorColumm, columns } from "../[colorId]/components/columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiLists } from "@/components/ui/api-lists";

interface ColorsClientProps {
  data: ColorColumm[];
}

const ColorsClient: FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchColumn="name"
      />
      <Heading title="API" description="API Calls for colors" />
      <Separator />
      <ApiLists entityName="colors" entityIdName="colors" />
    </>
  );
};

export default ColorsClient;
