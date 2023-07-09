"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import {  SizeColumm, columns } from "../[sizeId]/components/columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiLists } from "@/components/ui/api-lists";

interface SizesClientProps {
  data: SizeColumm[];
}

const SizesClient: FC<SizesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/sizes/new`)}
        >
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
      <Heading title="API" description="API Calls for sizes" />
      <Separator />
      <ApiLists entityName="sizes" entityIdName="sizeId" />
    </>
  );
};

export default SizesClient;
