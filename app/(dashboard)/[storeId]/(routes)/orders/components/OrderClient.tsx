"use client";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { OrderColumn, columns } from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";
import { DataTable } from "@/components/ui/data-table";


interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: FC<OrderClientProps> = ({
  data
}) => {

    const router = useRouter();
    const params = useParams();

  return (
    <>
        <Heading
            title={`Orders (${data.length})`}
            description="Manage orders for your store"
        />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" searchColumn="products"/>
    </>
  );
};

export default OrderClient;
