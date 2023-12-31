"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { BillboardColumm, columns } from "../[billboardsId]/components/columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiLists } from "@/components/ui/api-lists";


interface BillboardsClientProps {
  data: BillboardColumm[]
}

const BillboardsClient: FC<BillboardsClientProps> = ({
  data
}) => {

    const router = useRouter();
    const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
            title={`Billboards (${data.length})`}
            description="Manage billboards for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 h-4 w-4"/>
            Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="billboards" searchColumn="label"/>
      <Heading  title="API" description="API Calls for billboards"/>
      <Separator />
      <ApiLists entityName="billboards" entityIdName="billboardsId"/>
    </>
  );
};

export default BillboardsClient;
