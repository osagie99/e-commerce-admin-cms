"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";

interface BillboardsClientProps {
  data: Billboard[]
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
    </>
  );
};

export default BillboardsClient;
